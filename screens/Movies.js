import React from "react";
import {View, Text, Button} from "react-native"

export default ({navigation}) =>(
    <View>
        <Text>3</Text>
        <Button onPress={()=>navigation.navigate("Detail")}/>
    </View>
)