import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

import ScreenOne from './comps/GenralComps/ScreenOne';
import LogIn from './comps/GenralComps/LogIn';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPas from './comps/GenralComps/ForgetPas';
import Professional_registration from './comps/Professional_registration';
// import TabbedPageNavigator from './comps/GenralComps/TabbedPage';
// import MaterialTabbedPage from './comps/GenralComps/MaterialTabbedPage';




const Stack = createNativeStackNavigator();
function App() {
  return (
  
      <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne" >
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="ForgetPas" component={ForgetPas} />
      </Stack.Navigator>
    </NavigationContainer>
  //  <Professional_registration></Professional_registration>

  );
}

export default App;

