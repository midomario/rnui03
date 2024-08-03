import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons , Feather , Entypo} from 'react-native-vector-icons';
import { COLORS, SIZES } from '../../constants/theme';

export default function TabBarIcon({ name, color, size , focused}) {
  return (
      <View style={styles.container}>
          {name == 'home' && <Text style={styles.homeText}>Home</Text>}
          {(name != 'user' && name != 'home') && <Ionicons name={name} color={color} size={size} />}
          {name == 'user' && <Feather name={name} color={color} size={size} />}
          {focused && 
             <Entypo name="dot-single" color={COLORS.light} size={SIZES.XL} />
          }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeText: {
        color: COLORS.light,
        fontSize: SIZES.SM,
        marginTop: 5,
    }
})