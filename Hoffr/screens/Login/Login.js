import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
import styles from "./loginStyle";

export default function loginPage() {
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
        <Button title='Logo'></Button>
      </View>
      <View style = {styles.back}>
          <Text>Email/Mobile Number</Text>
          <Text style = {styles.box}></Text>
          <Text style = {styles.code}>Send Verification Code</Text>
          <Text style = {styles.options}>-or-</Text>
          <Text style = {styles.options}>Login with</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}