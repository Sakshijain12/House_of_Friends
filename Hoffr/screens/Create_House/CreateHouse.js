import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import styles from "./createHouseStyle";

export default function CreateHouse() {
  const [houseName , setHouseName] = useState();
  const navigation = useNavigation();
  const next = () => {
    navigation.navigate('CreateHouseFilledScreen',{
      houseName : houseName,
    })
  }
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group31.png')}></Image>
      </View>
      <View style = {styles.back}>
        <Text>House Display Icon</Text>
        <Text style = {styles.pic}> ADD ICON</Text>
        <Text>House Name</Text>
        <TextInput 
          style = {styles.name} 
          value = {houseName} 
          onChangeText = {(text) => setHouseName(text)}>
        </TextInput>
        <Text style= {styles.bton} onPress = {next}>NEXT</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}