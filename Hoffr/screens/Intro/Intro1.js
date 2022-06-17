import { StatusBar } from 'expo-status-bar';
import { View, Image, Text } from 'react-native';
import styles from "./introStyle";
import { useNavigation } from '@react-navigation/native';

export default function Intro1() {
    const navigation = useNavigation();
    const next = () => {
        navigation.navigate("Intro2Screen")
    }
  return (
    <View style={styles.container}>
        <View style = {styles.logo}>
            <Image source={require('../../assets/Group30.png')}></Image>
        </View>
        <View style = {styles.back} >
            <View style = {styles.set}>
                <Text style = {styles.text}>Connect intimately with close friends over live calling</Text>
                <Image style = {styles.pic} source={require("../../assets/intro1.png")}></Image>
            </View>
            <Text style = {styles.bton} onPress = {next}>Next</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}