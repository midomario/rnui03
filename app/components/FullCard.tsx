import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {Ionicons ,AntDesign, FontAwesome , Entypo} from 'react-native-vector-icons';
import { COLORS, SIZES } from '../../constants/theme';

export default function DestinationCard({destination}) {
  return (
      <View style={styles.container}>
          <View style={styles.imageWrapper}>
              <Image style={styles.image} source={{uri: destination.image}} />
              <View style={styles.tagWrapper}>
                  <FontAwesome style={styles.tag} name="tag" size={16} color="black" />
              </View>
          </View>
          <View style={styles.bottom}>
              <View style={styles.infos}>
                <Text style={styles.title}>{destination.title}</Text>
                <Text style={styles.price}>{destination.days}</Text>
              </View>
                <Entypo style={styles.icon} name="plus" size={30} color="black" />
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 265,
        width: "86%",
        borderRadius: 20,
        backgroundColor: COLORS.light,
        marginVertical: 16,
        marginHorizontal: "auto",
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
    },
    bottom: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    infos: {
        gap: 5,
    },
    price: {
        fontSize: SIZES.MD,
        fontWeight: "300",
        color: COLORS.primary
    },
    icon: {
        backgroundColor: COLORS.primary,
        padding: 1,
        borderRadius: 15,
        color: COLORS.white,
        verticalAlign: 'middle',
        alignSelf: 'center',
    }

})