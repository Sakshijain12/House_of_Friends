import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import styles from "./profileStyle";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}