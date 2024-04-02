import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import CustomHeader from '../../../Components/CustomHeader'
import { Exit } from '../../../Themes/Icons'
import CustomButton from '../../../Components/CustomButton'
import { styles } from './style'

const Administrator = ({navigation}) => {
  return (
    <View style={styles.Main_Cont} >
    <CustomHeader Title={'Administrator'} source={Exit} onPress={()=>{Alert.alert('Log Out'),navigation.goBack()}} />
    <CustomButton title={'View Logs'} onPress={()=>{navigation.navigate('Admin_Log')}}/>
    <CustomButton title={'Manage Access'} onPress={()=>{Alert.alert('Not Added Yet')}}/>
    </View>
  )
}

export default Administrator

