import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import variables from './native-base-theme/variables/variables';
import Home from './src/screens/Home';
import RootNav from "./config/RootNav"

const App = () => {
  return (
    <StyleProvider style={getTheme(variables)}>
      <>
        <StatusBar />
        <RootNav />
      </>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
