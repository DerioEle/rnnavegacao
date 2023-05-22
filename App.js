import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import useProdutores from './src/hooks/useProdutores';

import Home from './src/telas/Home';
import MelhoresProdutores from './src/telas/MelhoresProdutores';


export default function App() {
  const produtores = useProdutores(false);

  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <NavigationContainer>
      <Home />
    </NavigationContainer>
    
  </SafeAreaView>
}