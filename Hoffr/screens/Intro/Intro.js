import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import styles from './introStyle';

export default function Intro(){
  const width = new Animated.Value(30);
  const height = new Animated.Value(60);
  const SITE_BANNER_VERTICAL_IMAGE = "https://github.com/Sakshijain12/House_of_Friends/blob/main/Hoffr/assets/Group30.png";

  useEffect(() => {
    Animated.timing(
      width, // The animated value to drive
      {
        toValue: 300, // Animate to opacity: 1 (opaque)
        duration: 450, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); // Starts the animation
    Animated.timing(
      height, // The animated value to drive
      {
        toValue: 700, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); // Starts the animation
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{uri: SITE_BANNER_VERTICAL_IMAGE}}
        style={{
          width: width,
          height: 150,
          position: 'absolute',
          top : 350,
        }}
      />
    </View>
  );
};
