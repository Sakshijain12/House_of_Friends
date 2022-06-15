import Login_OR_Signup from './screens/Login_signup Screen/First';
import LoginPage from './screens/Login/Login';
import LoginVerificationPage from './screens/Login/LoginVerification';

import Houses from './screens/House/First_screen';
import TabPlace from './screens/House/Tab';

import CreateAccount from "./screens/Sign_Up/CreateAccount";
import AccountVerification from "./screens/Sign_Up/AccountVerification";
import Profile from './screens/Profile_set_up/Profile';
import ProfileSet from './screens/Profile_set_up/ProfileSet';

import HomeScreenPage from './screens/Home_Screen/Home';

import CreateHouse from './screens/Create_House/CreateHouse';
import CustomiseHouse from './screens/Create_House/CustomiseHouse';
import JoiningCode from './screens/Join_House/JoiningCode';
import HouseJoined from './screens/Join_House/HouseJoin';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const  Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown : false}}>
        <Stack.Screen name = 'LoginSignUpScreen' component={Login_OR_Signup}></Stack.Screen>
        <Stack.Screen name = 'LoginScreen' component={LoginPage}></Stack.Screen>
        <Stack.Screen name = 'LoginVerificationScreen' component={LoginVerificationPage}></Stack.Screen>

        <Stack.Screen name = 'CreateAccountScreen' component={CreateAccount}></Stack.Screen>
        <Stack.Screen name = 'AccountVerificationScreen' component={AccountVerification}></Stack.Screen>
        <Stack.Screen name = 'ProfileScreen' component={Profile}></Stack.Screen>
        <Stack.Screen name = 'ProfileSetScreen' component={ProfileSet}></Stack.Screen>

        <Stack.Screen name = 'HomeScreen' component={HomeScreenPage}></Stack.Screen>

        <Stack.Screen name = 'CreateHouseScreen' component={CreateHouse}></Stack.Screen>
        <Stack.Screen name = 'CustomiseHouseScreen' component={CustomiseHouse}></Stack.Screen>
        <Stack.Screen name = 'JoiningCodeScreen' component={JoiningCode}></Stack.Screen>
        <Stack.Screen name = 'HouseJoinedScreen' component={HouseJoined}></Stack.Screen>
        
        <Stack.Screen name = 'HousesScreen' component={Houses}></Stack.Screen>
        <Stack.Screen name='TabScreen' component={TabPlace}></Stack.Screen>
      </Stack.Navigator>  
    </NavigationContainer>
  )
}