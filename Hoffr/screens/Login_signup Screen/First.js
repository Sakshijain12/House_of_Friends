import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from "./firstStyle";
import { useNavigation } from '@react-navigation/native';

import { useFonts } from 'expo-font';
const image = require("../../assets/bg1.png");

export default function Login_OR_Signup() {

  const navigation = useNavigation();
  const login = () => {
    navigation.navigate('LoginScreen')
  }
  const signUp = () => {
    navigation.navigate('CreateAccountScreen')
  }

  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.img} imageStyle={{ opacity: 0.1 }}>
        <View style={styles.logo}>
          <Image source={require('../../assets/Group30.png')}></Image>
        </View>
        <View style={styles.back}>
          <View style={styles.Bton}>
            <Text style={[styles.texting, { fontFamily: "Montserrat" }]} onPress={login}>Log In</Text>
          </View>
          <View style={styles.Bton}>
            <Text style={[styles.texting, { fontFamily: "Montserrat" }]} onPress={signUp}>Sign Up</Text>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}