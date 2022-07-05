import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import styles from "./profileStyle";

import { useFonts } from 'expo-font';
const image = require("../../assets/bg1.png");

export default function ProfileSet() {
  const route = useRoute();
  const display_pic = route.params.display_pic;
  const navigation = useNavigation();
  const accountCreated = () => {
    navigation.navigate('HomeScreen')
  }
  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <ImageBackground source={image} style={styles.img} imageStyle={{ opacity: 0.1 }}>
          <View style={styles.logo}>
            <Image source={require('../../assets/Group30.png')}></Image>
          </View>
          <View style={styles.back}>
            <Text style={{ fontFamily: "Montserrat" }}>Display Picture</Text>
            <Image source={{
              uri: display_pic,
            }} style={styles.pic}></Image>
            <Text style={{ fontFamily: "Montserrat" }}>Display Name</Text>
            <Text style={styles.name}>{route.params.name}</Text>
            <Text style={[styles.bton, { fontFamily: "Montserrat" }]} onPress={accountCreated}>Create Account</Text>
          </View>
        </ImageBackground>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}