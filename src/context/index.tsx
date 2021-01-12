import React from 'react';

import { AuthProvider } from './AuthContex';

const AppProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
