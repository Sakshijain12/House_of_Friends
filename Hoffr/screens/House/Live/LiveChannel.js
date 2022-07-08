import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from "./liveStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
const image = require("../../../assets/bg1.png");

export default function HouseHome() {
  const goBack = <Ionicons name = "chevron-back-outline" size = {20} />
  const navigation = useNavigation();
  const home = () => {
    navigation.navigate("HouseHomeScreen")
  }

  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../../assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require("../../../assets/GrpDP.png")} style={styles.groupPic}></Image>
        <Image source={require('../../../assets/Group30.png')} style={styles.logo}></Image>
        <Text onPress={home} style = {styles.home}>
          <Image source={require("../../../assets/favicon.png")}></Image>
        </Text>
      </View>
      <ImageBackground source={image} style={styles.img} imageStyle={{ opacity: 0.1 }}>
        <View style={styles.back}>
        <View style = {styles.heading}>
            <Text>{goBack}</Text>
            <Text style = {[styles.head, {fontFamily : "Montserrat"}]}>Live Channel</Text>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}