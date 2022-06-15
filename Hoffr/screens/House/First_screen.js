import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text} from 'react-native';
import styles from "./firstStyle";

export default function Houses() {
  const navigation = useNavigation();
  const house = () => {
    navigation.navigate('TabScreen')
  }
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
        <Image source={require('../../assets/Group30.png')}></Image>
      </View>
      <View style = {styles.back}>
        <Text style = {styles.question}> Which house would you like to enter? </Text>
        <View style = {styles.set}>
            <Image source = {require("../../assets/GrpDP.png")} style = {styles.pic}></Image>
            <Text style = {styles.text} onPress = {house}>House 1</Text>
        </View>
        <View style = {styles.set}>
            <Image source = {require("../../assets/GrpDP.png")} style = {styles.pic}></Image>
            <Text style = {styles.text} onPress = {house}>House 2</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}