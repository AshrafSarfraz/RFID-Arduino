import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import CustomHeader from '../../../Components/CustomHeader';
import { Home } from '../../../Themes/Icons';
import { styles } from './style';

const Admin_Log = ({ navigation }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore().collection('Users').onSnapshot(snapshot => {
      const userDataArray = [];
      snapshot.forEach(doc => {
        const userData = doc.data();
        const events = userData.LoginLogoutEvents || [];
        events.forEach(event => {
          userDataArray.push({ id: doc.id, ...userData, event });
        });
      });
      setUserData(userDataArray);
      setIsLoading(false);
    });
  
    return () => unsubscribe();
  }, []);
  
  

  const RenderItem = ({ item }) => (
    <View style={styles.Cart}>
      <Text style={styles.Time_txt}>UserName: {item.Name}</Text>
      <Text style={styles.UserDetail_txt}>Level: {item.Level}</Text>
      <Text style={styles.UserDetail_txt}>Phone: {item.Phone}</Text>
      <Text style={styles.UserDetail_txt}>Date: {moment(item.event.timestamp).format('MM-DD-YYYY')}</Text>
      <Text style={styles.UserDetail_txt}>Time: {moment(item.event.timestamp).format('h:mm:ss a')}</Text>
      <Text style={styles.Event_txt}>Event: {item.event.status}</Text>
    </View>
  );
  

  return (
    <View style={styles.Main_Cont}>
      <CustomHeader Title={'Event Log'} source={Home} onPress={() => { navigation.goBack() }} />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={userData}
          renderItem={RenderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Admin_Log;
