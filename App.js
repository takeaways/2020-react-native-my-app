import { AppLoading } from 'expo';
import React, { useState } from 'react';


export default function App() {
  const [isReady, setIsReady] = useState(false)
  const loadAssets = async ()=>{}
  const onFinish = ()=>{setIsReady(true)}
  return (
    isReady ? null :<AppLoading startAsync={loadAssets} onFinish={onFinish} onErro={console.error}/>
  );
}
