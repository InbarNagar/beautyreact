import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Professional_registration from '../beautyreact/comps/Professional_registration';
import ScreenOne from './comps/SceenOne';
import LogIn from './comps/LogIn';




export default function App() {
  return (
    <View style={styles.container}>

      <LogIn></LogIn>

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },*/
});
