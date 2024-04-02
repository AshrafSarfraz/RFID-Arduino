import { StyleSheet } from "react-native"
import { Fonts } from "../../../Themes/Fonts"
import { Colors } from "../../../Themes/Colors"


export const styles = StyleSheet.create({
    Main_Cont: {
        flex: 1,
        backgroundColor: Colors.Bg,
        justifyContent: "center",
        padding: '5%'
    },
    Sign_Txt: {
        fontSize: 20,
        fontFamily: Fonts.SF_SemiBold,
        color: Colors.Secondary,
        marginBottom: '3%',
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        marginBottom: "3%",
        borderBottomWidth: 1,
        borderColor: Colors.Black
    },
    User_Style: {
        width: 18,
        height: 18,
        marginRight: '1.5%',
        tintColor: Colors.Secondary,
        resizeMode: 'contain'
    },
    Lock_Style: {
        width: 22,
        height: 22,
        marginRight: '1%',
        tintColor: Colors.Secondary,
        resizeMode: 'contain'
    },
    input: {
        width: '93%',
        fontWeight: '400',
        fontSize: 14,
        fontFamily: Fonts.SF_Medium,
        lineHeight: 18
    },
    SignUp_Cont: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginTop: '1%'
    },
    Already_Txt: {
        fontSize: 14,
        fontFamily: Fonts.SF_Medium,
        color: Colors.Black,
        marginRight: 3,
        lineHeight: 18
    },
    Btn_Txt: {
        fontSize: 14,
        fontFamily: Fonts.SF_Bold,
        color: Colors.Secondary,
        lineHeight: 18
    }
})