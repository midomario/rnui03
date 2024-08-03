import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Location from '../screens/Location';
import {Ionicons , Feather} from 'react-native-vector-icons';
import { COLORS, SIZES } from '../../constants/theme';
import Destination from '../screens/Destination';
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';
import TabBarIcon from '../components/TabBarIcon';
import { useNavigation } from '@react-navigation/native';

import DestinationStack from './DestinationStack';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {

    const navigationHook = useNavigation()

    const [activeTab , setActiveTab] = useState(null);
    
    function handleNavigation(name) {
        navigationHook.navigate(name)
        setActiveTab(name.toLowerCase())
    }

    return (
      <Tab.Navigator
          screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.container,
          tabBarHideOnKeyboard  : true,
            }}
        >
            
          <Tab.Screen name="Home" component={Home} 
           options={{
               tabBarLabel: 'Home',
            //    tabBarStyle: styles.tab,
            //    tabBarActiveTintColor: COLORS.medium,
            //    tabBarIconStyle : {color : COLORS.grey},
               tabBarIcon: ({ color, size,focused }) => (
                   <TabBarIcon name="home" activeTab={activeTab} color={color} size={size} focused={focused} />
                )
            }} 
          />

          <Tab.Screen name="DestinationStack" component={DestinationStack} 
           options={{
               tabBarLabel: 'Destination',
               tabBarActiveTintColor: COLORS.grey,
               tabBarIcon: ({ color, size, focused }) => (
                       <TabBarIcon name="list-outline" activeTab={activeTab} focused={focused} color={color} size={size} />
                )
            }} 
            />
            
            <Tab.Screen name="Location" component={Location} 
           options={{
               tabBarLabel: 'Location',
            //    tabBarStyle: styles.tab,
               tabBarActiveTintColor: COLORS.grey,
            //    tabBarIconStyle : {color : COLORS.grey},
               tabBarIcon: ({ color, size, focused }) => (
                       <TabBarIcon name="map-outline" activeTab={activeTab} focused={focused} color={color} size={size} />
                )
            }} 
            />
            

            <Tab.Screen name="Favorite" component={Favorite} 
           options={{
               tabBarLabel: 'Favorite',
            //    tabBarStyle: styles.tab,
               tabBarActiveTintColor: COLORS.grey,
            //    tabBarIconStyle : {color : COLORS.grey},
               tabBarIcon: ({ color, size , focused}) => (
                       <TabBarIcon name="heart" activeTab={activeTab} focused={focused} color={color} size={size} />
                )
            }} 
            />
            
           <Tab.Screen name="Profile" component={Profile} 
           options={{
               tabBarLabel: 'Profile',
            //    tabBarStyle: styles.tab,
               tabBarActiveTintColor: COLORS.grey,
            //    tabBarIconStyle : {color : COLORS.grey},
                  tabBarIcon: ({ color, size, focused }) => (
                          <TabBarIcon name="user" activeTab={activeTab} focused={focused} color={color} size={size} />
                )
            }} 
          />

     
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        paddingBottom: 5,
        paddingTop: 0,
        height: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    tab: {
        
    },
    homeText: {
        color: COLORS.light,
        fontSize: SIZES.SM
    }
})