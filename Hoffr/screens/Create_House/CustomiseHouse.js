import React, { useState } from "react";
import { Modal, Text, Pressable, View, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import styles from './customiseHouseStyle';

const image = require("../../assets/bg1.png");

export default function App() {
    const myIcon = <Icon name="plus" size={15} color="black" style={styles.icon} />;
    const route = useRoute();
    const houseName = route.params.houseName;

    const navigation = useNavigation();
    const share = () => {
        navigation.navigate("ShareScreen", {
            houseName: houseName,
        })
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [chat, setChat] = useState(false);
    const [live, setLive] = useState(false);

    let [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    const channel_icon = require("../../assets/GrpDP.png");
    const house_obj_id = "123456";

    function create_channel() {
        let data;
        if (chat) {
            data = { chat, house_obj_id, channel_icon };
        }
        else if (live) {
            data = { live, house_obj_id, channel_icon };
        }
        fetch("https://localhost:8000/house/create_channel", {
            method: "POST",
            body: JSON.stringify(data),
        }).then((result) => {
            result.json();
        })
    }

    function getAlChannel() {
        fetch("https://localhost:8000/house/get_all_channel", {
            method: "GET",
            body: JSON.stringify(data),
        }).then((response) => response.json())
        .then((responseJson) => {
            return (JSON.stringify(responseJson));
        })
        .catch((error) => {
            return (JSON.stringify(error));
        })
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.img} imageStyle={{ opacity: 0.1 }}>
                <View style={styles.logo}>
                    <Image source={require('../../assets/Group30.png')}></Image>
                </View>
                <View style={styles.back}>
                    <Text style={{ color: '#606060', fontWeight: '700', fontFamily: "Montserrat", fontSize: 20 }}> {route.params.houseName} </Text>
                    <Image source={require("../../assets/GrpDP.png")} style={styles.pic}></Image>
                    <Text style={[styles.newChannel, { fontFamily: "Montserrat" }]}>Customise Channels</Text>

                    <Text style={[styles.box, { fontFamily: "Montserrat" }]}>Chat Channel <Text style={[styles.text, { fontFamily: "Montserrat" }]}>{"("}Default{")"}</Text>{"\n"} Live Channel <Text style={[styles.text, { fontFamily: "Montserrat" }]}>{"("}Default{")"} {"\n"}
                        <Text>
                            {getAlChannel}
                        </Text>
                    </Text></Text>

                    <Text style={[styles.newChannel, { fontFamily: "Montserrat" }]} onPress={() => setModalVisible(true)}>{myIcon} New Channel</Text>
                    <Text style={[styles.bton, { fontFamily: "Montserrat" }]} onPress={share}> Create House</Text>
                </View>
            </ImageBackground>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setChat(!chat)}
                            >
                                <Text style={[styles.textStyle, { fontFamily: "Montserrat" }]}>New Chat Channel</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setLive(!live)}
                            >
                                <Text style={[styles.textStyle, { fontFamily: "Montserrat" }]}>New Live Channel</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.backButton]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textingStyle}>Back</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={chat}
                    onRequestClose={() => {
                        setChat(!chat);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={[styles.modalText, { fontFamily: "Montserrat" }]}>New Chat Channel</Text>
                            <TextInput style={[styles.ipt, { fontFamily: "Montserrat" }]} placeholder="Channel Name (Optional)"></TextInput>
                            <Pressable
                                style={[styles.button, styles.backButton]}
                                onPress={() => setChat(!chat)}
                            >
                                <Text style={styles.textingStyle}>Add</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={live}
                    onRequestClose={() => {
                        setLive(!live);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={[styles.modalText, { fontFamily: "Montserrat" }]}>New Live Channel</Text>
                            <TextInput style={[styles.ipt, { fontFamily: "Montserrat" }]} placeholder="Channel Name (Optional)"></TextInput>
                            <Pressable
                                style={[styles.button, styles.backButton]}
                                onPress={() => setLive(!live)}
                            >
                                <Text style={styles.textingStyle}>Add</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};