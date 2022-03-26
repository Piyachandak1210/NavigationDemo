import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
//import { MainStackNavigator } from './Screens/Navigations/StackNAvigator';
//import BottomTabNavigator from './Screens/Navigations/TabNavigator';
import DrawerNavigator from './Screens/Navigations/DrawerNavigator';


const App =()=>{
  return(<NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>
  );
}



export default App;
