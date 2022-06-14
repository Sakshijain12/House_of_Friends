import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput, SafeAreaView, ScrollView} from 'react-native';
import styles from "./profileStyle";

export default function ProfileSet() {
  const navigation = useNavigation();
  const accountCreated = () => {
    navigation.navigate('FirstScreen')
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group30.png')}></Image>
      </View>
      <View style = {styles.back}>
        <Text>Display Picture</Text>
        <Image source={require('../../assets/Dp.png')} style = {styles.pic}></Image>
        <Text>Display Name</Text>
        <TextInput style = {styles.name}></TextInput>
        <Text style= {styles.bton} onPress = {accountCreated}>Create Account</Text>
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}