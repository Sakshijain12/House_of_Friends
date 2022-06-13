import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput } from 'react-native';
import styles from "./firstScreenStyle";

export default function FirstScreenPage() {
  const navigation = useNavigation();
  const createHouse = () => {
    navigation.navigate('CreateHouseScreen')
  }
  const joinHouse = () => {
    navigation.navigate('JoinHouseScreen')
  }
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group30.png')}></Image>
      </View>
      <View style = {styles.back}>
        <Text style = {styles.question}>What would you like to do?</Text>
        <Text style = {styles.option1} onPress = {createHouse}>Create New House</Text>
        <Text style = {styles.option2} onPress = {joinHouse}>Join House</Text>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}