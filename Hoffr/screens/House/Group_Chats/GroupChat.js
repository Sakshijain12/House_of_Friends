import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, ImageBackground, TextInput, SafeAreaView, ScrollView} from 'react-native';
import styles from "./groupStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
const image = require("../../../assets/bg1.png");

export default function HouseHome() {
  const goBack = <Ionicons name = "chevron-back-outline" size = {20} />
  const call = <Ionicons name = "call" size = {20} color = {"white"}/>
  const smile = <Ionicons name='happy-outline' size = {20} color = {"#656565"} />
  const send = <Ionicons name = "send" size = {20} color = {"#656565"} />
  const attach = <Ionicons name='attach' size={20} color = {"#656565"} />

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
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
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
            <Text> {goBack} </Text>
            <Text style = {{fontFamily : "Montserrat"}}>Chat Channel #1</Text>
            <Text style = {styles.vc}> {call} </Text>
          </View>
          <View style = {styles.ipt}>
            <Text>{smile}   </Text>
            <TextInput placeholder = "Message"></TextInput>
            <Text style = {styles.attach}> {attach}</Text>
            <Text style = {styles.sent} > {send} </Text>
          </View>
        </View>
      </ImageBackground>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}