import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image } from 'react-native';
import styles from "./loginStyle";

export default function LoginFilledPage() {
  const route = useRoute();
  const navigation = useNavigation();
  const login = () => {
    navigation.navigate('FirstScreen')
  }
  const reEnter = () => {
    navigation.navigate('LoginScreen')
  }
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
        <Image source={require('../../assets/Group30.png')}></Image>
      </View>
      <View style = {styles.back}>
          <Text>Email/Mobile Number</Text>
          <Text style = {styles.box}>{route.params.email} </Text>
          <Text style = {styles.put} onPress = {reEnter}>Re-enter</Text>
          
          <Text>Verification Code (OTP)</Text>
          <TextInput style = {styles.box} placeholder = "OTP"></TextInput>
          <Text style = {styles.put}>Resend code</Text>
          <Text style = {styles.login} onPress = {login}>Log In</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}