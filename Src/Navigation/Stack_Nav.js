

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/Home';




const Stack = createNativeStackNavigator();

function Stack_Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}  >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stack_Nav;