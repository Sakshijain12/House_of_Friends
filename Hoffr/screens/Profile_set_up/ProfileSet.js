import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput } from 'react-native';
import styles from "./profileSetStyle";

export default function ProfileSet() {
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group31.png')}></Image>
      </View>
      <View style = {styles.back}>
        <Text>Display Picture</Text>
        <Text style = {styles.pic}></Text>
        <Text>Display Name</Text>
        <TextInput style = {styles.name}></TextInput>
        <Text style= {styles.bton}>CREATE ACCOUNT</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}