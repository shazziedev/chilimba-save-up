import * as React from 'react';
import { ActivityIndicator, TouchableOpacity,
  StyleSheet, Text, View ,Image,ScrollView,FlatList,
  Button,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import customeTheme from '../utils/themes/index.js'
import { 
  MaterialCommunityIcons, AntDesign,
  FontAwesome5,MaterialIcons,Ionicons,SimpleLineIcons ,
  Feather,FontAwesome,Entypo } from '@expo/vector-icons';
import {
  useTheme,
  Avatar,Drawer,
  Title,Paragraph,
  Text as Txt,Caption,TouchableRipple,
  Switch
} from 'react-native-paper';

import { GetColor , GetSize , GetFonts } from '../utils/themes/index.js'

const ALERT = [
  {
    id: 0,
    title: 'Waane & Lubasi: Weding ',
    equity: 500,
    thumb : 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 1,
    title: 'Business Capital Cycle',
    equity: 250,
    thumb :'https://images.unsplash.com/photo-1569180880150-df4eed93c90b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'Waane & Lubasi: Weding ',
    equity: 500,
    thumb : 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 3,
    title: 'Waane & Lubasi: Weding ',
    equity: 500,
    thumb : 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 4,
    title: 'Business Capital Cycle',
    equity: 250,
    thumb :'https://images.unsplash.com/photo-1569180880150-df4eed93c90b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 8,
    title: 'Back To School Cycle',
    equity: 300,
    thumb :'https://media.istockphoto.com/photos/young-student-girl-with-backpack-picture-id981871354?b=1&k=20&m=981871354&s=170667a&w=0&h=-od3j2ljlPAeYkzH8ofjj1nV5GVUdl1ScKBoBQoSZrg='
  },
  {
    id: 5,
    title: 'Business Capital Cycle',
    equity: 250,
    thumb :'https://images.unsplash.com/photo-1569180880150-df4eed93c90b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    title: 'Back To School Cycle',
    equity: 300,
    thumb :'https://media.istockphoto.com/photos/young-student-girl-with-backpack-picture-id981871354?b=1&k=20&m=981871354&s=170667a&w=0&h=-od3j2ljlPAeYkzH8ofjj1nV5GVUdl1ScKBoBQoSZrg='
  },
  {
    id: 7,
    title: 'Back To School Cycle',
    equity: 300,
    thumb :'https://media.istockphoto.com/photos/young-student-girl-with-backpack-picture-id981871354?b=1&k=20&m=981871354&s=170667a&w=0&h=-od3j2ljlPAeYkzH8ofjj1nV5GVUdl1ScKBoBQoSZrg='
  },
  {
    id: 9,
    title: 'Business Capital Cycle',
    equity: 250,
    thumb :'https://images.unsplash.com/photo-1569180880150-df4eed93c90b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id:10,
    title: 'Back To School Cycle',
    equity: 300,
    thumb :'https://media.istockphoto.com/photos/young-student-girl-with-backpack-picture-id981871354?b=1&k=20&m=981871354&s=170667a&w=0&h=-od3j2ljlPAeYkzH8ofjj1nV5GVUdl1ScKBoBQoSZrg='
  },
  {
    id: 11,
    title: 'Back To School Cycle',
    equity: 300,
    thumb :'https://media.istockphoto.com/photos/young-student-girl-with-backpack-picture-id981871354?b=1&k=20&m=981871354&s=170667a&w=0&h=-od3j2ljlPAeYkzH8ofjj1nV5GVUdl1ScKBoBQoSZrg='
  },
];


const AlarmScreen = () => {

   function ViewNavBar() {
    return(

      <View style={{flexDirection:'row',justifyContent:'space-between',padding:GetSize.PADDING,backgroundColor:GetColor.WHITE,paddingTop:35}}> 
        <View style={{flexDirection:'row'}}>
          <Ionicons name="notifications-outline" size={24} style={{marginHorizontal:4}} color="#748c94" /> 
          <Text style={{color:"#748c94",fontFamily: 'Inter_900Black', fontSize: 18,fontWeight:'bold'}}>Alerts</Text>
        </View>
        
        <View style={{flexDirection:'row'}} >
          <TouchableOpacity>
            <Ionicons name="search-outline" style={{marginHorizontal:10}} size={24} color="#748c94" />
          </TouchableOpacity>
                      
          <TouchableOpacity 
          >

            <AntDesign name="user" size={24} color="#748c94" />
          </TouchableOpacity>
        </View>

      </View>
      )
  }


function AlarmHeader(){

  return(
    <View style={{paddingBottom:GetSize.PADDING,flexDirection:'row',justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontFamily: 'Inter_900Black', fontSize: 14,fontWeight:'bold'}}>Notifications</Text>
        <Ionicons name="notifications-outline" size={18} style={{marginHorizontal:4}} color="#748c94" />
      </View> 
      <Text style={{fontFamily: 'Inter_900Black', fontSize: 14,fontWeight:'bold'}}>5</Text>
    </View>
  );
}


function ViewNotification(){

  const renderAlarmItem = ({ item }) =>( 
    <View style={{
        padding:GetSize.PADDING / 4, 
        backgroundColor:GetColor.WHITE,
        margin:4,
        borderRadius:GetSize.RADIUS,
        alignItems:'center',
        flexDirection:'row',

      }}  >  
        <View style={{marginHorizontal:GetSize.PADDING / 2 }}>
          <Avatar.Image
            size={40}
            source={{ uri: item.thumb }}/>
        </View>
        <View style={{marginHorizontal:GetSize.PADDING / 2 ,width:GetSize.width/1.8}}>
            <Text numberOfLines={3} style={{
              
              paddingVertical:5,
              color:GetColor.TEAL,
              fontFamily: 'Inter_900Black', 
              fontSize: 14,fontWeight:'bold'}}> {item.title} </Text>
              <Text style={{paddingBottom: 15}}>You have received ${item.equity}, with txn id 1dw.d23f.32d2 , Your A/C balance is now ${ item.equity + 3000 } </Text>
        </View>
      </View>
  )
    return(
    <View>
        {ViewNavBar()}
       <View style={{marginHorizontal:GetSize.PADDING ,marginVertical:GetSize.PADDING / 7,}}> 
      
        <FlatList
          data={ALERT}
          renderItem={renderAlarmItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        
      </View>
    </View>

    )
  }
  
  return (
    <View>
      
       {ViewNotification()}
    </View>
  );
}


export const SearchScreen = () => {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cycle two!</Text>
    </View>
  );
}


export const SettingsScreen = ()=> {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cycle two!</Text>
    </View>
  );
}

export default AlarmScreen;