import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image } from 'react-native';
import styles from "./createAccountStyle";

export default function CreateAccount() {
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
          
          <Text style = {styles.login}>Send Verification Code</Text>
          <View style = {styles.bottom}>
            <Text style = {styles.options}>-or-</Text>
            <Text style = {styles.options}>Sign up with</Text>
          </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}