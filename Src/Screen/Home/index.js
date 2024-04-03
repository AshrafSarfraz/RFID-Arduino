import { View, Alert } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import CustomButton from '../../Components/CustomButton'
import { styles } from './style'

const HomeScreen=({navigation})=> {

  const handleSignOut = async () => {
    try {
      // Sign out from Firebase or perform other sign-out actions
      await auth().signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing out:', error.message);
      // Handle the error appropriately
    }
  };


  return (
    <View  style={styles.Main_Cont}>
      <CustomButton title={'View Log Histroy'}  onPress={()=>{navigation.navigate('LogHistroy')}}/>
      <CustomButton title={'Edit Profile'} onPress={()=>{Alert.alert('Edit Profile')}}/>
      <CustomButton title={'Logout'} onPress={()=>{handleSignOut()}}/>
      </View>
  )
}
export default HomeScreen

