import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

const navigation = useNavigation();
 return (
   <View style={styles.container}>

    <View style={styles.containerHeader}>
    <Text style={styles.message}>Crie sua nova senha...</Text>
    </View>

    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <TextInput
        placeholder="Seu e-mail para receber o link"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        returnKeyType="go"
        autoFocus={true}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('')}
      >
      <Text style={styles.buttonText}>Pronto</Text>
      </TouchableOpacity>

     </Animatable.View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3ab146'
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 29,
    borderTopRightRadius: 29,
    paddingStart: '5%',
    paddingEnd: '5%',
    padding: '12%'
  },
  title:{
    fontSize: 20,
    marginTop: 28
  },
  input:{
    backgroundColor: '#f4f3f3',
    width: '100%',
    borderRadius: 7,
    paddingVertical: 8,
    marginTop: 14,
    height: 40,
    marginBottom: 12,
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 8
  },
  button:{
    backgroundColor: '#3ab146',
    width: '100%',
    borderRadius: 50,
    paddingVertical: 8,
    width: '42%',
    alignSelf: 'center',
    marginTop: '9%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonForgot:{
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 14
  },
  forgotText:{
    color: '#224ca2'
  },
  buttonRegister:{
    width: '100%',
    alignItems: 'center',
    marginTop: 23
  },
  divisor:{
    marginTop: '10%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  divisorLine:{
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5
  },
  registerContainer:{
    flexDirection: 'row',
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  registerText:{
    color: '#C4c4c4',
    paddingRight: 5,
    fontWeight: 'bold'
  },
  registerButton:{
    color: '#224ca2'
  }
})