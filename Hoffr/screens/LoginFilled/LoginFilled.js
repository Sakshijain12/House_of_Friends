import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image } from 'react-native';
import styles from "./loginFilledStyles";

export default function LoginFilledPage() {
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
        <Image source={require('../../assets/Group31.png')}></Image>
      </View>
      <View style = {styles.back}>
          <Text>Email/Mobile Number</Text>
          <TextInput style = {styles.box} placeholder = "Email"></TextInput>
          <Text style = {styles.put}>Re-enter</Text>
          
          <Text>Verification Code (OTP)</Text>
          <TextInput style = {styles.box} placeholder = "OTP"></TextInput>
          <Text style = {styles.put}>Resend code</Text>
          <Text style = {styles.login}>LOG IN</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}