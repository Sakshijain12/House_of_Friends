import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Image, Text, TextInput, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import styles from "./createHouseStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

import { useFonts } from 'expo-font';
const image = require ("../../assets/bg1.png");

export default function CreateHouse() {
  const camIcon = <Icon name='camera' size={50}/>;
  const [houseName , setHouseName] = useState();
  const navigation = useNavigation();
  const next = () => {
    navigation.navigate('CustomiseHouseScreen',{
      houseName : houseName,
    })
  }

  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <ImageBackground source={image} style = {styles.img} imageStyle= {{opacity:0.1}}>
        <View style = {styles.logo}>
          <Image source={require('../../assets/Group30.png')}></Image>
        </View>
        <View style = {styles.back}>
          <Text style = {{color : '#606060', fontFamily: "Montserrat" }}>House Display Icon</Text>
          <Text style = {styles.pic}> {camIcon} </Text>
          <Text style = {{color : '#606060', fontFamily: "Montserrat" }}>House Name</Text>
          <TextInput 
            style = {styles.name} 
            value = {houseName} 
            onChangeText = {(text) => setHouseName(text)}>
          </TextInput>
          <Text onPress = {next} style={styles.bton}>
            <Image source={require("../../assets/Group50.png")} ></Image>
          </Text>
        </View>
        </ImageBackground>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}