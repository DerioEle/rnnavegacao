import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import ProdutorRotas from "../rotas/ProdutorRotas"

import Coracao from "../assets/coracao.svg";
import Home from "../assets/home.svg";
import User from "../assets/user-regular.svg";

const Tab = createBottomTabNavigator();
let tamanho = 20

export default function AppRotas(){
    return <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({ 
      headerShown: false,
      tabBarIcon: ({ color }) => {
        let Icon = Home;

        if (route.name === "Melhores produtores"){
          Icon = Coracao;
        }

        return <Icon color={color} fill={color} width={tamanho} height={tamanho} />
      },
      tabBarActiveTintColor: "#2A9F85",
      tabBarInactiveTintColor: "#C7C7C7",
      tabBarLabelStyle: {
        fontSize: 15,
      },


      })}>
      <Tab.Screen name='Home' component={ProdutorRotas} />
      <Tab.Screen name='Melhores produtores' component={MelhoresProdutoresRotas} />
    </Tab.Navigator>
  </NavigationContainer>
}