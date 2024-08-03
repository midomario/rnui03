import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import {Ionicons , Feather , Entypo} from 'react-native-vector-icons';

export default function TopHeader({user}) {
  return (
    user == true ?
    (<View style={styles.container}>
          <View style={styles.welcome}>
           <Text style={styles.welcomeText}>Hello,</Text>   
           <Text style={styles.welcomeName}>Saravana</Text>      
          </View>
          <TouchableOpacity>
            <Image style={styles.avatar} source={require('../../assets/images/man.png')}/>
          </TouchableOpacity>
      </View>)
      :
    (<View style={styles.container}>
          <View style={styles.welcome}>
           <Text style={styles.welcomeText}>Best,</Text>   
           <Text style={styles.welcomeName}>Destination</Text>      
          </View>
          <TouchableOpacity>
            <Ionicons style={styles.gear}  name="settings-outline" size={24} color="black"/>
          </TouchableOpacity>
    </View>)
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    welcome: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize:  SIZES.XL,
        color: COLORS.medium
    },
    welcomeName: {
        paddingStart: 10,
        fontSize: SIZES.XL,
        color: COLORS.secondary
    },
    avatar: {
        height: 40,
        width: 40,
        verticalAlign: 'middle',
  },
    gear: {
        height: 40,
        width: 40,
        verticalAlign: 'middle',
    }
})  