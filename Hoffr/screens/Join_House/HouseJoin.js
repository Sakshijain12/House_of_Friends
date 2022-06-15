import { StatusBar } from 'expo-status-bar';
import { View, Image, Text} from 'react-native';
import styles from "./HouseJoinStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function HouseJoined() {
  const navigation = useNavigation();
  const house = () => {
    navigation.navigate('TabScreen')
  }
  const myIcon = <Icon name='gear' size={25}/>;
  return (
    <View style={styles.container}>
      <View style = {styles.top}>
        <Text style = {styles.icon}>{myIcon}</Text>
        <Image source={require("../../assets/GrpDP.png")} style = {styles.groupPic}></Image>
        <Image source={require('../../assets/Group30.png')} style = {styles.logo}></Image>
      </View>
      <View style = {styles.back}>
        <Text style = {styles.welcome}>Welcome!</Text>
        <Text style = {styles.house}>House Name</Text>
        <Image source = {require('../../assets/GrpDP.png')} style = {styles.pic}></Image>
        <Text style = {{fontSize : 20, marginBottom : 20}}>Members</Text>
        <View style = {styles.gap}>
          <Image source={require("../../assets/Member.png")} style = {styles.profile}></Image>
          <Text style = {styles.text}> Member 1</Text>
        </View>
        <View style = {styles.gap}>
          <Image source={require("../../assets/Member.png")} style = {styles.profile}></Image>
          <Text style = {styles.text}> Member 2</Text>
        </View>
        <View style = {styles.gap}>
          <Image source={require("../../assets/Member.png")} style = {styles.profile}></Image>
          <Text style = {styles.text}> Member 3</Text>
        </View>
        <Text style= {styles.bton} onPress = {house}>Join the Conversation</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}