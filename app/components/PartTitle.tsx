import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import {Ionicons , Feather , Entypo} from 'react-native-vector-icons';

export default function PartTitle({title}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.moreContainer}>
              <Text style={styles.more}>Show More </Text>
              <Ionicons name="chevron-forward-outline" size={12} color={COLORS.grey} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    title: {
        fontSize: SIZES.LG,
    },
    moreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    more: {
        color: COLORS.grey,
        fontSize: SIZES.MD,

    }
})