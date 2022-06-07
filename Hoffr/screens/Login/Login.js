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
          <Text>Email/Mobile Number</Text>
          <TextInput style = {styles.box} placeholder = "Email"></TextInput>
          <Text style = {styles.code}>Send Verification Code</Text>
          <Text style = {styles.options}>-or-</Text>
          <Text style = {styles.options}>Login with</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}