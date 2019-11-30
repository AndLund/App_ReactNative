import React from 'react';
import {StatusBar} from 'react-native';
import Home from './src/pages/Home';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <Home />
    </>
  );
};

export default App;
