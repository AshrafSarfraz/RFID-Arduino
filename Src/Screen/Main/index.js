import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../Components/CustomButton'
import { styles } from './style'

const Main = ({navigation}) => {
  return (
    <View style={styles.Main_Cont}  >
        <CustomButton title={'User'} onPress={()=>{navigation.navigate('Login')}}/>
        <CustomButton title={'Administration'} onPress={()=>{navigation.navigate('Admin_Login')}}/>
        </View>
  )
}

export default Main
