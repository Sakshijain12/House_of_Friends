import Login_OR_Signup from './screens/Login_signup Screen/First';
import LoginPage from './screens/Login/Login';
import LoginFilledPage from './screens/Login/LoginVerification';
import CreateAccount from "./screens/Sign_Up/CreateAccount";
import AccountFilled from "./screens/Sign_Up/AccountFilled";
import Profile from './screens/Profile_set_up/Profile';
import ProfileSet from './screens/Profile_set_up/ProfileSet'
import HomeScreenPage from './screens/Home_Screen/Home';
import CreateHouse from './screens/Create_House/CreateHouse';
import JoinHouse from './screens/Join_House/JoinHouse';
import CustomiseHouse from './screens/Create_House/CustomiseHouse';
import SendLink from './screens/Join_House/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const  Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown : false}}>
        <Stack.Screen name = 'HomeScreen' component={Login_OR_Signup}></Stack.Screen>
        <Stack.Screen name = 'LoginScreen' component={LoginPage}></Stack.Screen>
        <Stack.Screen name = 'LoginFilledScreen' component={LoginFilledPage}></Stack.Screen>
        <Stack.Screen name = 'CreateAccountScreen' component={CreateAccount}></Stack.Screen>
        <Stack.Screen name = 'AccountFilledScreen' component={AccountFilled}></Stack.Screen>
        <Stack.Screen name = 'ProfileScreen' component={Profile}></Stack.Screen>
        <Stack.Screen name = 'ProfileSetScreen' component={ProfileSet}></Stack.Screen>
        <Stack.Screen name = 'FirstScreen' component={HomeScreenPage}></Stack.Screen>
        <Stack.Screen name = 'CreateHouseScreen' component={CreateHouse}></Stack.Screen>
        <Stack.Screen name = 'JoinHouseScreen' component={JoinHouse}></Stack.Screen>
        <Stack.Screen name = 'CustomiseHouseScreen' component={CustomiseHouse}></Stack.Screen>
        <Stack.Screen name = 'SendLinkScreen' component={SendLink}></Stack.Screen>
      </Stack.Navigator>  
    </NavigationContainer>
  )
}