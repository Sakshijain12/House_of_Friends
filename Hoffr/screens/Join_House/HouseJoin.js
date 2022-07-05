import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, ImageBackground} from 'react-native';
import styles from "./HouseJoinStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { useFonts } from 'expo-font';
const image = require("../../assets/bg1.png");

export default function HouseJoined() {
  const navigation = useNavigation();
  const house = () => {
    navigation.navigate('TabScreen')
  }
  const myIcon = <Icon name='gear' size={25} />;

  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.icon}>{myIcon}</Text>
        <Image source={require("../../assets/GrpDP.png")} style={styles.groupPic}></Image>
        <Image source={require('../../assets/Group30.png')} style={styles.logo}></Image>
      </View>
      <ImageBackground source={image} style={styles.img} imageStyle={{ opacity: 0.1 }}>
        <View style={styles.back}>
          <Text style={[styles.welcome, { fontFamily: "Montserrat" }]}>Welcome!</Text>
          <Text style={[styles.house, { fontFamily: "Montserrat" }]}>Goa Gang</Text>
          <Image source={require('../../assets/GrpDP.png')} style={styles.pic}></Image>
          <Text style={{ fontSize: 20, marginBottom: 20, fontFamily: "Montserrat", fontWeight: '600' }}>Members</Text>
          <View style={styles.gap}>
            <Image source={require("../../assets/Member.png")} style={styles.profile}></Image>
            <Text style={[styles.text, { fontFamily: "Montserrat" }]}> Member 1</Text>
          </View>
          <View style={styles.gap}>
            <Image source={require("../../assets/Member.png")} style={styles.profile}></Image>
            <Text style={[styles.text, { fontFamily: "Montserrat" }]}> Member 2</Text>
          </View>
          <View style={styles.gap}>
            <Image source={require("../../assets/Member.png")} style={styles.profile}></Image>
            <Text style={[styles.text, { fontFamily: "Montserrat" }]}> Member 3</Text>
          </View>
          <Text style={[styles.bton, { fontFamily: "Montserrat" }]} onPress={house}>Join the Conversation</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}