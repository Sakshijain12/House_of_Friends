import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HouseHome from './Home/Home';
import Upload from './Upload/Upload'
import GroupChats from './Group_Chats/GroupChat';
import Live from './Live/LiveChannel';
import Profile from './Profile/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';

const  Tab = createBottomTabNavigator();

export default function TabPlace() {
    return (
      <NavigationContainer independent = {true}>
        <Tab.Navigator tabBarOptions={{ showLabel: false }} screenOptions={({ route }) => ({
          headerShown : false,
          tabBarIcon: ({ color}) => {
            let iconName;
            if (route.name === 'HouseHomeScreen') {
              iconName = 'people';
            } else if (route.name === 'GroupChatScreen') {
              iconName = 'chatbubbles';
            } else if (route.name === 'LiveScreen'){
              iconName = 'videocam';
            } else if (route.name === 'UploadScreen') {
              iconName = 'cloud-upload';
            }
            else if(route.name === 'ProfileScreen'){
              iconName = 'person';
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#75D1CB',
          tabBarInactiveTintColor: '#606060',
        })}>
            <Tab.Screen name = "HouseHomeScreen" component={HouseHome} options = {{tabBarBadge : 3}}></Tab.Screen>
            <Tab.Screen name = "GroupChatScreen" component={GroupChats} options = {{tabBarBadge : 4}}></Tab.Screen>
            <Tab.Screen name = "LiveScreen" component={Live}></Tab.Screen>
            <Tab.Screen name = "UploadScreen" component={Upload}></Tab.Screen>
            <Tab.Screen name = "ProfileScreen" component={Profile}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }