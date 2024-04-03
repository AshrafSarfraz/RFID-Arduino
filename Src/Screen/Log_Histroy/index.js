import { View, Text,  FlatList } from 'react-native'
import React, { useState,useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import CustomHeader from '../../Components/CustomHeader'
import { Home } from '../../Themes/Icons'
import { styles } from './style'


const LogHistroy = ({navigation}) => {
  const [loginLogoutEvents, setLoginLogoutEvents] = useState([]);
  const [isError, setIsError] = useState('');

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
              setIsError('User data not Found.');
          }
      } catch (error) {
        setIsError.error('Error fetching login/logout events:', error.message);
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
    {isError ? (
        <Text style={{ color: 'red', fontSize: 14 }}>{isError}</Text>
    ) : null}
  </View>
    </View>
  )
}

export default LogHistroy

