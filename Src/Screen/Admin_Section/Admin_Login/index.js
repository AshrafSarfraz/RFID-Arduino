import { View, Text, TextInput, Image,} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../../Themes/Colors';
import { Lock, Mail } from '../../../Themes/Icons';
import CustomButton from '../../../Components/CustomButton';
import { styles } from './style';

const Admin_Login = ({ navigation }) => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    if (Email === 'admin123@gmail.com' && password === 'admin12345') {
      // Navigate to Administrator screen
      navigation.navigate('Administrator');
      
      try {
        const userDataArray = [{ email: Email, password: password }];
        await AsyncStorage.setItem('AdminData', JSON.stringify(userDataArray));
      } catch (error) {
        console.error('Error storing data:', error.message);
      }
    } else {
      // Display incorrect password message
      alert('Incorrect Password or Email');
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
      <CustomButton title={'Login'} onPress={handleLogin} />
    </View>
  );
};

export default Admin_Login;
