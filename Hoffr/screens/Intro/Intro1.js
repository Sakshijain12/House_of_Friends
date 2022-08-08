import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, ImageBackground, TouchableOpacity, Button } from 'react-native';
import styles from "./introStyle";
import { useNavigation } from '@react-navigation/native';

import { useFonts } from 'expo-font';
const image = require("../../assets/bg1.png");

export default function Intro1() {

  const navigation = useNavigation();
  const next = () => {
    navigation.navigate("Intro2Screen")
  }
  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.img} imageStyle={{ opacity: 0.2 }}>
        <View style={styles.logo}>
          <Image source={require('../../assets/Group30.png')}></Image>
        </View>
        <View style={styles.back} >
          <View style={styles.set}>
            <Text style={[styles.text, { fontFamily: "Montserrat" }]}>Connect intimately with close friends over live calling</Text>
            <Image style={styles.pic} source={require("../../assets/intro1.png")}></Image>
          </View>
          <Text style={[styles.bton, { fontFamily: "Montserrat" }]} onPress={next}>Next</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}