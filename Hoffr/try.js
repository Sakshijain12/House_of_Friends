import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, Dimensions} from 'react-native';
import styles from "./tryStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function CreateHouseFilled() {
    const myIcon = <Icon name="plus" size={15} color="black" style = {styles.icon}/>;
    return (
        <View style={styles.container}>
            <View style = {styles.logo}>
                <Image source={require('./assets/Group30.png')}></Image>
            </View>
            <View style = {styles.back}>
                <Text>House 1 </Text>
                <Text style = {styles.pic}></Text>
                <Text style = {styles.newChannel}>Customise Channels</Text>

                <Text style = {styles.box}>Chat Channel <Text style = {styles.text}>{"("}Default{")"}</Text>{"\n"} Live Channel <Text style = {styles.text}>{"("}Default{")"}</Text></Text>

                <Text style = {styles.newChannel}>{myIcon} New Channel</Text>
                <Text style= {styles.bton}> CREATE HOUSE</Text>
            </View>
            <View style={[styles.overlay, { height: 30, width : width}]}>
                <Text>HELLO</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}