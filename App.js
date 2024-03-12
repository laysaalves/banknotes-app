import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./src/pages/Home";
import Routes from './src/routes';

export default function App() {
  return (
      <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}