import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import styles from "./uploadStyle";

export default function Upload() {
  return (
    <View style={styles.container}>
      <Text>Upload Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}