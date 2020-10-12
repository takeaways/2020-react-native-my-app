import React, { useState } from 'react';
import { AppLoading } from 'expo';
import {Image, Text} from "react-native"
import { Asset } from 'expo-asset';
import {Ionicons} from "@expo/vector-icons"
import * as Font from "expo-font"
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';

const cacheImages = (images) => images.map(image=>{
  if(typeof images === "string"){
    return Image.prefetch(images)
  }else{
    return Asset.fromModule(image).downloadAsync()
  }
})

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))


export default function App() {
  const [isReady, setIsReady] = useState(false)
  const loadAssets = ()=>{
    const images = cacheImages(["https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",require("./assets/splash.png")])
    const fonts = cacheFonts([Ionicons.font])
    return Promise.all([...images, ...fonts])
  }
  const onFinish = ()=>{setIsReady(true)}
  return (
    isReady ? <NavigationContainer>
      <Stack/>
    </NavigationContainer> :<AppLoading startAsync={loadAssets} onFinish={onFinish} onErro={console.error}/>
  );
}
