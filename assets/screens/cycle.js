import * as React from 'react';
import { ActivityIndicator, TouchableOpacity,ProgressBarAndroid,
  StyleSheet, Text, View ,Image,ScrollView,FlatList,
  Button,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
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
  MaterialCommunityIcons, AntDesign ,
  FontAwesome5,MaterialIcons,Ionicons,SimpleLineIcons ,
  Feather,FontAwesome,Entypo } from '@expo/vector-icons';
import Chart from './chart.js';




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
      onPress={() => navigation.navigate('CycleDetails',{"itemInfo":item})}
    >
      <View style={{
        padding:GetSize.PADDING, 
        backgroundColor:GetColor.WHITE,
        marginHorizontal:4,
        borderRadius:GetSize.RADIUS,
        alignItems:'center',
        width:GetSize.width /1.7
      }}  >  
        <Text style={{paddingVertical:GetSize.PADDING/2 ,color:GetColor.SECONDARY,fontFamily: 'Inter_900Black', fontSize: 30,fontWeight:'bold'}}>K{item.equity}.00</Text>
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
        <Text style={{fontSize:16,color:GetColor.TEAL}}>K3250.00</Text>
      </View>
      <View style={{
        backgroundColor:GetColor.WHITE, borderRadius:10,padding:GetSize.INDEX * 2,
        flexDirection:'row',justifyContent:'space-between',marginVertical:GetSize.INDEX / 2.5}}>
        <Text>Sent</Text>
        <Text style={{fontSize:16,color:GetColor.SECONDARY}}>K1300.00</Text>
      </View>
      <View style={{
        backgroundColor:GetColor.WHITE, borderRadius:10,padding:GetSize.INDEX * 2,
        flexDirection:'row',justifyContent:'space-between',marginVertical:GetSize.INDEX / 2.5}}>
        <Text>Recieved</Text>
        <Text style={{fontSize:16,color:GetColor.TEAL}}>K3000.00</Text>
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



function CycleDetailScreen ({ route, navigation }) {

{/* create header function */}
  function ViewDetailsHeader(){
    let { itemInfo } = route.params;
    return(
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:GetSize.PADDING/1.5,backgroundColor:GetColor.WHITE,paddingTop:35 }}>

        <View style={{marginLeft:10,marginTop:10,flexDirection:'row' ,paddingTop:2 }}>
            <Entypo name="chevron-small-left" size={35} color="#333" onPress={()=>navigation.goBack()} />
            <Avatar.Image
              size={40}
              style={{marginTop:0}}
              source={{ uri: itemInfo.thumb }}
              />
            <Text style={{fontSize:18,marginTop:10,paddingHorizontal:10}}>{itemInfo.title}</Text>
        </View>     
        
        <View style={{flexDirection:"row",marginRight:10,marginTop:10}}>
          <View>
            <Ionicons.Button onPress={()=>navigation.navigate('ChatRoom',{'info': itemInfo })} backgroundColor={null} color="#333" name="chatbox-outline" size={24} color="black" />
            <View style={{
              position:'absolute',
              top:8,
              right:17,
              height:9,
              width:9,
              borderRadius:20,
              backgroundColor:'red',
            }}></View>
        </View>
          <Ionicons.Button backgroundColor={null} name="videocam-outline" size={24} color="black" />
          <MaterialIcons.Button name="more-vert" size={24} color="black" backgroundColor={null} color="#333" />


       </View>
       </View>
    )
  }

