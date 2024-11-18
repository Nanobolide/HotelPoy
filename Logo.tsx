import { Image, StyleSheet, View } from "react-native";

export default function Logo()
{
    return (

            <View>
                <Image source={require('./assets/react.png')}></Image>
            </View>
    )
}