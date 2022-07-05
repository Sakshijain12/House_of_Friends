import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import styles from "./firstStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

import { useFonts } from 'expo-font';
const image = require ("../../assets/bg1.png");

export default function Houses() {
  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });

  const myIcon = <Icon name="plus" size={40} color="white" style={styles.icon} />;
  const navigation = useNavigation();
  const house = () => {
    navigation.navigate('TabScreen')
  }
  const create = () => {
    navigation.navigate("CreateHouseScreen")
  }

  const join = () => {
    navigation.navigate("JoiningCodeScreen")
  }
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <ImageBackground source={image} style = {styles.img} imageStyle= {{opacity:0.1}}>
          <View style={styles.logo}>
            <Image source={require('../../assets/Group30.png')}></Image>
          </View>
          <View style={styles.back}>
            <Text style={[styles.question, { fontFamily: "Montserrat" }]}> Which house would you like to enter? </Text>
            <View style={styles.set}>
              <Image source={require("../../assets/GrpDP.png")} style={styles.pic}></Image>
              <Text style={[styles.text, { fontFamily: "Montserrat" }]} onPress={house}>House 1</Text>
            </View>
            <View style={styles.set}>
              <Image source={require("../../assets/GrpDP.png")} style={styles.pic}></Image>
              <Text style={[styles.text, { fontFamily: "Montserrat" }]} onPress={house}>House 2</Text>
            </View>
            <View style={styles.add}>
              <Text style={[styles.new1, { fontFamily: "Montserrat" }]} onPress={join}>Join House</Text>
              <Text style={[styles.new2, { fontFamily: "Montserrat" }]} onPress={create}>Create House</Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}