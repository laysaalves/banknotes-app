import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation();
 return (
    <View style={styles.container}>

      <View style={styles.containerHeader}>
        <Text style={styles.message}>Opa, vamos lá!</Text>
      </View>
    
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <TextInput
            placeholder="Seu apelido"
            onChangeText={setUsername}
            value={username}
            style={styles.input}
            keyboardType="email-address"
            returnKeyType="go"
            autoFocus={true}
          />

          <TextInput
            placeholder="Escolha seu melhor e-mail"
            style={styles.input}
            onChangeText={setEmail}
            value={email}
         />
 
          <TextInput
            placeholder="Crie uma senha forte"
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
         />

          <TouchableOpacity 
           style={styles.buttonRegister}
           onPress={ () => navigation.navigate('Logar')}>
        <Text style={styles.registerText}>Já possui uma conta?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
           style={styles.button}
           onPress={ () => navigation.navigate('Home')}>
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
  buttonRegister:{
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 14
  },
  registerText:{
    color: '#224ca2',
    fontWeight: 'bold'
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
  }
})