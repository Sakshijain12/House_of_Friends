import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput } from 'react-native';
import styles from "./createHouseStyle";

export default function CreateHouse() {
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group31.png')}></Image>
      </View>
      <View style = {styles.back}>
        <Text>House Display Icon</Text>
        <Text style = {styles.pic}> ADD ICON</Text>
        <Text>House Name</Text>
        <TextInput style = {styles.name}></TextInput>
        <Text style= {styles.bton}>NEXT</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}