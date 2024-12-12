import React from 'react';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './navigation/StackNavigator';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <StackNavigator/>
  );
};

export default App;
