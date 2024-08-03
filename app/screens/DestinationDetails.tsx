import { ScrollView, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './destination-detils.styles'
import {Ionicons , Feather , Octicons} from 'react-native-vector-icons';
import { COLORS } from '../../constants/theme';
import ToggleSwitch from 'toggle-switch-react-native'

export default function DestinationDetails({ route }) {
    const { destination } = route.params
    const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
    };
  return (
    <ScrollView>
      <View style={styles.top}>
        <Image style={styles.image} source={{ uri: destination.image }} />
        
      </View>
      <View style={styles.content}>
        <View style={styles.infos}>
          <View style={styles.info}>
            <Text style={styles.infoText}>Offre</Text>
            <View style={styles.infoLine}></View>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>Details</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>Reviews</Text>
          </View>
        </View>
        <View style={styles.all}>
          <Text style={styles.title}>What you will see</Text>
          <Text style={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nihil explicabo beatae amet vero aliquid molestiae quia commodi veritatis, aspernatur nam dolores reiciendis laborum accusamus nostrum! Odit recusandae suscipit sunt asperiores reiciendis officiis illum dolorum velit, mollitia odio dolorem eaque neque harum ipsa debitis quibusdam earum aliquid, voluptatibus natus dolor, ratione et iste. Quisquam sequi, praesentium illo itaque sunt sed!</Text>
          <View style={styles.actions}>
            <Octicons style={styles.actionIcon} name="bell-fill" size={18}  />
            <Text style={styles.actionText}>Get Alert for this reminder</Text>
             <ToggleSwitch
            isOn={isEnabled}
            onColor={COLORS.primary}
            offColor={COLORS.medium}
            size="small"
            onToggle={toggleSwitch}
          />
          </View>
        </View>
        </View> 
    </ScrollView>
  )
}
