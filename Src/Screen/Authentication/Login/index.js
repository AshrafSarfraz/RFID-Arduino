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
    const [userData,setUserData]=useState([])
    
    const handleSignIn = async () => {
        try {
            if (!Email || !password) {
                setIsError('Please fill in both email and password fields.');
                return;
            }    
    
            const userCredential = await auth().signInWithEmailAndPassword(Email, password);
            const user = userCredential.user;
            setEmail('');
            setPassword('');
    
            // Retrieve user document from Firestore
            const userDoc = await firestore().collection('Users').doc(user.uid).get();
    
            if (userDoc.exists) {
                const userData = userDoc.data();
    
                // Check if the user has a login count property
                let loginCount = userData.LoginCount || 0;
                loginCount++; // Increment the login count
    
                // Update user data in Firestore with the incremented login count
                await firestore().collection('Users').doc(user.uid).update({
                    LoginCount: loginCount,
                    // Add the login event to the array of login/logout events
                    LoginLogoutEvents: firestore.FieldValue.arrayUnion({ 
                        timestamp: moment().format('YYYY-MM-DD hh:mm A'), 
                        status: 'User logged In' 
                    })
                });
    
                // Check if email is verified
                if (user.emailVerified) {
                    navigation.navigate('HomeScreen');
                } else {
                    setIsError('You are not verified. Please check your email for verification.');
                    await auth().currentUser.sendEmailVerification();
                    await auth().signOut();
                }
            } else {
                setIsError('User data not found in Firestore.');
            }
        } catch (error) {
            setIsError('Error signing in: ' + error.message); // Display specific error message
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


