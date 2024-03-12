import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'nativewind';
import COLORS from '../../consts/colors';

export default function Menu() {
  const { colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Toggle Theme</Text>
      <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.oneback,
    alignItems: 'center',
    justifyContent: 'center'
  }
})