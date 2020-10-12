import React from "react";
import {View, Text, Button} from "react-native"

export default ({navigation}) =>(
    <View>
        <Text>HOME</Text>
        <Button onPress={()=>navigation.navigate("detail")} title="Go to Detail">Go to Detauk</Button>
    </View>
)