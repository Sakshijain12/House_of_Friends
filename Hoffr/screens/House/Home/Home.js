import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, SafeAreaView, ScrollView, FlatList } from 'react-native';
import styles from "./homeStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const DATA = [
  {
    id: '1',
    pic: "../../../assets/Dp.png",
    name: 'Javed',
    active: "Active",
    status: "On Voice Call"
  },
  {
    id: '2',
    pic: "../../../assets/Dp.png",
    name: 'Priyanka',
    active: "Active",
    status: "On Video Call"
  },
  {
    id: '3',
    pic: "../../../assets/Dp.png",
    name: 'Mohit',
    active: "Inactive",
    status: "Last active 2 hr. ago"
  },
];

const Item = ({ pic, name, active, status }) => (
  <View style={styles.item}>
    <Image source={require("../../../assets/Dp.png")} style={styles.dp}></Image>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.name}>{active}</Text>
    <Text style={styles.name}>{status}</Text>
  </View>
);

export default function HouseHome() {

  const navigation = useNavigation();

  const arrow = <Ionicons name="chevron-forward-outline" size={25} color = "#656565"/>

  const renderItem = ({ item }) => (
    <Item pic={item.pic} name={item.name} active={item.active} status={item.status} />
  );


  const myIcon = <Icon name='gear' size={25} />;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.top}>
          <Text style={styles.icon}>{myIcon}</Text>
          <Image source={require("../../../assets/GrpDP.png")} style={styles.groupPic}></Image>
          <Image source={require('../../../assets/Group30.png')} style={styles.logo}></Image>
        </View>
        <View style={styles.back}>
          <Text style={styles.welcome}>Goa Gang</Text>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            horizontal={false}
            numColumns={2}
            keyExtractor={item => item.id} />

          <View style={styles.bton1}>
            <Text style = {styles.live}>Join Live Channel</Text>
            <Text> {arrow} </Text>
          </View>

          <View style={styles.bton2}>
            <Text style = {styles.join}>Join Chat</Text>
            <Text> {arrow} </Text>
          </View>

          <View style={styles.bton2}>
            <Text style = {styles.join}>Go to Guest Channel</Text>
            <Text> {arrow} </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}