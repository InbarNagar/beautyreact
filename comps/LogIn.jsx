import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://example.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data.success) {
                Alert.alert('Login successful');
                // navigate to the next screen
            } else {
                Alert.alert('Login failed', data.message);
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Login failed', 'An error occurred while logging in');
        }
    };

    return (
        <View style={{padding:50, backgroundColor:`#ffefd5`}}>
            <View style={styles. inp}>
            
            

          <TextInput
            style={styles.input}
            placeholder="מייל"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            autoCompleteType="email"
          /> 
           <Text >מייל</Text>   
          </View>

          <View style={styles. inp}>
          <TextInput
            style={styles.input}
            placeholder="סיסמא"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCompleteType="password"
          />
                <Text >סיסמא</Text>   
                </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>התחברות</Text>
          </TouchableOpacity>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
     
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,

      },
      input: {
        borderWidth:1,
        borderColor:'#cccccc',
        width: "80%",
        marginRight: 8,
      },
      button: {
        backgroundColor: 'brown',
        borderRadius: 4,
        marginTop: 10,
      },
      buttonText: {
        paddingBottom:40,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },

      inp:{
        flexDirection: 'row',
        padding: 15,
        justifyContent:'space-between',
        color:'red',
      },
    });
 

