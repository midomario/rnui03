import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {Ionicons ,AntDesign, FontAwesome , Entypo} from 'react-native-vector-icons';
import { COLORS, SIZES } from '../../constants/theme';
export default function PlaceCard({destination}) {
  return (
    <View style={styles.container}>
          <View style={styles.imageWrapper}>
              <Image style={styles.image} source={{uri: destination.image}} />
          </View>
          <View style={styles.desc}>
            <Text style={styles.title}>{destination.name}</Text>
              <Text style={styles.stars}>
                  <AntDesign name="star" size={14} color={COLORS.stars} style={styles.starIcon}/>
                  {destination.stars}
              </Text>
              <View style={styles.visits}>
                  <View style={styles.visit}></View>
                  <View style={styles.visit}></View>
                  <View style={styles.visit}></View>
                  <View style={styles.visitActive}>
                      <Text style={styles.visitActiveText}>{destination.count}+</Text>
                  </View>
              </View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: COLORS.light,
        margin: 10,
        padding: 8,
        elevation: 3,
        shadowColor: COLORS.grey,
        shadowOffset: {
            width: 2,
            height: 3,
        },
        justifyContent: 'center',
        flexDirection: 'row',
    },
    imageWrapper: {
       
   },
    image: {
        width: 90,
        height: 90,
        borderRadius: 16,
    },
    title: {
        fontSize: SIZES.MD +2,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        padding: 0,
    },
    desc: {
        marginHorizontal: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    stars: {
        fontSize: SIZES.MD,
        fontWeight: "300",
        color: COLORS.stars,
        marginTop: 1,
        marginBottom: 5,

    },
    starIcon: {
        marginEnd: 5,
        fontWeight: "300",

    },
    visits: {
        flexDirection: 'row',
    },
    visit: {
        backgroundColor: COLORS.medium,
        height: 26,
        width: 26,
        borderRadius: 13,
        marginHorizontal: -5,
        borderWidth: 1.5,
        borderColor: COLORS.white,
    },
    visitActive: {
        height: 26,
        width: 26,
        borderRadius: 13,
        marginHorizontal: -5,
        borderWidth: 1.5,
        borderColor: COLORS.white,
        backgroundColor: COLORS.primary,
    },
    visitActiveText: {
        color: COLORS.white,
        fontWeight: '200',
        fontSize: SIZES.SM,
        verticalAlign: 'middle',
        marginTop: 3,
        textAlign: 'center',
    }
    

})