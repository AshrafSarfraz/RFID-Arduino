import { View, Text,  FlatList } from 'react-native'
import React, { useState,useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
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

  const [loginLogoutEvents, setLoginLogoutEvents] = useState([]);

  useEffect(() => {
      const unsubscribe = auth().onAuthStateChanged(user => {
          if (user) {
              fetchLoginLogoutEvents(user.uid);
          }
      });

      return unsubscribe;
  }, []);

  const fetchLoginLogoutEvents = async (userId) => {
      try {
          const userDoc = await firestore().collection('Users').doc(userId).get();
          if (userDoc.exists) {
              const userData = userDoc.data();
              const events = userData.LoginLogoutEvents || [];
              setLoginLogoutEvents(events);
          } else {
              console.log('User data not found in Firestore.');
          }
      } catch (error) {
          console.error('Error fetching login/logout events:', error.message);
      }
  };

 const RenderItem = ({ item, index }) => (
    <View style={styles.Cart}>
         <Text style={styles.Time_txt}>Time:{item.timestamp}</Text>
          <Text style={styles.Event_txt}>Event: {item.status}</Text>
        </View>
  );
 
  return (
    <View style={styles.Main_Cont}>
    <CustomHeader Title={'Event Log'} source={Home} onPress={()=>{navigation.goBack()}} />
    <View style={styles.FlatList_Cont} >
    <FlatList
      showsVerticalScrollIndicator={false}
      data={loginLogoutEvents}
      renderItem={RenderItem}
      keyExtractor={item => item.id}
    />
  </View>
    </View>
  )
}

export default LogHistroy

