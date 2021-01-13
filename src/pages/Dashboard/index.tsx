import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';

import { useAuth } from '../../context/AuthContex';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <Button onPress={() => signOut()}>Logout</Button>
    </View>
  );
};

export default Dashboard;
