import { View, Text,  FlatList } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../Components/CustomHeader'
import { Home } from '../../Themes/Icons'
import { styles } from './style'

const Events=[
    {
        Id:1,
        Times:'Aug 2020',
        Event:'USER lOGIN In',
    },
    {
        Id:2,
        Times:'Aug 2020',
        Event:'USER lOGIN Out',
    },
    {
        Id:3,
        Times:'Aug 2021',
        Event:'USER lOGIN In',
    },
]

const LogHistroy = ({navigation}) => {

 const RenderItem = ({ item, index }) => (
    <View style={styles.Cart}>
         <Text style={styles.Time_txt}>Time: {item.Times}</Text>
          <Text style={styles.Event_txt}>Event: {item.Event}</Text>
        </View>
  );
 
  return (
    <View style={styles.Main_Cont}>
    <CustomHeader Title={'Event Log'} source={Home} onPress={()=>{navigation.goBack()}} />
    <View style={styles.FlatList_Cont} >
    <FlatList
      showsVerticalScrollIndicator={false}
      data={Events}
      renderItem={RenderItem}
      keyExtractor={item => item.Id.toString()}
    />
  </View>
    </View>
  )
}

export default LogHistroy

