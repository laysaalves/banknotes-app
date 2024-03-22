import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation();
 return (
   <View style={styles.container}>

    <View style={styles.containerHeader}>
      <Text style={styles.message}>Bem-vindo(a)!</Text>
    </View>

    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <TextInput
        placeholder="Seu email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        keyboardType="email-address"
        returnKeyType="go"
        autoFocus={true}
      /> 

      <TextInput
        placeholder="Sua senha"
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      <TouchableOpacity 
        onPress={ () => navigation.navigate('Recriar senha')}
        style={styles.buttonForgot}
      >
      <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity 
       style={styles.button}
       >
      <Text style={styles.buttonText}>Pronto</Text>
      </TouchableOpacity>
      
      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{  marginHorizontal: '3%' }} >OU</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Clique aqui para</Text>
      <TouchableOpacity 
        onPress={ () => navigation.navigate('Registrar')}
        style={styles.registerButton}
      >
      <Text style={styles.registerButton}>criar sua conta!</Text>
      </TouchableOpacity>

       </View>

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
    color: '#224ca2',
    fontWeight: 'bold'
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
    paddingRight: 5
  },
  registerButton:{
    color: '#224ca2',
    fontWeight: 'bold'
  }
})