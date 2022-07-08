import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View , ImageBackground, Image, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './tryStyle';
const image = require("./assets/bg1.png");

export default function App(){
    const myIcon = <Icon name="plus" size={15} color="black" style={styles.icon} />;
    const [modalVisible, setModalVisible] = useState(false);
    const [chat, setChat] = useState(false);
    const [live, setLive] = useState(false);
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.img} imageStyle={{ opacity: 0.1 }}>
                <View style={styles.logo}>
                    <Image source={require('./assets/Group30.png')}></Image>
                </View>
                <View style={styles.back}>
                    <Text style={{ color: '#606060', fontWeight: '700', fontFamily: "Montserrat" }}> house name </Text>
                    <Image source={require("./assets/GrpDP.png")} style={styles.pic}></Image>
                    <Text style={[styles.newChannel, { fontFamily: "Montserrat" }]}>Customise Channels</Text>

                    <Text style={[styles.box, { fontFamily: "Montserrat" }]}>Chat Channel <Text style={[styles.text, { fontFamily: "Montserrat" }]}>{"("}Default{")"}</Text>{"\n"} Live Channel <Text style={[styles.text, { fontFamily: "Montserrat" }]}>{"("}Default{")"}</Text></Text>

                    <Text style={[styles.newChannel, { fontFamily: "Montserrat" }]} onPress={() => setModalVisible(true)}>{myIcon} New Channel</Text>
                    <Text style={[styles.bton, { fontFamily: "Montserrat" }]}> Create House</Text>
                </View>
            </ImageBackground>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setChat(!chat)}
                            >
                                <Text style={styles.textStyle}>New Chat Channel</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setLive(!live)}
                            >
                                <Text style={styles.textStyle}>New Live Channel</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Back</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={chat}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setChat(!chat);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>New Chat Channel</Text>
                            <TextInput style = {styles.ipt} placeholder = "Channel Name (Optional)"></TextInput>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setChat(!chat)}
                            >
                                <Text style={styles.textStyle}>Add</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={live}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setLive(!live);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>New Live Channel</Text>
                            <TextInput style = {styles.ipt} placeholder = "Channel Name (Optional)"></TextInput>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setLive(!live)}
                            >
                                <Text style={styles.textStyle}>Add</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};