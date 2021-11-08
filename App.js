import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import customeTheme from './assets/utils/themes/index.js'

import BTab from './assets/screens/bottomTabs.js'




function ScreenFour() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ScreenFive() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>detail!</Text>
    </View>
  );
}

function ScreenSix() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>user profile!</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

{/*function RootScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={RootScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={RatingScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
  );
}*/}

export default function App() {
  return (
    <NavigationContainer> 
      <BTab />
    </NavigationContainer>
  );
}