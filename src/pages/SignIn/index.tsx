import React from 'react';
import { KeyboardAvoidingView, View, Platform, ScrollView } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import Logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={Logo} />
            <View>
              <Title>Faça seu Logon</Title>
            </View>

            <Input name="email" iconName="mail" placeholder="E-mail" />
            <Input name="password" iconName="lock" placeholder="Senha" />

            <Button onPress={() => {}}>Entrar</Button>

            <ForgotPassword onPress={() => console.log('Deu')}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
