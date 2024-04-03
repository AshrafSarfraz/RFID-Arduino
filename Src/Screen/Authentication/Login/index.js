import { View, Text,Alert ,TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
import { Colors } from '../../../Themes/Colors'
import { Lock, Mail, } from '../../../Themes/Icons';
import CustomButton from '../../../Components/CustomButton';
import { styles } from './style';

const LoginScreen = ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState('');
   
    // Event
    const [Name, setName] = useState('');
    const [UserName, setUserName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [EmailAddress, setEmailAddress] = useState('');
    const currentDate = moment().format('MMMM Do YYYY');
    const currentTime = moment().format('h:mm:ss a');








    const handleSignIn = async () => {
        if (!Email || !password) {
            setIsError('Please fill in both email and password fields.');
            return;
        }
        try {
            const userCredential = await auth().signInWithEmailAndPassword(Email, password);
            setIsError('User account created & signed in!', userCredential);
    
            // Access user details
            const user = userCredential.user;
    
            // Retrieve additional details from Firestore
            const userDoc = await firestore().collection('Users').doc(user.uid).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                setName(userData.Name);
                setUserName(userData.Username);
                setPhoneNumber(userData.Phone);
                setEmailAddress(userData.Email);
                console.log('Name',Name,UserName, PhoneNumber, EmailAddress);
            } else {
                console.log('User data not found in Firestore.');
            }
            // Check if email is verified
            if (user.emailVerified) {
                navigation.navigate('HomeScreen')
                console.log(userCredential)
            } else {
                setIsError('You are not verified So Please check your Gmail for verification');
                await auth().currentUser.sendEmailVerification();
                await auth().signOut();
            }
        } catch (error) {
            setIsError('Error signing in:', error.message);
        }
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
            {isError ? (
                <Text style={{ color: 'red' ,fontSize:14}}>{isError}</Text>
              ) : null}
            <CustomButton title={'Login'} onPress={() => { handleSignIn()}} />
            <View style={styles.SignUp_Cont}>
                <Text style={styles.Already_Txt}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} >
                    <Text style={styles.Btn_Txt} >Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default LoginScreen

