import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import IMCApp from './IMCApp'; 

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor={"#381859"}></StatusBar>
      <IMCApp></IMCApp>
    </View>
  );
}