{/*function for equity barna*/}
function HeaderBaner(){
  let {itemInfo} = route.params;
  return(
      <View style={{backgroundColor:GetColor.WHITE, margin:GetSize.PADDING/2,borderRadius:10}}>
        <View style={{padding:GetSize.PADDING/1.5}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:24,color:GetColor.TEAL}}>Equity</Text>
              <Text style={{fontSize:24,color:GetColor.TEAL}}>K{itemInfo.equity}.00</Text>
            </View>
            <View >
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:GetSize.INDEX}}>
                <Text style={{fontSize:14,color:GetColor.PRIMARY}}>start dated</Text>
                <Text style={{fontSize:14,color:GetColor.SECONDARY}}>end dated</Text>
              </View>
             <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.7}
            />
            </View>
           {/* <View>
            <View style={{paddingVertical:GetSize.PADDING/4}}>
              <Chart/>
            </View>
                         <Text style={{fontSize:14,color:GetColor.GRAY1,paddingVertical:GetSize.PADDING/6}}>Joy's Week</Text>
                         <Avatar.Image 
                           
                           source={{uri:''}}
                         />
                       </View> */}
        </View>
      </View>
    );
}


function MembersSvg() {

  let { itemInfo } = route.params;
  
  return(
    <View style={{justifyContent:'center',alignItems:'center',padding:GetSize.PADDING,marginVertical:GetSize.PADDING * 1.5}}>
      <View style={{
        width:GetSize.width/1.8,
        height:GetSize.width/1.8,
        borderWidth:2,
        borderRadius:160,
        borderColor:'teal',
      }}>

        <Avatar.Image
              size={70}
              style={{
                position:'absolute',
                top:-45,
                right:100,

                marginTop:0,
              }}
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
              />
              <Avatar.Image
                size={70}
                style={{
                  position:'absolute',
                  top:80,
                  right:-40,
                  padding:2,
                  borderWidth:2,
                  borderColor:GetColor.SECONDARY,
                  marginTop:0,
                }}
                source={{ uri: 'https://images.unsplash.com/photo-1578758837674-93ed0ab5fbab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1c2luZXNzJTIwYmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
              />
              <Avatar.Image
                size={70}
                style={{
                    position:'absolute',
                    top:80,
                    left:-40,
                    padding:2,
                    borderWidth:2,
                    borderColor:GetColor.PRIMARY,
                    marginTop:0,
                  }}
                source={{ uri: 'https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzJTIwYmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
              />
              <Avatar.Image
                size={70}
                style={{
                    position:'absolute',
                    bottom:0,
                    left:-10,
                    padding:2,
                    borderWidth:2,
                    borderColor:GetColor.PRIMARY,
                    marginTop:0,
                  }}
                source={{ uri: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1c2luZXNzJTIwYmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
              />
               <Avatar.Image
                size={70}
                style={{
                    position:'absolute',
                    bottom:0,
                    right:-5,
                    padding:2,
                    borderWidth:2,
                    borderColor:GetColor.PRIMARY,
                    marginTop:0,
                  }}
                source={{ uri: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjBibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
              />
              <View  size={70}
                style={{
                  backgroundColor:GetColor.TRANS_GRAY0,
                  padding:GetSize.INDEX,
                  borderRadius:10,
                  position:'absolute',
                  top:80,
                  alignItems:'center',
                  right:70,
                }}>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>Ivy's week</Text>
                  <Text>K{itemInfo.equity/5}.00 member </Text>
                  <Text>deposit</Text>
              </View>
      </View>
    </View>
  )
}


function Transaction(){
  let { itemInfo } = route.params;
  return(
    <View style={{
      
    }}>
    <Text style={{marginHorizontal:GetSize.PADDING/2,color:GetColor.GRAY5, fontFamily: 'Inter_900Black', fontSize: 14,fontWeight:'bold'}}>
      Transactions
    </Text>

      <View style={{
       backgroundColor:GetColor.WHITE,padding:GetSize.PADDING/2,
      marginTop:GetSize.PADDING/2,borderRadius:10,marginHorizontal:GetSize.PADDING/2,
      flexDirection:'row',justifyContent:'space-between'
    }}>
        <Text>Recieved (4 members)</Text>
        <Text style={{fontSize:16,color:GetColor.TEAL}}>K{itemInfo.equity-itemInfo.equity/5}.00</Text>
      </View>
      <View style={{
        backgroundColor:GetColor.TEAL,padding:GetSize.PADDING/2,
        marginTop:GetSize.PADDING/2,borderRadius:10,marginHorizontal:GetSize.PADDING/2,
        flexDirection:'row',justifyContent:'center'
      }}>
        <Ionicons backgroundColor={null} name="card-outline" size={24} color="black" />
        <Text style={{fontSize:16,color:GetColor.WHITE,marginHorizontal:10}}>Make Payment</Text>
      </View>
    </View>
  );
}
{/* main detail function */}
  return (
    <View>
    {/* show the header function */}

      {ViewDetailsHeader()}
      {HeaderBaner()}
      {Transaction()}
      {MembersSvg()}
    </View>
  );
}

function ChartRoom (){

  return(
  <View>
      <View style={{justifyContent:'center', alignItems:'center',margin:GetSize.INDEX}}>
          <Text style={{color:GetColor.LIGHT_G0}}> yesterday at 11:04 pm </Text>
      </View>
      <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
          <Text style={{ 
            backgroundColor:GetColor.PRIMARY, padding:GetSize.PADDING/2,color:GetColor.WHITE,
            position:'absolute',top:10,left:50,width:GetSize.width/8,borderRadius:10,
          }}>Hi Ivy</Text>
          <Text style={{
            backgroundColor:GetColor.PRIMARY, padding:GetSize.PADDING/2, color:GetColor.WHITE,
            position:'absolute',top:55,left:50,width:GetSize.width/3,borderRadius:10,
          }}>Hey How are you?</Text>
          <Avatar.Image
              size={40}
              style={{
                position:'absolute',
                top:100,
                left:20,
                
              }}
              source={{ uri: 'https://images.unsplash.com/photo-1578758837674-93ed0ab5fbab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1c2luZXNzJTIwYmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}

              />
      </View>
  </View>
  );
}

function CycleChatRoom({ route, navigation }) {
  let {info} = route.params;
  {/* create header function */}
  function ViewDetailsHeader(){
    let { itemInfo } = route.params;
    return(
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:GetSize.PADDING/1.5,backgroundColor:GetColor.WHITE,paddingTop:35 }}>

        <View style={{marginLeft:10,marginTop:10,flexDirection:'row' ,paddingTop:2 }}>
            <Entypo name="chevron-small-left" size={35} color="#333" onPress={()=>navigation.goBack()} />
            <Avatar.Image
              size={40}
              style={{marginTop:0}}
              source={{ uri: info.thumb }}
              />
            <Text style={{fontSize:18,marginTop:10,paddingHorizontal:10}}>{info.title}</Text>
        </View>     
        
        <View style={{flexDirection:"row",marginRight:10,marginTop:10}}>
          <View>
            <Ionicons.Button onPress={()=>navigation.navigate('ChatRoom',{'info': itemInfo })} backgroundColor={null} color="#333" name="chatbox-outline" size={24} color="black" />
            <View style={{
              position:'absolute',
              top:8,
              right:17,
              height:9,
              width:9,
              borderRadius:20,
              backgroundColor:'red',
            }}></View>
        </View>
          <Ionicons.Button backgroundColor={null} name="videocam-outline" size={24} color="black" />
          <MaterialIcons.Button name="more-vert" size={24} color="black" backgroundColor={null} color="#333" />


       </View>
       </View>
    )
  }
  return(
    <View>
    {ViewDetailsHeader()}
    {ChartRoom()}

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
        <Stack.Screen name="CycleDetails" component={CycleDetailScreen} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="ChatRoom" component={CycleChatRoom} options={{
          headerShown:false,
        }}/>
      </Stack.Navigator>
  );
}


export default CycleStackScreen;

{/*
  market: Photo by <a href="https://unsplash.com/@_gemmajade?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">gemma</a> on <a href="https://unsplash.com/s/photos/market?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  school:Photo by <a href="https://unsplash.com/@notethanun?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">note thanun</a> on <a href="https://unsplash.com/s/photos/school-children?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  weding: Photo by <a href="https://unsplash.com/@beatriz_perez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Beatriz Pérez Moya</a> on <a href="https://unsplash.com/s/photos/wedding-rings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
*/}
