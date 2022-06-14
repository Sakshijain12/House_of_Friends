import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput } from 'react-native';
import styles from "./profileStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function ProfileSet() {
  const camIcon = <Icon name='camera' size={50} />;
  const navigation = useNavigation();
  const accountCreated = () => {
    navigation.navigate('ProfileSetScreen')
  }
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
      <Image source={require('../../assets/Group30.png')}></Image>
      </View>
      <View style = {styles.back}>
        <Text style = {{color : '#606060'}}>Display Picture</Text>
        <View style = {styles.pic}>
          <Text style = {{color : 'white',textAlign : 'center', marginTop : 50}}> {camIcon} </Text>
        </View>
        <Text style = {{color : '#606060'}}>Display Name</Text>
        <TextInput style = {styles.name}></TextInput>
        <Text style= {styles.bton} onPress = {accountCreated}>Create Account</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}