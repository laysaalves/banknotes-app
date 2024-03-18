import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

import COLORS from '../../consts/colors';

export default function Welcome() {
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
    
    <Animatable.View animation="slideInDown" direction="alternate" style={styles.containerLogo}>
      <Image
      source={require('../../assets/logo wallet.png')}
      style={{ width: '100%' }}
      resizeMode="contain"
      />
    </Animatable.View>

    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
    <Text style={styles.title}>Não vai cair um pix do céu direto na sua conta, organize sua grana!</Text>
    <Text style={styles.text}>*Clique no botão abaixo e faça seu login!</Text>
    

    <TouchableOpacity 
    style={styles.button}
    onPress={ () => navigation.navigate('Registrar')}
    >
      <Text style={styles.buttonText}>Acessar</Text>
    </TouchableOpacity>
    </Animatable.View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.primary
  },
  containerLogo:{
    flex: 2,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 0.9,
    backgroundColor: 'rgba(255,255,2555, 0.25)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: COLORS.boxColor,
    textAlign: 'justify'
  },
  text:{
    color: COLORS.boxColorBorder,
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 5
  },
  button:{
    position: 'absolute',
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    paddingVertical: 8,
    width: '42%',
    alignSelf: 'center',
    bottom: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: COLORS.boxColor,
    fontWeight: 'bold'
  }
})