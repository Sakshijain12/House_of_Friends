import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, ImageBackground} from 'react-native';
import styles from "./customiseHouseStyle";

import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';

import { useFonts } from 'expo-font';
const image = require("../../assets/bg1.png");

export default function CustomiseHouse() {
  const route = useRoute();
  const myIcon = <Icon name="plus" size={15} color="black" style={styles.icon} />;
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
          <Text style={{ color: '#606060', fontWeight: '700', fontFamily: "Montserrat" }}> {route.params.houseName} </Text>
          <Image source={require("../../assets/GrpDP.png")} style={styles.pic}></Image>
          <Text style={[styles.newChannel, { fontFamily: "Montserrat" }]}>Customise Channels</Text>

          <Text style={[styles.box, { fontFamily: "Montserrat" }]}>Chat Channel <Text style={[styles.text, { fontFamily: "Montserrat" }]}>{"("}Default{")"}</Text>{"\n"} Live Channel <Text style={[styles.text, { fontFamily: "Montserrat" }]}>{"("}Default{")"}</Text></Text>

          <Text style={[styles.newChannel, { fontFamily: "Montserrat" }]}>{myIcon} New Channel</Text>
          <Text style={[styles.bton, { fontFamily: "Montserrat" }]}> Create House</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}