import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image} from 'react-native';
import styles from "./joinHouseStyle";

export default function JoinHouse() {
  const navigation = useNavigation();
  const join = () => {
    navigation.navigate('SendLinkScreen')
  }
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group31.png')}></Image>
      </View>
      <View style = {styles.back}>
          <Text style = {styles.email}>Add joining code</Text>
          <TextInput style = {styles.box} placeholder = "Code"></TextInput>
          <Text style = {styles.code} onPress = {join}>Join</Text>
          <Text style = {styles.or}>-or-</Text>
          <Text style = {styles.link}>Click invite link sent to you</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}