import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image, SafeAreaView, ScrollView} from 'react-native';
import { useState } from 'react';
import styles from "./createAccountStyle";

export default function CreateAccount() {
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();

  const navigation = useNavigation();
  const sign = () => {
    navigation.navigate('AccountVerificationScreen',{
      email : email,
      mobile : mobile,
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style = {styles.logo}>
          <Image source={require('../../assets/Group30.png')}></Image>
        </View>
        <View style = {styles.back}>
          <Text style = {{color : '#606060'}}>E-mail</Text>
          <TextInput 
            style = {styles.box} 
            placeholder = "Email"
            value = {email}
            type = 'email'
            onChangeText = {(text) => setEmail(text)}>
          </TextInput>
          
          <Text style = {{color:'#606060'}}>Mobile Number</Text>
          <TextInput 
            style = {styles.box} 
            placeholder = "Mobile Number"
            value = {mobile}
            keyboardType={'phone-pad'}
            onChangeText = {(text) => setMobile(text)}>
          </TextInput>
          
          <Text style = {styles.login} onPress = {sign}>Send Verification Code</Text>
          <View style = {styles.bottom}>
            <Text style = {styles.options}>- or -</Text>
            <Text style = {styles.options1}>Sign up with</Text>
          </View>  
          <View style={styles.sign}>
            <Image source={require('../../assets/google.png')} style={styles.google}></Image>
            <Text style = {styles.options2}>Google</Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}