import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {NavigationContainer,useNavigation} from '@react-navigation/native'

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home'
import Profile from './Profile'
import Notifications from './Notifications'

const HomeScreen=()=>{
  const navigation = useNavigation();
  return(
    <Home navigation={navigation}/>
  );
}

function ProfileScreen(){
  const navigation = useNavigation();
  return(
    <Profile navigation={navigation}/>
  );
}

function NotificationsScreen(){
  const navigation = useNavigation();
  return(
    <Notifications navigation={navigation}/>
  );
}


const Stack = createStackNavigator();
function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="Notifications" component={NotificationsScreen}/>
    </Stack.Navigator>
  );
}


const TopTab = createMaterialTopTabNavigator();
function MyTopTab(){
  return(
    <TopTab.Navigator>
      <TopTab.Screen options={{title:"test"}} name="Home" component={HomeScreen}/>
      <TopTab.Screen name="Profile" component={ProfileScreen}/>
      <TopTab.Screen name="Notifications" component={NotificationsScreen}/>
    </TopTab.Navigator>
  );
}


const BottomTab = createBottomTabNavigator();
function MyBottomTab(){
  return(
    <BottomTab.Navigator tabBarOptions={{activeTintColor:'#e91e63'}}>
      <BottomTab.Screen 
        options={{
          tabBarIcon:({color})=>(<Entypo name="home" size={24} color={color} />)
        }} 
        name="Home" 
        component={HomeScreen}/>


      <BottomTab.Screen
        options={{
          tabBarIcon:({color})=>(<Ionicons name="md-person" size={24} color={color} />)
        }} 
        name="Profile" 
        component={ProfileScreen}/>
      <BottomTab.Screen name="Notifications" component={NotificationsScreen}/>
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyBottomTab/>
    </NavigationContainer>
  );
}


