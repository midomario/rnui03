import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {Ionicons ,AntDesign, FontAwesome , Entypo} from 'react-native-vector-icons';
import { COLORS, SIZES } from '../../constants/theme';

export default function DestinationCard({travel}) {
  return (
      <View style={styles.container}>
          <View style={styles.imageWrapper}>
              <Image style={styles.image} source={{uri: travel.image}} />
              <View style={styles.tagWrapper}>
                  <FontAwesome style={styles.tag} name="tag" size={16} color="black" />
              </View>
          </View>
          <Text style={styles.title}>{travel.name}</Text>
          <View style={styles.bottom}>
            <Text style={styles.price}>$ 1000</Text>
            <Entypo style={styles.icon} name="plus" size={18} color="black" />
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 265,
        width: 220,
        borderRadius: 20,
        backgroundColor: COLORS.light,
        margin: 10,
        padding: 8,
        elevation: 10,
        shadowColor: COLORS.grey,
        shadowOffset: {
            width: 10,
            height: 10,
        }
    },
    imageWrapper: {
        height: 180,
        borderRadius: 16,
        backgroundColor: COLORS.grey,
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 16,
        
    },
    tagWrapper: {
        backgroundColor: "#ffffff80",
        height: 30,
        width: 30,
        borderRadius: 20,
        position: 'absolute',
        zIndex: 1,
        top: 5,
        right: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    tag: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
    title: {
        fontSize: SIZES.MD +2,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 10,

    },
    bottom: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: SIZES.MD,
        fontWeight: "300",
        color: COLORS.primary
    },
    icon: {
        backgroundColor: COLORS.primary,
        padding: 1,
        borderRadius: 10,
        color: COLORS.white
    }

})