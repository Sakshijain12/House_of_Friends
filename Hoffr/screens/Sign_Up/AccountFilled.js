import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image } from 'react-native';
import styles from "./accountFilledStyle";

export default function AccountFilled() {
  const route = useRoute();
  const navigation = useNavigation();
  const profile = () => {
    navigation.navigate('ProfileScreen')
  }
  const reEnter = () => {
    navigation.navigate('CreateAccountScreen')
  }
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
        <Image source={require('../../assets/Group30.png')}></Image>
      </View>
      <View style = {styles.back}>
          <Text style = {{color : '#606060'}}>E-mail</Text>
          <Text style = {styles.box1}> {route.params.email} </Text>
          <Text style = {styles.put} onPress = {reEnter}>Re-enter</Text>
          
          <Text style = {{color : '#606060'}}>Mobile Number</Text>
          <Text style = {styles.box1}> {route.params.mobile} </Text>
          <Text style = {styles.put} onPress = {reEnter}>Re-enter</Text>

          <Text style = {{color: '#606060'}}>Verification Code (OTP)</Text>
          <TextInput style = {styles.box2} placeholder = "OTP"></TextInput>
          <Text style = {styles.put}>Resend code</Text>
          
          <Text style = {styles.login} onPress = {profile}>Next Step</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}