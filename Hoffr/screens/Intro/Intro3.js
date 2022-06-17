import { StatusBar } from 'expo-status-bar';
import { View, Image, Text } from 'react-native';
import styles from "./introStyle";
import { useNavigation } from '@react-navigation/native';

export default function Intro3() {
    const navigation = useNavigation();
    const next = () => {
        navigation.navigate("LoginSignUpScreen")
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../../assets/Group30.png')}></Image>
            </View>
            <View style={styles.back} >
                <View style={styles.set}>
                    <Text style={styles.text}>Build life long bonds for your close knit group of friends</Text>
                    <Image style={styles.pic} source={require("../../assets/intro3.png")}></Image>
                </View>
                <Text style={styles.bton} onPress={next}>Get Started</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}