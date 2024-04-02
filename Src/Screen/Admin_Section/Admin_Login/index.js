import { View, Text,  TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../Themes/Colors'
import { Lock, Mail,  } from '../../../Themes/Icons';
import CustomButton from '../../../Components/CustomButton';
import { styles } from './style';


const Admin_Login = ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
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
          <CustomButton title={'Login'} onPress={()=>{navigation.navigate('Administrator')}} />
        
        </View>

    )
}
  
// <View  style={styles.SignUp_Cont}>
// <Text  style={styles.Already_Txt}>Don't have an account?</Text>
// <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}} >
// <Text style={styles.Btn_Txt} >Sign Up</Text>
// </TouchableOpacity>
// </View>

export default Admin_Login

