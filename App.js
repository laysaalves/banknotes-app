import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./src/pages/Home";
import Routes from './src/routes';
import COLORS from './src/consts/colors';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}