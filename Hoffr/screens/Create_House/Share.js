import React, { useState } from "react";
import {Alert, View, Image, Text, ImageBackground, Modal, Pressable} from 'react-native';
import styles from "./shareStyle";

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useFonts } from 'expo-font';
const image = require("../../assets/bg1.png");

export default function Share() {
    const route = useRoute();
    const myIcon = <Icon name='gear' size={25} />;

    const sharing = <Ionicons name="share-social" size = {25}/>
    const whatsapp = <Ionicons name = "logo-whatsapp" size = {25} color ={"green"}/>
    const instagram = <Ionicons name = "logo-instagram" size = {25} color ={"orange"}/>
    const copy = <Ionicons name = "copy-outline" size = {25} color = {"black"} />
    const [modalVisible, setModalVisible] = useState(false);

    let [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.icon}>{myIcon}</Text>
                <Image source={require("../../assets/GrpDP.png")} style={styles.groupPic}></Image>
                <Image source={require('../../assets/Group30.png')} style={styles.logo}></Image>
            </View>
            <ImageBackground source={image} style={styles.img} imageStyle={{ opacity: 0.1 }}>
                <View style={styles.back}>
                    <Text style={[styles.house, { fontFamily: "Montserrat" }]}>{route.params.houseName}</Text>
                    <Image source={require('../../assets/GrpDP.png')} style={styles.pic}></Image>
                    <Text style = {[styles.member, {fontFamily : "Montserrat"}]}>No members yet!</Text>
                    <Text style = {[styles.invite, {fontFamily : "Montserrat"}]}>Invite your first housemate!</Text>
                    <View style = {styles.bottom}>
                        <Text style = {styles.bton}> {sharing} </Text>
                        <Text style={[styles.bton, { fontFamily: "Montserrat" }]} onPress={() => setModalVisible(true)}>   Send Invite Link</Text>
                    </View>
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
                                onPress={() => {Alert.alert("Hii Whatsapp");}}>
                                <Text style={styles.textStyle}> {whatsapp} </Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {Alert.alert("Hii Instagram");}}>
                                <Text style={styles.textStyle}> {instagram} </Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {Alert.alert("Copy Joining Code");}}>
                                <Text style={styles.textStyle}> {copy} </Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}