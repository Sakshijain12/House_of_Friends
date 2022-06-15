import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import styles from "./groupStyle";

export default function GroupChats() {
  return (
    <View style={styles.container}>
      <Text>Group Chat Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}