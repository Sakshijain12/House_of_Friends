import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TextInput, Image, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import styles from "./loginVerificationStyle";

import { useFonts } from 'expo-font';
const image = require("../../assets/bg1.png");

export default function LoginVerificationPage() {

  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });

  const route = useRoute();

  const email = route.params.email;
  const mobile_number = route.params.mobile_number;
  const is_email = route.params.is_email;
  const country_code = "91";
  const [otp, setOTP] = useState();

  const navigation = useNavigation();
  const login = () => {
    navigation.navigate('HousesScreen');
    verify();
  }
  const reEnter = () => {
    navigation.navigate('LoginScreen')
  }

  function verify() {
    let data = { email, is_email, otp, mobile_number, country_code };
    fetch("http://localhost:8000/auth/verify-otp-registration", {
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
        <ImageBackground source={image} style={styles.img} imageStyle={{ opacity: 0.1 }}>
          <View style={styles.logo}>
            <Image source={require('../../assets/Group30.png')}></Image>
          </View>
          <View style={styles.back}>
            <Text style={{ color: '#606060', fontFamily: "Montserrat" }}>Email/Mobile Number</Text>
            <Text style={[styles.box1, { fontFamily: "Montserrat" }]}>{route.params.email} </Text>
            <Text style={[styles.put, { fontFamily: "Montserrat" }]} onPress={reEnter}>Re-enter</Text>

            <Text style={{ color: '#606060', fontFamily: "Montserrat" }}>Verification Code (OTP)</Text>
            <TextInput
              style={[styles.box2, { fontFamily: "Montserrat" }]}
              placeholder="OTP"
              value={otp}
              onChangeText={(text) => setOTP(text)}>
            </TextInput>
            <Text style={[styles.put, { fontFamily: "Montserrat" }]}>Resend code</Text>
            <Text style={[styles.login, { fontFamily: "Montserrat" }]} onPress={login}>Log In</Text>
          </View>
        </ImageBackground>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}