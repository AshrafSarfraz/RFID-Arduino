import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import HomeScreen from '../Screen/Home';
import LoginScreen from '../Screen/Authentication/Login';
import SignUpScreen from '../Screen/Authentication/Signup';
import LogHistroy from '../Screen/Log_Histroy';
import Administrator from '../Screen/Admin_Section/Adminstrator';
import Admin_Log from '../Screen/Admin_Section/Admin_Log';
import Admin_Login from '../Screen/Admin_Section/Admin_Login';
import Main from '../Screen/Main';
import Table_Screen from '../Screen/Admin_Section/Table';
import EditTableScreen from '../Screen/Admin_Section/Table/EditTable';

const Stack = createNativeStackNavigator();


const  Stack_Nav=()=> {
  
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null; // You can return a loading indicator while authentication is being checked
  }
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'HomeScreen' : 'Main'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Admin_Login" component={Admin_Login} />
        <Stack.Screen name="LogHistroy" component={LogHistroy} />
        <Stack.Screen name="Administrator" component={Administrator} />
        <Stack.Screen name="Admin_Log" component={Admin_Log} />
        <Stack.Screen name="Table" component={Table_Screen} />
        <Stack.Screen name="EditTable" component={EditTableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stack_Nav;
