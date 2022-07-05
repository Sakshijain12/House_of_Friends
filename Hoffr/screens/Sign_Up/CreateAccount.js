import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import { useState } from 'react';
import styles from "./createAccountStyle";

import { useFonts } from 'expo-font';
const image = require ("../../assets/bg1.png");

export default function CreateAccount() {
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const country_code = "91";
  const verification_type = "phone";

  const navigation = useNavigation();
  const sign = () => {
    navigation.navigate('AccountVerificationScreen',{
      email : email,
      mobile : mobile,
      verification_type : verification_type,
      country_code : country_code
    });
    sendingOTP();
  }
  function sendingOTP(){
    let data = {country_code, mobile, verification_type, email};
    fetch("http://localhost:8000/auth/sent-otp-registration", {
      method : "POST",
      body : JSON.stringify(data),
    }).then((result) => {
      result.json();
    })
  }
  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <ImageBackground source={image} style = {styles.img} imageStyle= {{opacity:0.1}}>
        <View style = {styles.logo}>
          <Image source={require('../../assets/Group30.png')}></Image>
        </View>
        <View style = {styles.back}>
          <Text style = {{color : '#606060', fontFamily: "Montserrat" }}>E-mail</Text>
          <TextInput 
            style = {[styles.box, { fontFamily: "Montserrat" }]} 
            placeholder = "Email"
            value = {email}
            type = 'email'
            onChangeText = {(text) => setEmail(text)}>
          </TextInput>
          
          <Text style = {{color:'#606060', fontFamily: "Montserrat" }}>Mobile Number</Text>
          <TextInput 
            style = {[styles.box, { fontFamily: "Montserrat" }]} 
            placeholder = "Mobile Number"
            value = {mobile}
            keyboardType={'phone-pad'}
            onChangeText = {(text) => setMobile(text)}>
          </TextInput>
          
          <Text style = {[styles.login, { fontFamily: "Montserrat" }]} onPress = {sign}>Send Verification Code</Text>
          <View style = {styles.bottom}>
            <Text style = {[styles.options, { fontFamily: "Montserrat" }]}>- or -</Text>
            <Text style = {[styles.options1, { fontFamily: "Montserrat" }] }>Sign up with</Text>
          </View>  
          <View style={styles.sign}>
            <Image source={require('../../assets/google.png')} style={styles.google}></Image>
            <Text style = {[styles.options2, { fontFamily: "Montserrat" }]}>Google</Text>
          </View>
        </View>
        </ImageBackground>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}