import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import styles from "./liveStyle";

export default function Live() {
  return (
    <View style={styles.container}>
      <Text>Live Chat Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}