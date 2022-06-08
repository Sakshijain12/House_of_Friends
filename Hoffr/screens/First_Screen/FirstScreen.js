import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput } from 'react-native';
import styles from "./firstScreenStyle";

export default function ProfileSet() {
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group31.png')}></Image>
      </View>
      <View style = {styles.back}>
        <Text style = {styles.question}>What would you like to do?</Text>
        <Text style = {styles.option}>Create New House</Text>
        <Text style = {styles.option}>Join House</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}