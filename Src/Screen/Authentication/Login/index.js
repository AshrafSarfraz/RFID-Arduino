import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../Themes/Colors'
import { Fonts } from '../../../Themes/Fonts';
import { Lock, Mail, User } from '../../../Themes/Icons';
import CustomButton from '../../../Components/CustomButton';

const LoginScreen = ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };
    return (
        <View style={styles.Main_Cont}>
            <Text style={styles.Sign_Txt}>Sign In</Text>
            <View style={styles.inputContainer}>
                <Image source={Mail} style={styles.User_Style} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={Colors.Black}
                    onChangeText={setEmail}
                    value={Email}
                />
            </View>
            <View style={styles.inputContainer}>
            <Image source={Lock} style={styles.Lock_Style} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={setPassword}
                    placeholderTextColor={Colors.Black}
                    value={password}
                    secureTextEntry
                />
            </View>
          <CustomButton title={'Login'} onPress={()=>{}} />
          <View  style={styles.SignUp_Cont}>
          <Text  style={styles.Already_Txt}>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>{}} >
          <Text style={styles.Btn_Txt} >Sign Up</Text>
          </TouchableOpacity>
          </View>
        </View>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    Main_Cont: {
        flex: 1,
        backgroundColor: Colors.Bg,
        justifyContent: "center",
        padding: '5%'
    },
    Sign_Txt: {
        fontSize: 20,
        fontFamily:Fonts.SF_Bold,
        color: Colors.Secondary,
        marginBottom: '3%',
    },
    inputContainer: {
        flexDirection:"row",
        alignItems:"center",
        width:'100%',
        marginBottom: "3%",
        borderBottomWidth: 1,
        borderColor: Colors.Black
    },
    User_Style: {
        width: 18, 
        height: 18,
        marginRight:'1.5%',
        tintColor:Colors.Secondary,
        resizeMode:'contain'
    },
    Lock_Style: {
        width: 22, 
        height: 22,
        marginRight:'1%',
        tintColor:Colors.Secondary,
        resizeMode:'contain'
    },
    input: {
     width:'93%',
     fontWeight:'400',
     fontSize:16,
     fontFamily:Fonts.SF_SemiBold,
     lineHeight:18
    },
    SignUp_Cont:{
     flexDirection:"row",
     alignItems:"center",
     alignSelf:"center",
     marginTop:'1%'
    },
    Already_Txt:{
         fontSize:14,
         fontFamily:Fonts.SF_Medium,
         color:Colors.Black,
         marginRight:3,
         lineHeight:18
    },
    Btn_Txt:{
        fontSize:14,
         fontFamily:Fonts.SF_Bold,
         color:Colors.Secondary,
         lineHeight:18
    }
})