import { StatusBar } from 'expo-status-bar';
import { View, Image, Text} from 'react-native';
import styles from "./createHouseStyle";

import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';


export default function CreateHouseFilled() {
  const route = useRoute ();
  const myIcon = <Icon name="plus" size={15} color="black" style = {styles.icon}/>;
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
        <Image source={require('../../assets/Group30.png')}></Image>
      </View>
      <View style = {styles.back}>
        <Text> {route.params.houseName} </Text>
        <Text style = {styles.pic}></Text>
        <Text style = {styles.newChannel}>Customise Channels</Text>
        
        <Text style = {styles.box}>Chat Channel <Text style = {styles.text}>{"("}Default{")"}</Text>{"\n"} Live Channel <Text style = {styles.text}>{"("}Default{")"}</Text></Text>
        
        <Text style = {styles.newChannel}>{myIcon} New Channel</Text>
        <Text style= {styles.bton}> CREATE HOUSE</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}