import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text } from 'react-native';
import styles from "./homeStyle";

export default function HomeScreenPage() {
  const navigation = useNavigation();
  const createHouse = () => {
    navigation.navigate('CreateHouseScreen')
  }
  const joinHouse = () => {
    navigation.navigate('JoiningCodeScreen')
  }
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group30.png')}></Image>
      </View>
      <View style = {styles.back}>
        <Text style = {styles.question}>What would you like to do?</Text>
        <Image source={require('../../assets/Vector.png')} style = {styles.img1}></Image>
        <Text style= {styles.option1} onPress = {createHouse}>Create New House</Text>
        <Image source={require('../../assets/Vector.png')} style = {styles.img2}></Image>
        <Text style= {styles.option2} onPress = {joinHouse}>Join House</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}