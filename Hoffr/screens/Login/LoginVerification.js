import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image, SafeAreaView, ScrollView} from 'react-native';
import styles from "./loginVerificationStyle";

export default function LoginFilledPage() {
  const route = useRoute();
  const navigation = useNavigation();
  const login = () => {
    navigation.navigate('FirstScreen')
  }
  const reEnter = () => {
    navigation.navigate('LoginScreen')
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style = {styles.logo}>
          <Image source={require('../../assets/Group30.png')}></Image>
        </View>
        <View style = {styles.back}>
          <Text style = {{color : '#606060'}}>Email/Mobile Number</Text>
          <Text style = {styles.box1}>{route.params.email} </Text>
          <Text style = {styles.put} onPress = {reEnter}>Re-enter</Text>
          
          <Text style = {{color : '#606060'}}>Verification Code (OTP)</Text>
          <TextInput style = {styles.box2} placeholder = "OTP"></TextInput>
          <Text style = {styles.put}>Resend code</Text>
          <Text style = {styles.login} onPress = {login}>Log In</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}