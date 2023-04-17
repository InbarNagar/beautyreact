import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPas from './ForgetPas';
import Professional_registration from '../Professional_registration';
import GenralReg from '../GenralReg';



export default function LogIn(props) {
  const [ID_number, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
   
      const response = await  fetch('http://proj.ruppin.ac.il/cgroup93/prod/api/Client/OneClient', {
        method: 'GET',
        headers:({
          "Content-type": "application/json; charset=UTF-8", 
          'Accept': "application/json; charset=UTF-8",
        }),
        body: JSON.stringify({ ID_number, password }),
      })

      const data = await response.json();

      if (data.success) {
        Alert.alert('Login successful');
        // navigate to the next screen
        props.navigation.navigate('Search')
      } 
      
      else {
        Alert.alert('Login failed', data.message);
      }
     
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.inp}>

        <TextInput
          style={styles.input}
          placeholder="תעודת זהות"
          value={ID_number}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCompleteType="email"
        />
        <Text style={styles.title}>מייל</Text>
      </View>

      <View style={styles.inp}>
        <TextInput
          style={styles.input}
          placeholder="סיסמא"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCompleteType="password"
        />
        <Text style={styles.title}>סיסמא</Text>

      </View>

      <TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate(ForgetPas)}}>
      <View > 
        <Text>שכחתי סיסמא</Text>
      </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>התחברות</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate(GenralReg)}}>
        <Text >עדיין לא נרשמתם? לחצו כאן</Text>
      </TouchableOpacity>

    </View>
     
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 50,
    backgroundColor: `#ffefd5`,
    alignItems: 'center',
    justifyContent: 'center',


  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "80%",
    marginRight: 8,
  },
  button: {
    backgroundColor: 'brown',
    borderRadius: 4,
    marginTop: 10,
    alignItems: 'center',
    width: "30%"
  },
  buttonText: {
    paddingBottom: 20,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },

  inp: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    width: "100%",

  },
});


