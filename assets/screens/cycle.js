import * as React from 'react';
import { ActivityIndicator, TouchableOpacity,
  StyleSheet, Text, View ,Image,ScrollView,FlatList,
  Button,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import customeTheme from '../utils/themes/index.js';
import { GetColor , GetSize , GetFonts } from '../utils/themes/index.js'
import { useFonts  } from 'expo-font';
import { useFonts as UF, Inter_900Black,Allan_700Bold } from '@expo-google-fonts/inter';
import {
  useTheme,
  Avatar,Drawer,
  Title,Paragraph,
  Text as Txt,Caption,TouchableRipple,
  Switch
} from 'react-native-paper';
import { 
  MaterialCommunityIcons, AntDesign,
  FontAwesome5,MaterialIcons,Ionicons,SimpleLineIcons ,
  Feather,FontAwesome,Entypo } from '@expo/vector-icons';





const DATA = [
  {
    id: 0,
    title: 'Waane & Lubasi: Weding ',
    equity: 2360,
    thumb : 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 1,
    title: 'Business Capital Cycle',
    equity: 1310,
    thumb :'https://images.unsplash.com/photo-1569180880150-df4eed93c90b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'Back To School Cycle',
    equity: 3000,
    thumb :'https://media.istockphoto.com/photos/young-student-girl-with-backpack-picture-id981871354?b=1&k=20&m=981871354&s=170667a&w=0&h=-od3j2ljlPAeYkzH8ofjj1nV5GVUdl1ScKBoBQoSZrg='
  },
];

const Item = ({ title }) => (
  <View style={{paddingTop:GetSize.PADDING / 1.3}} >
    <Text style={{color:GetColor.GRAY5,fontFamily: 'Inter_900Black', fontSize:16,fontWeight:'bold'}} >{title}</Text>
    
  </View>
);


const  CycleScreen = ({ navigation }) => {
   let [fontsLoaded] = useFonts({
    Inter_900Black,
      });

  function ViewNavBar() {
    return(

      <View style={{flexDirection:'row',justifyContent:'space-between',padding:GetSize.PADDING,backgroundColor:GetColor.WHITE,paddingTop:35}}> 
        <View style={{flexDirection:'row'}}>
          <MaterialCommunityIcons name="recycle-variant" size={24} color="#748c94" />
          <Text style={{marginHorizontal:5, color:"#748c94",fontFamily: 'Inter_900Black', fontSize: 18,fontWeight:'bold'}}>Cycles</Text>
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

  function ViewHeader(){
 
    return(
      <View style={{
          marginHorizontal:GetSize.PADDING / 2,marginVertical:GetSize.PADDING / 3, borderRadius: 10,
          padding:GetSize.PADDING / 2, backgroundColor:GetColor.WHITE}}> 
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:GetColor.TEAL,fontFamily: 'Inter_900Black', fontSize: 40}}>Chilimba</Text>
            <Ionicons name="qr-code-outline" size={26} style={{padding:GetSize.PADDING/2}} color="black" />
          </View>
        <Text 
          style={{color:GetColor.LIGHT_G0}}
        >Your key to loans, savings and fundraising!</Text>
      </View>
    )
  }
       



function ViewCycleSubHeading(){
  return(
    <View style={{paddingBottom:GetSize.PADDING/3,flexDirection:'row',justifyContent:'space-between'}}> 
      <Text style={{color:GetColor.GRAY5, fontFamily: 'Inter_900Black', fontSize: 14,fontWeight:'bold'}}>Money Cycles Joined</Text>
      <Text style={{fontFamily: 'Inter_900Black', fontSize: 14,fontWeight:'bold'}}>3</Text>
    </View>
  )
}




  function ViewCycle(){
    const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('CycleDetails')}
    >
      <View style={{
        padding:GetSize.PADDING, 
        backgroundColor:GetColor.WHITE,
        marginHorizontal:4,
        borderRadius:GetSize.RADIUS,
        alignItems:'center',
        width:GetSize.width /1.7
      }}  >  
        <Text style={{paddingVertical:GetSize.PADDING/2 ,color:GetColor.SECONDARY,fontFamily: 'Inter_900Black', fontSize: 30,fontWeight:'bold'}}>${item.equity}.00</Text>
        <Avatar.Image
          size={120}
          source={{ uri: item.thumb }}
        />
        <Item title={item.title} />
      </View>
      </TouchableOpacity>
    );


function AccountSummary(){
  return(
    <View style={{paddingHorizontal:GetSize.PADDING/4,paddingVertical:7}}>
      <Text style={{paddingBottom:GetSize.PADDING/3,marginTop:12,
          color:GetColor.GRAY5, fontFamily: 'Inter_900Black', 
          fontSize: 14,fontWeight:'bold'}}>My Chilimba Wallet</Text>
      <View style={{
        backgroundColor:GetColor.WHITE, borderRadius:10,padding:GetSize.INDEX * 2,
        flexDirection:'row',justifyContent:'space-between',marginVertical:GetSize.INDEX / 2.5}}>
        <Text>Account Balance</Text>
        <Text style={{fontSize:16,color:GetColor.TEAL}}>$3250.00</Text>
      </View>
      <View style={{
        backgroundColor:GetColor.WHITE, borderRadius:10,padding:GetSize.INDEX * 2,
        flexDirection:'row',justifyContent:'space-between',marginVertical:GetSize.INDEX / 2.5}}>
        <Text>Sent</Text>
        <Text style={{fontSize:16,color:GetColor.SECONDARY}}>$3000</Text>
      </View>
      <View style={{
        backgroundColor:GetColor.WHITE, borderRadius:10,padding:GetSize.INDEX * 2,
        flexDirection:'row',justifyContent:'space-between',marginVertical:GetSize.INDEX / 2.5}}>
        <Text>Recieved</Text>
        <Text style={{fontSize:16,color:GetColor.TEAL}}>$3000</Text>
      </View>
    </View>
  )
}

    return(
       <View style={{
          marginHorizontal:GetSize.PADDING / 6,marginVertical:GetSize.PADDING / 10, borderRadius: 10,
          paddingHorizontal:GetSize.PADDING / 3}} > 
        {ViewCycleSubHeading()}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {AccountSummary()}
      </View>

    )
  }







  return (
    <View >
      {ViewNavBar()}
      {ViewHeader()}
      {ViewCycle()}
     
    </View>
  );
}



const CycleDetailScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notification!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function CycleStackScreen() {
  return(
      <Stack.Navigator>
        <Stack.Screen name="Index" component={CycleScreen} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="CycleDetails" component={CycleDetailScreen}/>
      </Stack.Navigator>
  );
}


export default CycleStackScreen;

{/*
  market: Photo by <a href="https://unsplash.com/@_gemmajade?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">gemma</a> on <a href="https://unsplash.com/s/photos/market?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  school:Photo by <a href="https://unsplash.com/@notethanun?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">note thanun</a> on <a href="https://unsplash.com/s/photos/school-children?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  weding: Photo by <a href="https://unsplash.com/@beatriz_perez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Beatriz Pérez Moya</a> on <a href="https://unsplash.com/s/photos/wedding-rings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
*/}
