import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import DestinationDetails from '../screens/DestinationDetails';
import Destination from '../screens/Destination';

const DestinationRootStack = createNativeStackNavigator();

export default function DestinationStack() {
  return (
    <DestinationRootStack.Navigator
      screenOptions={{ headerShown: false }}>
      <DestinationRootStack.Screen name="Destination" component={Destination} />
      <DestinationRootStack.Screen name="Details" component={DestinationDetails} />
    </DestinationRootStack.Navigator>
  );
}
