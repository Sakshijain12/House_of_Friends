import FirstPage from './screens/First/First';
import LoginPage from './screens/Login/Login';
import LoginFilledPage from './screens/Login/LoginFilled';
import CreateAccount from "./screens/Create_Account/CreateAccount";
import AccountFilled from "./screens/Create_Account/AccountFilled";
import ProfileSet from './screens/Profile_set_up/ProfileSet';
import FirstScreenPage from './screens/First_Screen/FirstScreen';
import CreateHouse from './screens/Create_House/CreateHouse';
import JoinHouse from './screens/Join_House/JoinHouse';
import CreateHouseFilled from './screens/Create_House/CreateHouseFilled';
import SendLink from './screens/Join_House/SendLink';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const  Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown : false}}>
        <Stack.Screen name = 'HomeScreen' component={FirstPage}></Stack.Screen>
        <Stack.Screen name = 'LoginScreen' component={LoginPage}></Stack.Screen>
        <Stack.Screen name = 'LoginFilledScreen' component={LoginFilledPage}></Stack.Screen>
        <Stack.Screen name = 'CreateAccountScreen' component={CreateAccount}></Stack.Screen>
        <Stack.Screen name = 'AccountFilledScreen' component={AccountFilled}></Stack.Screen>
        <Stack.Screen name = 'ProfileSetScreen' component={ProfileSet}></Stack.Screen>
        <Stack.Screen name = 'FirstScreen' component={FirstScreenPage}></Stack.Screen>
        <Stack.Screen name = 'CreateHouseScreen' component={CreateHouse}></Stack.Screen>
        <Stack.Screen name = 'JoinHouseScreen' component={JoinHouse}></Stack.Screen>
        <Stack.Screen name = 'CreateHouseFilledScreen' component={CreateHouseFilled}></Stack.Screen>
        <Stack.Screen name = 'SendLinkScreen' component={SendLink}></Stack.Screen>
      </Stack.Navigator>  
    </NavigationContainer>
  )
}