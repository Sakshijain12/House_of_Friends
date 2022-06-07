import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image } from 'react-native';
import styles from "./accountFilledStyle";

export default function AccountFilled() {
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
        <Image source={require('../../assets/Group31.png')}></Image>
      </View>
      <View style = {styles.back}>
          <Text>Email</Text>
          <TextInput style = {styles.box} placeholder = "Email"></TextInput>
          
          <Text>Mobile Number</Text>
          <TextInput style = {styles.box} placeholder = "Mobile Number"></TextInput>

          <Text>Verification Code (OTP)</Text>
          <TextInput style = {styles.box} placeholder = "OTP"></TextInput>
          
          <Text style = {styles.login}>NEXT STEP</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}