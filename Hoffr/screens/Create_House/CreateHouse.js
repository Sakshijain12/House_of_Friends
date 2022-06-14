import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Image, Text, TextInput, SafeAreaView, ScrollView } from 'react-native';
import styles from "./createHouseStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CreateHouse() {
  const camIcon = <Icon name='camera' size={50}/>;
  const [houseName , setHouseName] = useState();
  const navigation = useNavigation();
  const next = () => {
    navigation.navigate('CustomiseHouseScreen',{
      houseName : houseName,
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style = {styles.logo}>
          <Image source={require('../../assets/Group30.png')}></Image>
        </View>
        <View style = {styles.back}>
          <Text style = {{color : '#606060'}}>House Display Icon</Text>
          <Text style = {styles.pic}> {camIcon} </Text>
          <Text style = {{color : '#606060'}}>House Name</Text>
          <TextInput 
            style = {styles.name} 
            value = {houseName} 
            onChangeText = {(text) => setHouseName(text)}>
          </TextInput>
          <Text onPress = {next} style={styles.bton}>
            <Image source={require("../../assets/Group50.png")} ></Image>
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}