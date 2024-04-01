

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/Home';
import LoginScreen from '../Screen/Authentication/Login';
import SignUpScreen from '../Screen/Authentication/Signup';




const Stack = createNativeStackNavigator();

function Stack_Nav() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}  >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stack_Nav;