import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, ImageBackground} from 'react-native';
import styles from "./homeStyle";

import { useFonts } from 'expo-font';
const image = require("../../assets/bg1.png");

export default function HomeScreenPage() {
  const navigation = useNavigation();
  const createHouse = () => {
    navigation.navigate('CreateHouseScreen')
  }
  const joinHouse = () => {
    navigation.navigate('JoiningCodeScreen')
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
          <Text style={[styles.question, { fontFamily: "Montserrat" }]}>What would you like to do?</Text>
          <Image source={require('../../assets/Vector.png')} style={styles.img1}></Image>
          <Text style={[styles.option1, { fontFamily: "Montserrat" }]} onPress={createHouse}>Create New House</Text>
          <Image source={require('../../assets/Vector.png')} style={styles.img2}></Image>
          <Text style={[styles.option2, { fontFamily: "Montserrat" }]} onPress={joinHouse}>Join House</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}