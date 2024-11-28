import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav  from "./Nav";
import Header from "./Header";
import Hello from "./src/Hello"

export default function App() {
  return (
    <View style={styles.container}>

      <Hello></Hello>
      <Header></Header>
      <Text>Hello world </Text>
      <Nav></Nav>
      <Text>Je suis développeur Web/mobile !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3ec72c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
