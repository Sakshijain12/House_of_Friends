import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image, ImageBackground} from 'react-native';
import styles from "./joinCodeStyle";

import { useFonts } from 'expo-font';
const image = require("../../assets/bg1.png");

export default function JoiningCode() {
  const navigation = useNavigation();
  const join = () => {
    navigation.navigate('HouseJoinedScreen')
  }

  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.img} imageStyle={{ opacity: 0.1 }}>
        <View style={styles.logo}>
          <Image source={require('../../assets/Group30.png')}></Image>
        </View>
        <View style={styles.back}>
          <Text style={[styles.code, { fontFamily: "Montserrat" }]}>Add joining code</Text>
          <TextInput style={[styles.box, { fontFamily: "Montserrat" }]} placeholder="Code"></TextInput>
          <Text style={[styles.join, { fontFamily: "Montserrat" }]} onPress={join}>Join</Text>
          <Text style={[styles.or, { fontFamily: "Montserrat" }]}>- or -</Text>
          <Text style={[styles.link, { fontFamily: "Montserrat" }]}>Click the invite link sent to you</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}