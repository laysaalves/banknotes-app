import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Switch, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'nativewind';
import COLORS from '../../consts/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Menu() {
  return (
    <ScrollView style={styles.container} vertical={false} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <TouchableOpacity style={styles.actionButton}>
        <View>
        <FeatherIcon name="moon" size={29} color={COLORS.darkGreen} />
        </View>
        <Text style={styles.labelButton}>Dark Mode</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
        <View>
        <FeatherIcon name="globe" size={29} color={COLORS.darkGreen} />
        </View>
        <Text style={styles.labelButton}>Idioma</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
        <View>
        <FeatherIcon name="help-circle" size={29} color={COLORS.darkGreen} />
        </View>
        <Text style={styles.labelButton}>Ajuda</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
        <View>
        <FeatherIcon name="zap" size={29} color={COLORS.darkGreen} />
        </View>
        <Text style={styles.labelButton}>Novidades</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
        <View>
        <FeatherIcon name="message-circle" size={29} color={COLORS.darkGreen} />
        </View>
        <Text style={styles.labelButton}>Fale conosco!</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.oneback,
    marginBottom: 14,
    paddingEnd: 14,
    paddingStart: 14,
    paddingTop: 20
},
  actionButton:{
    marginRight: 27,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15
},
  labelButton:{
    marginTop: 4,
    marginLeft: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.darkGreen
}
})