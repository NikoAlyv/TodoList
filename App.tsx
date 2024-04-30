/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Rooter} from './src/router/Rooter';

const App = () => {
  return (
    <SafeAreaProvider>
      <Rooter />
    </SafeAreaProvider>
  );
};

export default App;
