import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image} from 'react-native';
import styles from "./loginStyle";

export default function loginPage() {
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group31.png')}></Image>
      </View>
      <View style = {styles.back}>
          <Text style = {styles.email}>Email/Mobile Number</Text>
          <TextInput style = {styles.box} placeholder = "Email"></TextInput>
          <Text style = {styles.code}>Send Verification Code</Text>
          <Text style = {styles.options}>-or-</Text>
          <Text style = {styles.options}>Login with</Text>
          <View style={styles.sign}>
              <Image source={require('../../assets/google.png')} style={styles.google}></Image>
              <Text style = {styles.options2}>Google</Text>
          </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}