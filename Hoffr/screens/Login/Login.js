import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image, SafeAreaView, ScrollView} from 'react-native';
import { useState } from 'react';
import styles from "./loginStyle";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();
  const loginFilled = () => {
    navigation.navigate('LoginVerificationScreen',{
      email : email,
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style = {styles.logo}>
          <Image source={require('../../assets/Group30.png')}></Image>
        </View>
        <View style = {styles.back}>
          <Text style = {styles.email}>Email/ Mobile Number</Text>
          <TextInput 
            style = {styles.box} 
            placeholder = "Email" 
            value={email} 
            type = 'email'
            onChangeText={(text) => setEmail(text)}></TextInput>
          <Text style = {styles.code} onPress = {loginFilled}>Send Verification Code</Text>
          <Text style = {styles.option}>- or -</Text>
          <Text style = {styles.options}>Login with</Text>
          <View style={styles.sign}>
              <Image source={require('../../assets/google.png')} style={styles.google}></Image>
              <Text style = {styles.options2}>Google</Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}