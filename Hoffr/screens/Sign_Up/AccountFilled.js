import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image } from 'react-native';
import styles from "./createAccountStyle";

export default function AccountFilled() {
  const route = useRoute();
  const navigation = useNavigation();
  const profile = () => {
    navigation.navigate('ProfileScreen')
  }
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
        <Image source={require('../../assets/Group30.png')}></Image>
      </View>
      <View style = {styles.back}>
          <Text>Email</Text>
          <Text style = {styles.box}> {route.params.email} </Text>
          
          <Text>Mobile Number</Text>
          <Text style = {styles.box}> {route.params.mobile} </Text>

          <Text>Verification Code (OTP)</Text>
          <TextInput style = {styles.box} placeholder = "OTP"></TextInput>
          
          <Text style = {styles.login} onPress = {profile}>NEXT STEP</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}