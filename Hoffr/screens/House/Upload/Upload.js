import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from "./uploadStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
const image = require("../../../assets/bg1.png");

export default function HouseHome() {
  const doc = <Ionicons name="document-text-outline" color="white" size={100} />
  const pic = <Ionicons name="images" color="white" size={100} />
  const head = <Ionicons name="headset" color="white" size={100} />
  const video = <Ionicons name="caret-forward-circle" color="white" size={100} />

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
          <Text style={[styles.heading, { fontFamily: "Montserrat" }]}>Shared with me</Text>
          <View style={styles.group}>
            <Image source={require("../../../assets/photos.png")}></Image>
            <Text style={styles.photo}> {pic} </Text>
            <Image source={require("../../../assets/videos.png")}></Image>
            <Text style={styles.document}> {video} </Text>
          </View>
          <View style={styles.group}>
            <Image source={require("../../../assets/music.png")}></Image>
            <Text style={styles.photo}> {head} </Text>
            <Image source={require("../../../assets/documents.png")}></Image>
            <Text style={styles.document}>{doc}</Text>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}