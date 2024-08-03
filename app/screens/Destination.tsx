import {  ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './home.styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../components/TopHeader'
import {Ionicons , Feather , Entypo} from 'react-native-vector-icons';
import Tag from '../components/Tag'
import { COLORS, SIZES } from '../../constants/theme'
import PartTitle from '../components/PartTitle'
import DestinationCard from '../components/DestinationCard'
import  travels  from '../../constants/travels.json'
import  destinations  from '../../constants/destinations.json'
import PlaceCard from '../components/PlaceCard'
import FullCard from '../components/FullCard'

export default function Destination({ navigation }) {
  

  return (
   <SafeAreaView style={styles.container}>
      <ScrollView style={{ minHeight: SIZES.height }}
        showsVerticalScrollIndicator={false}
      >
        <TopHeader user={false}/>
        
        <View style={styles.destinations}>
          {destinations.map((destination) =>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { destination: destination })}
              key={destination.name}>
            <FullCard  destination={destination} />
          </TouchableOpacity>
        )}
          <View style={{ height: 80 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
