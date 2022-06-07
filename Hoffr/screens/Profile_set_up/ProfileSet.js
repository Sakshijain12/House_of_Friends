import { StatusBar } from 'expo-status-bar';
import { View, Image, Text } from 'react-native';
import styles from "./profileSetStyle";

export default function ProfileSet() {
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group31.png')}></Image>
      </View>
      <View style = {styles.back}>
        <View style = {styles.Bton}>
          <Text style = {styles.texting}>LOG IN</Text>
        </View>
        <View style = {styles.Bton}>
        <Text style = {styles.texting}>SIGN UP</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}