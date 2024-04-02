import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Home } from '../Themes/Icons'
import { Colors } from '../Themes/Colors'
import { Fonts } from '../Themes/Fonts'

const CustomHeader = ({Title,onPress,source}) => {
  return (
    <View style={styles.Main_Cont} >
      <Text style={styles.Title_Txt} >{Title}</Text>
      <TouchableOpacity onPress={onPress} >
      <Image source={source} style={styles.Btn_Image} />
      </TouchableOpacity>
    </View>
  )
}

export default CustomHeader
const styles=StyleSheet.create({
    Main_Cont:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginBottom:"5%",
      width:'100%',
      paddingRight:"2%"
    },
    Title_Txt:{
     fontSize:20,
     fontFamily:Fonts.SF_SemiBold,
     color:Colors.Secondary,
     lineHeight:30,
    },
    Btn_Image:{
     width:17,height:17,
     resizeMode:"contain",
     tintColor:Colors.Secondary
    }

})