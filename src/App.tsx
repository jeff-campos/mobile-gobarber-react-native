import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App: React.FC = () => {
  const [teste, updateTeste] = useState(false);

  useEffect(() => {
    if (teste) {
      updateTeste(state => !state);
    }
  }, [teste]);

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
