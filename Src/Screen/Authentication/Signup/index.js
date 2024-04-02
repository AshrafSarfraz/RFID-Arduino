import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../Themes/Colors'
import { Call, Lock, Mail, User, User1, } from '../../../Themes/Icons';
import CustomButton from '../../../Components/CustomButton';
import { styles } from './style';


const SignUpScreen = ({ navigation }) => {
    const [Name, setName] = useState('');
    const [Username, setUsername] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Confirmpassword, setConfirmPassword] = useState('');

  
    return (
        <View style={styles.Main_Cont}>
       <View  style={{backgroundColor:Colors.Bg}}>
        <ScrollView  showsVerticalScrollIndicator={false}>
            <Text style={styles.Sign_Txt}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <Image source={User} style={styles.User_Style} />
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor={Colors.Black}
                    onChangeText={(txt)=>{setName(txt)}}
                    value={Name}
                />
            </View>
            <View style={styles.inputContainer}>
            <Image source={User1} style={styles.User_Style} />
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor={Colors.Black}
                onChangeText={(txt)=>{setUsername(txt)}}
                value={Username}
            />
        </View>
        <View style={styles.inputContainer}>
        <Image source={Call} style={styles.User_Style} />
        <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor={Colors.Black}
            onChangeText={(txt)=>{setPhone(txt)}}
            value={Phone}
        />
    </View>
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
                    placeholderTextColor={Colors.Black}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
            </View>
            <View style={styles.inputContainer}>
                <Image source={Lock} style={styles.Lock_Style} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    onChangeText={setConfirmPassword}
                    placeholderTextColor={Colors.Black}
                    value={Confirmpassword}
                    secureTextEntry
                />
            </View>
            <CustomButton title={'Sign Up'} onPress={()=>{navigation.navigate('Login')}}/>
            <View style={styles.SignUp_Cont}>
                <Text style={styles.Already_Txt}>Already have an account?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                    <Text style={styles.Btn_Txt} >Login</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </View>
        </View>
    
    )
}

export default SignUpScreen

