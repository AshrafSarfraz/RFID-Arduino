import { View, Alert } from 'react-native'
import React from 'react'
import CustomButton from '../../Components/CustomButton'
import { styles } from './style'

const HomeScreen=({navigation})=> {
  return (
    <View  style={styles.Main_Cont}>
      <CustomButton title={'View Log Histroy'}  onPress={()=>{navigation.navigate('LogHistroy')}}/>
      <CustomButton title={'Edit Profile'} onPress={()=>{Alert.alert('Edit Profile')}}/>
      <CustomButton title={'Logout'} onPress={()=>{Alert.alert('LogOut'),navigation.goBack()}}/>
      </View>
  )
}
export default HomeScreen

