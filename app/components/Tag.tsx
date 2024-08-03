import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'

export default function Tag({name , activeTag}) {
  return (
      <>
      {activeTag == name &&
      <View style={styles.containerActive}>
        <Text style={styles.textActive}>{name}</Text>
              </View>}
          
      {activeTag != name &&
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </View>}
      </>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: COLORS.light,
        height: 34,
        borderRadius: 20,
        marginEnd: 20,
        justifyContent: 'center',
    },
    containerActive: {
        paddingHorizontal: 20,
        backgroundColor: COLORS.primary,
        height: 34,
        borderRadius: 20,
        marginEnd: 20,
        justifyContent: 'center',
    },
    textActive: {
        color: COLORS.white,
        fontSize: 12
    },
    text: {
        color: COLORS.primary,
        fontSize: 12
    }
})