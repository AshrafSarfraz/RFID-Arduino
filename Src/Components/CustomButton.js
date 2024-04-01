import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../Themes/Colors'
import { Fonts } from '../Themes/Fonts'

const CustomButton = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Btn} >
    <Text style={styles.Btn_Txt} >{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles=StyleSheet.create({
  Btn:{
    width:"100%",
    height:50,
    borderRadius:20,
    backgroundColor:Colors.Secondary,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
    marginVertical:"3%"
  },
  Btn_Txt:{
    fontSize:16,
    color:Colors.Black,
    fontFamily:Fonts.SF_Bold,
    lineHeight:20,
    letterSpacing:0.3

  }
})