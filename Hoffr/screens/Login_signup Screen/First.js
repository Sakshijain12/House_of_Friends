import { StatusBar } from 'expo-status-bar';
import { View, Image, Text } from 'react-native';
import styles from "./firstStyle";
import { useNavigation } from '@react-navigation/native';

export default function Login_OR_Signup() {

  const navigation = useNavigation();
  const login = () => {
    navigation.navigate('LoginScreen')
  }
  const signUp = () => {
    navigation.navigate('CreateAccountScreen')
  }

  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group30.png')}></Image>
      </View>
      <View style = {styles.back}>
        <View style = {styles.Bton}>
          <Text style = {styles.texting} onPress = {login}>Log In</Text>
        </View>
        <View style = {styles.Bton}>
        <Text style = {styles.texting} onPress = {signUp}>Sign Up</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}