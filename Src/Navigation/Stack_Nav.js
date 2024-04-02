

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/Home';
import LoginScreen from '../Screen/Authentication/Login';
import SignUpScreen from '../Screen/Authentication/Signup';
import LogHistroy from '../Screen/Log_Histroy';
import Administrator from '../Screen/Admin_Section/Adminstrator';
import Admin_Log from '../Screen/Admin_Section/Admin_Log';
import Admin_Login from '../Screen/Admin_Section/Admin_Login';
import Main from '../Screen/Main';




const Stack = createNativeStackNavigator();

function Stack_Nav() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName='Main' screenOptions={{headerShown:false}}  >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Admin_Login" component={Admin_Login} />
      <Stack.Screen name="LogHistroy" component={LogHistroy} />
      <Stack.Screen name="Administrator" component={Administrator} />
      <Stack.Screen name="Admin_Log" component={Admin_Log} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stack_Nav;