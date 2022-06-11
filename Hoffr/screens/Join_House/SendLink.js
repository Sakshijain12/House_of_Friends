import { StatusBar } from 'expo-status-bar';
import { View, Image, Text} from 'react-native';
import styles from "./sendLinkStyle";

export default function SendLink() {
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
        <Image source={require('../../assets/Group31.png')}></Image>
      </View>
      <View style = {styles.back}>
        <Text style = {styles.welcome}>Welcome!</Text>
        <Text style = {styles.house}>House Name</Text>
        <Text style = {styles.pic}></Text>
        <Text>Members</Text>
        <View style = {styles.gap}>
          <Text style = {styles.profile}></Text>
          <Text style = {styles.text}> Member 1</Text>
        </View>
        <View style = {styles.gap}>
          <Text style = {styles.profile}></Text>
          <Text style = {styles.text}> Member 2</Text>
        </View>
        <Text style= {styles.bton}>Join the Conversation</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}