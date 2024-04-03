import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomHeader from '../../../Components/CustomHeader'
import { Exit } from '../../../Themes/Icons'
import CustomButton from '../../../Components/CustomButton'
import { styles } from './style'

const Administrator = ({ navigation }) => {

  useEffect(() => {
    retrieveData()
  }, [])
  const retrieveData = async () => {
    const data = await AsyncStorage.getItem('AdminData');
    if (data) {
      console.log('Data retrieved:', data);
    } else {
      console.log('No data found in AsyncStorage.');
    }
  };
  const DeleteUser = async () => {
    try {
      await AsyncStorage.removeItem('AdminData');
      console.log('User data deleted from AsyncStorage.');
      // Navigate to the login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error deleting user data from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.Main_Cont} >
      <CustomHeader Title={'Administrator'} source={Exit} onPress={() => { DeleteUser() }} />
      <CustomButton title={'View Logs'} onPress={() => { navigation.navigate('Admin_Log') }} />
      <CustomButton title={'Manage Access'} onPress={() => { navigation.navigate('Table') }} />
    </View>
  )
}

export default Administrator

