import { StyleSheet, View, Text } from "react-native";
import Logo from "/logo";

export default function Header()
{
    return(
        
        <View style={styles.container}>
            <Logo></Logo>
            <Text>Je suis Hearder !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#a53737',

    },
  });