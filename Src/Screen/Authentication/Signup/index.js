import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
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
    const [isError, setIsError] = useState('');

    async function RegisterUser() {
        if (!Email || !password || !Username || !Confirmpassword || !Phone || !Name) {
            setIsError('All fields are required.');
            return;
        }
        if (password !== Confirmpassword) {
            setIsError("Passwords don't match.");
            return;
        }
        try {
            const userCredential = await auth().createUserWithEmailAndPassword(Email, password);

            console.log('User account created & signed in!', userCredential.user.uid);
            const user = userCredential.user;
            const userId = user.uid;

            // Store additional user details in your database (Firestore, Realtime Database, etc.)
            await firestore().collection('Users').doc(userId).set({
                Name: Name,
                Username: Username,
                Email: Email,
                Phone: Phone,
                Password: password,
            });
            await auth().currentUser.sendEmailVerification();
            await auth().signOut();
            setName(''),setUsername(''),setPhone(''),setEmail(''),setPassword(''),setConfirmPassword(''),setIsError('')
            navigation.navigate('Login')
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setIsError('That email address is already in use!');
            } else if (error.code === 'auth/invalid-email') {
                setIsError('That email address is invalid!');
            } else {
                setIsError(error.message);
            }
        }
    }

    return (
        <View style={styles.Main_Cont}>
            <View style={{ backgroundColor: Colors.Bg }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.Sign_Txt}>Sign Up</Text>
                    <View style={styles.inputContainer}>
                        <Image source={User} style={styles.User_Style} />
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            placeholderTextColor={Colors.Black}
                            onChangeText={(txt) => { setName(txt) }}
                            value={Name}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image source={User1} style={styles.User_Style} />
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor={Colors.Black}
                            onChangeText={(txt) => { setUsername(txt) }}
                            value={Username}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image source={Call} style={styles.User_Style} />
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            placeholderTextColor={Colors.Black}
                            onChangeText={(txt) => { setPhone(txt) }}
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
                    {isError ? (
                        <Text style={{ color: 'red' ,fontSize:14}}>{isError}</Text>
                    ) : null}
                    <CustomButton title={'Sign Up'} onPress={() => { RegisterUser()}} />
                    <View style={styles.SignUp_Cont}>
                        <Text style={styles.Already_Txt}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                            <Text style={styles.Btn_Txt} >Login</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
            </View>
        </View>

    )
}

export default SignUpScreen

