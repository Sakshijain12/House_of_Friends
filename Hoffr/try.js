import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, Dimensions, ImageBackground } from 'react-native';
import styles from "./tryStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

const image = require ("./assets/bg1.png");
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Trial() {
    const myIcon = <Icon name="plus" size={15} color="black" style={styles.icon} />;

    return (
        <View style={styles.container}>
                <ImageBackground source = {image} resizeMode = "cover" style = {styles.bgimg}>
                    <View style={styles.logo}>
                        <Image source={require('./assets/Group30.png')}></Image>
                    </View>
                    <View style={styles.back}>
                        <Text>House 1 </Text>
                        <Text style={styles.pic}></Text>
                        <Text style={styles.newChannel}>Customise Channels</Text>

                        <Text style={styles.box}>Chat Channel <Text style={styles.text}>{"("}Default{")"}</Text>{"\n"} Live Channel <Text style={styles.text}>{"("}Default{")"}</Text></Text>

                        <Text style={styles.newChannel}>{myIcon} New Channel</Text>
                        <Text style={styles.bton}> CREATE HOUSE</Text>
                    </View>
                </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}