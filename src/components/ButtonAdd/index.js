import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import COLORS from '../../consts/colors';

export default function ButtonAdd({ focused, size }) {
 return (
  <View style={[styles.container, {backgroundColor: focused ? COLORS.primaryLight : COLORS.primary } ]}>
  <FeatherIcon name="plus" size={size} color={ focused ? COLORS.secundary : '#f8f8f8' } />
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }
})