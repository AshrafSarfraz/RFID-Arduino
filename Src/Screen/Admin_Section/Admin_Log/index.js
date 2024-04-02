import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../Components/CustomHeader';
import { Home } from '../../../Themes/Icons';
import { styles } from './style';

const Events = [
  {
    Id: 1,
    Username: 'Hafiz',
    Level: 'Manager',
    Phone: "123-456-7890",
    Date: 'Aug 20,',
    Times: '12:00 Am',
    Event: 'User Logged In',
  },
  {
    Id: 2,
    Username: 'Hafiz',
    Level: 'Manager',
    Phone: "123-456-7890",
    Date: 'Aug 20,',
    Times: '12:00 Am',
    Event: 'User Logged Out',
  },
  {
    Id: 3,
    Username: 'Hafiz',
    Level: 'Manager',
    Phone: "123-456-7890",
    Date: 'Aug 20,',
    Times: '12:00 Am',
    Event: 'User Logged In',
  },
]

const Admin_Log = ({ navigation }) => {

  const RenderItem = ({ item, index }) => (
    <View style={styles.Cart}>
      <Text style={styles.Time_txt}>UserName: {item.Username}</Text>
      <Text style={styles.UserDetail_txt}>Level: {item.Level}</Text>
      <Text style={styles.UserDetail_txt}>Phone: {item.Phone}</Text>
      <Text style={styles.UserDetail_txt}>Date: {item.Date}</Text>
      <Text style={styles.UserDetail_txt}>Time: {item.Times}</Text>
      <Text style={styles.Event_txt}>Event: {item.Event}</Text>
    </View>
  );

  return (
    <View style={styles.Main_Cont}>
      <CustomHeader Title={'Event Log'} source={Home} onPress={() => { navigation.goBack() }} />
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

export default Admin_Log

