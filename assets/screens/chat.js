{/* import * as React from 'react';
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

import { GiftedChat } from 'react-native-gifted-chat';

class ChatRoom extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello Ivy',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Kevin bandae',
            avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjBibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

export default ChatRoom;*/}