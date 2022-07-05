import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import { useState } from 'react';
import styles from "./loginStyle";

import { useFonts } from 'expo-font';
const image = require ("../../assets/bg1.png");

export default function LoginPage() {

  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });

  const [email, setEmail] = useState("");
  const is_email = true;
  const mobile_number = "";

  const navigation = useNavigation();
  const loginFilled = () => {
    navigation.navigate('LoginVerificationScreen', {
      email: email,
      mobile_number: mobile_number,
      is_email: is_email
    }),
      sendingOTP();
  }
  function sendingOTP() {
    let data = { email, is_email, mobile_number };
    if (!isNaN(email)) {
      mobile_number = email;
      is_email = false;
      email = "";
    }
    fetch("http://localhost:8000/auth/send-otp-login", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((result) => {
      result.json();
    })
  }

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <ImageBackground source={image} style = {styles.img} imageStyle= {{opacity:0.1}}>
        <View style={styles.logo}>
          <Image source={require('../../assets/Group30.png')}></Image>
        </View>
        <View style={styles.back}>
          <Text style={[styles.email, { fontFamily: "Montserrat" }]}>Email/ Mobile Number</Text>
          <TextInput
            style={[styles.box, { fontFamily: "Montserrat" }]}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}></TextInput>
          <Text style={[styles.code, { fontFamily: "Montserrat" }]} onPress={loginFilled}>Send Verification Code</Text>
          <Text style={[styles.option, { fontFamily: "Montserrat" }]}>- or -</Text>
          <Text style={[styles.options, { fontFamily: "Montserrat" }]}>Login with</Text>
          <View style={[styles.sign, { fontFamily: "Montserrat" }]}>
            <Image source={require('../../assets/google.png')} style={styles.google}></Image>
            <Text style={[styles.options2, { fontFamily: "Montserrat" }]}>Google</Text>
          </View>
        </View>
        </ImageBackground>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}