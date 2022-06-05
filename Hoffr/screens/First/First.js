import { StatusBar } from 'expo-status-bar';
import { View, Button } from 'react-native';
import styles from "./firstStyle";

export default function firstPage() {
  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
        <Button title='Logo' style = {styles.Bton}></Button>
      </View>
      <View style = {styles.back}>
        <View style = {styles.Bton}>
          <Button title='Login' style = {styles.Bton}></Button>
        </View>
        <View style = {styles.Bton}>
          <Button title='Sign Up' style = {styles.Bton}></Button>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}