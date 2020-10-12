import React from "react";
import { createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/home";
import Detail from "../screens/detail";
const Stack = createStackNavigator()

export default () =>(
    <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={Detail} />
    </Stack.Navigator>
)