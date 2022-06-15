import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image} from 'react-native';
import styles from "./joinCodeStyle";

export default function JoiningCode() {
  const navigation = useNavigation();
  const join = () => {
    navigation.navigate('HouseJoinedScreen')
  }
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group30.png')}></Image>
      </View>
      <View style = {styles.back}>
          <Text style = {styles.code}>Add joining code</Text>
          <TextInput style = {styles.box} placeholder = "Code"></TextInput>
          <Text style = {styles.join} onPress = {join}>Join</Text>
          <Text style = {styles.or}>- or -</Text>
          <Text style = {styles.link}>Click the invite link sent to you</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}