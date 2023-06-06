import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import ProdutorRotas from "../rotas/ProdutorRotas"

const Tab = createBottomTabNavigator();

export default function AppRotas(){
    return <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={ProdutorRotas} />
      <Tab.Screen name='Melhores produtores' component={MelhoresProdutoresRotas} />
    </Tab.Navigator>
  </NavigationContainer>
}