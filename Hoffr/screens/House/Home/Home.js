import { StatusBar } from 'expo-status-bar';
import { View, Image, Text} from 'react-native';
import styles from "./homeStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HouseHome() {
  const myIcon = <Icon name='gear' size={25}/>;
  return (
    <View style={styles.container}>
      <View style = {styles.top}>
        <Text style = {styles.icon}>{myIcon}</Text>
        <Image source={require("../../../assets/GrpDP.png")} style = {styles.groupPic}></Image>
        <Image source={require('../../../assets/Group30.png')} style = {styles.logo}></Image>
      </View>
      <View style = {styles.back}>
        <Text style = {styles.welcome}>Goa Gang</Text>
        
        <Text style= {styles.bton}>Join the Conversation</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}