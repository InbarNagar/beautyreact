import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

import ScreenOne from './comps/GenralComps/ScreenOne';
import LogIn from './comps/GenralComps/LogIn';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPas from './comps/GenralComps/ForgetPas';
import Professional_registration from './comps/Professional_registration';
import GenralReg from './comps/GenralReg';
import Client_registration from './comps/Client_registration';
import Create_Business_Pro from './comps/Create_Business_Pro';
import Search from './comps/Search';
import Menu_treatment_registration from './comps/Menu_treatment_registration';
// import TabbedPageNavigator from './comps/GenralComps/TabbedPage';
// import MaterialTabbedPage from './comps/GenralComps/MaterialTabbedP



const Stack = createNativeStackNavigator();
function App() {
  return (

  
  
      <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne" >
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
         <Stack.Screen name="LogIn" component={LogIn} />
         <Stack.Screen name="ForgetPas" component={ForgetPas} />
         <Stack.Screen name='Professional_registration' component={Professional_registration}/>
         <Stack.Screen name='Client_registration' component={Client_registration}/>
         <Stack.Screen name='GenralReg' component={GenralReg}/>
         <Stack.Screen name='Create_Business_Pro' component={Create_Business_Pro}/>
         <Stack.Screen name='Menu_treatment_registration' component={Menu_treatment_registration}/>
        
      </Stack.Navigator>
    </NavigationContainer>
   

  );
}

export default App;

