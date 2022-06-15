import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import styles from "./chatStyle";

export default function Chats() {
  return (
    <View style={styles.container}>
      <Text>individual Chat Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}