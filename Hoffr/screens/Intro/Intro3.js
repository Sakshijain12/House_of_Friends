import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from "./introStyle";
import { useNavigation } from '@react-navigation/native';

import { useFonts } from 'expo-font';
const image = require ("../../assets/bg1.png");

export default function Intro3() {

    let [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return null;
      }

    const navigation = useNavigation();
    const next = () => {
        navigation.navigate("LoginSignUpScreen")
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style = {styles.img} imageStyle= {{opacity:0.5}}>
            <View style={styles.logo}>
                <Image source={require('../../assets/Group30.png')}></Image>
            </View>
            <View style={styles.back} >
                <View style={styles.set}>
                    <Text style={[styles.text, {fontFamily : "Montserrat"}]}>Build life long bonds for your close knit group of friends</Text>
                    <Image style={styles.pic} source={require("../../assets/intro3.png")}></Image>
                </View>
                <Text style={[styles.bton, {fontFamily : "Montserrat"}]} onPress={next}>Get Started</Text>
            </View>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}