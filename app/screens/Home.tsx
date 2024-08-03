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


export default function Home() {
  const [activeTag , setActiveTag] = useState("home")
  const tags = ["Beaches", "Cultural", "Relaxing", "Sightseeing", "Trending"]

  useEffect(() => {
    setActiveTag("home")
  }, [])

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ minHeight: SIZES.height }}
        showsVerticalScrollIndicator={false}
      >
      <TopHeader user={true}/>
      <View style={styles.searchContainer}>
        <TextInput placeholderTextColor={COLORS.grey} style={styles.searchField} placeholder='Search a Place Here ...' />
        <Ionicons  style={styles.searchIcon} name="search-outline" size={24} color="black" />
      </View>
      <View style={styles.tags}>
     <ScrollView horizontal style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
          >
        {tags.map((tag) =>
          <TouchableOpacity key={tag} onPress={() => setActiveTag(tag)}>
            <Tag  name={tag} activeTag={activeTag} />
          </TouchableOpacity>
        )}
      </ScrollView>
      </View>
      <PartTitle title="Travels Places" />

      <View style={styles.travels}>
      <ScrollView horizontal style={{ flex: 1 }}
            showsHorizontalScrollIndicator={false}
          >
        {travels.map((travel) =>
          <TouchableOpacity key={travel.name}   >
            <DestinationCard  travel={travel}  />
          </TouchableOpacity>
        )}
      </ScrollView>
      </View>
        
      <PartTitle title="Best Destinations" />

        <View style={styles.travels}>
        <ScrollView horizontal style={{ flex: 1 }}
            showsHorizontalScrollIndicator={false}
          >
        {destinations.map((destination) =>
          <TouchableOpacity key={destination.name}   >
            <PlaceCard  destination={destination}  />
          </TouchableOpacity>
        )}
      </ScrollView>
      </View>


      </ScrollView>
    </SafeAreaView>
  )
}
