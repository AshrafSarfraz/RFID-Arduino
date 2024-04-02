import { StyleSheet } from "react-native";
import { Colors } from "../../../Themes/Colors";
import { Fonts } from "../../../Themes/Fonts";

export const styles = StyleSheet.create({
    Main_Cont: {
      backgroundColor: Colors.Bg,
      flex: 1,
      padding: "5%",
    },
    Cart: {
      backgroundColor: Colors.Secondary,
      marginBottom: "3%",
      padding: "3%",
      borderRadius: 10
    },
    Time_txt: {
      fontSize: 14,
      color: Colors.Black,
      lineHeight: 18,
      fontFamily: Fonts.SF_SemiBold,
   
    },
    UserDetail_txt:{
      fontSize: 14,
      color: Colors.Black,
      lineHeight: 17,
      fontFamily: Fonts.SF_Regular,
    },
    Event_txt: {
      fontSize: 14,
      color: Colors.Black,
      lineHeight: 18,
      fontFamily: Fonts.SF_Medium,
      marginTop:4
    }
  })