import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Image, Text, TextInput, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import styles from "./profileStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

import { useFonts } from 'expo-font';
const image = require("../../assets/bg1.png");

export default function ProfileSet() {

  const route = useRoute();
  const email = route.params.email;
  const mobile_number = route.params.mobile_number;
  const country_code = route.params.country_code;
  const [name, setName] = useState();
  const display_pic = "https://thumbs.dreamstime.com/z/big-waterfall-forest-14638783.jpg";

  const camIcon = <Icon name='camera' size={50} />;
  const navigation = useNavigation();
  const accountCreated = () => {
    navigation.navigate('ProfileSetScreen', {
      name: name,
      display_pic: display_pic
    });
    register();
  }

  function register() {
    let data = { name, country_code, mobile_number, email, display_pic };
    fetch("http://localhost:8000/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((result) => {
      result.json();
    })
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
            <Text style={{ color: '#606060', fontFamily: "Montserrat" }}>Display Picture</Text>
            <View style={styles.pic}>
              <Text style={{ color: 'white', textAlign: 'center', marginTop: 50 }}> {camIcon} </Text>
            </View>
            <Text style={{ color: '#606060', fontFamily: "Montserrat" }}>Display Name</Text>
            <TextInput style={styles.name} value={name} onChangeText={(text) => setName(text)}></TextInput>
            <Text style={[styles.bton, { fontFamily: "Montserrat" }]} onPress={accountCreated}>Create Account</Text>
          </View>
        </ImageBackground>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}