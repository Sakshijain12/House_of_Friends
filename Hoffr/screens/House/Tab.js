import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HouseHome from './Home/Home';
import Chats from './Chats/Chats'
import GroupChats from './Group_Chats/GroupChat';
import Live from './Live/LiveChannel';
import Profile from './Profile/Profile';

const  Tab = createBottomTabNavigator();

export default function TabPlace() {
    return (
      <NavigationContainer independent = {true}>
        <Tab.Navigator screenOptions={{headerShown : false}}>
            <Tab.Screen name = "ChatScreen" component={Chats}></Tab.Screen>
            <Tab.Screen name = "GroupChatScreen" component={GroupChats}></Tab.Screen>
            <Tab.Screen name = "LiveScreen" component={Live}></Tab.Screen>
            <Tab.Screen name = "HouseHomeScreen" component={HouseHome}></Tab.Screen>
            <Tab.Screen name = "ProfileScreen" component={Profile}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }