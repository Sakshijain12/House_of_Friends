import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image, SafeAreaView, ScrollView} from 'react-native';
import styles from "./accountVerifyStyle";

export default function AccountVerification() {
  const route = useRoute();
  const navigation = useNavigation();
  const profile = () => {
    navigation.navigate('ProfileScreen')
  }
  const reEnter = () => {
    navigation.navigate('CreateAccountScreen')
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
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
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}