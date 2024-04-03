import { View, Alert } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment'; // Import moment library
import CustomButton from '../../Components/CustomButton'
import { styles } from './style'

const HomeScreen = ({ navigation }) => {
  const handleSignOut = async () => {
    try {
      const user = auth().currentUser; // Get current user
      const loginEvent = { timestamp: moment().format('YYYY-MM-DD hh:mm A'), status: 'User logged Out' };
      await firestore().collection('Users').doc(user.uid).update({
        LoginLogoutEvents: firestore.FieldValue.arrayUnion(loginEvent)
      });
      await auth().signOut();
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error signing out:', error.message);
    }
  };

  return (
    <View style={styles.Main_Cont}>
      <CustomButton title={'View Log Histroy'} onPress={() => { navigation.navigate('LogHistroy') }} />
      <CustomButton title={'Edit Profile'} onPress={() => { Alert.alert('Edit Profile') }} />
      <CustomButton title={'Logout'} onPress={() => { handleSignOut() }} />
    </View>
  )
}

export default HomeScreen
