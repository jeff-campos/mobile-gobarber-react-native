import React, {
  useEffect,
  useCallback,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValuereference {
  value: string;
}

interface InputRef {
  focus: HTMLInputElement;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const [isFocus, updateIsFocus] = useState(false);
  const [isFilled, updateIsFilled] = useState(false);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);

  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValuereference>({ value: defaultValue });

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    updateIsFocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    updateIsFocus(false);
    updateIsFilled(!!inputValueRef.current.value);
  }, []);

  return (
    <Container isFocus={isFocus}>
      <Icon
        name={icon}
        size={20}
        color={isFocus || isFilled ? '#FF9000' : '#666360'}
      />

      <TextInput
        ref={inputElementRef}
        keybordAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={(value: string) => {
          inputValueRef.current.value = value;
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
