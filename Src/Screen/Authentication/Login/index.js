import { View, Text, Alert, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../../Themes/Colors';
import { Lock, Mail } from '../../../Themes/Icons';
import CustomButton from '../../../Components/CustomButton';
import { styles } from './style';

const LoginScreen = ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // State for activity indicator

    const handleSignIn = async () => {
        try {
            setIsLoading(true); // Show activity indicator
            if (!Email || !password) {
                setIsError('Please fill in both email and password fields.');
                setIsLoading(false); // Hide activity indicator
                return;
            }
            const userCredential = await auth().signInWithEmailAndPassword(Email, password);
            const user = userCredential.user;
            setEmail(''); setPassword('');
            const userDoc = await firestore().collection('Users').doc(user.uid).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                let loginCount = userData.LoginCount || 0;
                loginCount++;
                await firestore().collection('Users').doc(user.uid).update({
                    LoginCount: loginCount,
                    LoginLogoutEvents: firestore.FieldValue.arrayUnion({
                        timestamp: moment().format('YYYY-MM-DD hh:mm A'),
                        status: 'User logged In'
                    })
                });
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
            setIsLoading(false); // Hide activity indicator
        } catch (error) {
            setIsError('Error signing in: ' + error.message);
            setIsLoading(false); // Hide activity indicator
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
                <Text style={{ color: 'red', fontSize: 14 }}>{isError}</Text>
            ) : null}
            <CustomButton title={'Login'} onPress={() => { handleSignIn() }} />
            <View style={styles.SignUp_Cont}>
                <Text style={styles.Already_Txt}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} >
                    <Text style={styles.Btn_Txt} >Sign Up</Text>
                </TouchableOpacity>
            </View>
            {isLoading && <ActivityIndicator size="large" color={Colors.Black} />} 
        </View>
    );
};

export default LoginScreen;
