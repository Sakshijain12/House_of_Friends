import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import styles from "./profileStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

import { useFonts } from 'expo-font';
const image = require("../../../assets/bg1.png");

export default function ProfileSet() {
  const myIcon = <Icon name='gear' size={25} />;
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
      </View>
      <ImageBackground source={image} style={styles.img} imageStyle={{ opacity: 0.1 }}>
        <View style={styles.back}>
          <Text style={[styles.heading, { fontFamily: "Montserrat" }]}>Profile</Text>
          <Image source={require("../../../assets/Dp.png")} style={styles.pic}></Image>
          <Text style = {[styles.name, { fontFamily: "Montserrat" }]}>Display Name</Text>
          <Text style = {[styles.info, { fontFamily: "Montserrat" }]}>+91 99999 99999</Text>
          <Text style = {[styles.info, { fontFamily: "Montserrat" }]}>Email</Text>
          <Text style = {[styles.info, { fontFamily: "Montserrat" }]}>Change Mobile/Email</Text>
          <Text style = {[styles.info, { fontFamily: "Montserrat" }]}>Change Password</Text>
          <Text style = {[styles.info, { fontFamily: "Montserrat" }]}>Logout</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}