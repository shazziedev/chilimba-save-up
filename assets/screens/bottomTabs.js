import * as React from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import { 
  MaterialCommunityIcons, 
  FontAwesome5,MaterialIcons,Ionicons,SimpleLineIcons ,
  Feather,FontAwesome,Entypo } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CycleScreen from './cycle.js';
import AlarmScreen  from './alarm.js';
import SearchScreen from './alarm.js';
import SettingsScreen from './alarm.js';

const BTab = createBottomTabNavigator();

function AddBottomTabButton ({onPress,children}) {
	return(
		<TouchableOpacity
		style={{
			top:-30,
			justifyContent:'center',
			alignItems:'center',
			shadowColor:'#7F5Df0',
			shadowOffset:{
				width:0,
				height:10,
			},
			shadowOpcaity:0.25,

			shadowRadius:3.5,
			elevation:5
		}}
		onPress={onPress}
	>
		<View style={{
			width:70,
			height:70,
			borderRadius:35,
			backgroundColor:'#e32f45',
			shadowColor:'#7F5Df0',
			shadowOffset:{
				width:0,
				height:10,
			},
			shadowOpcaity:0.25,

			shadowRadius:3.5,
			elevation:5
		}}>
			{children}
		</View>
	</TouchableOpacity>)
}


export default BottomTabs = () => {

	return(
	
		<BTab.Navigator
			screenOptions={{
				tabBarShowLabel:false,
				tabBarStyle:{
					position:'absolute',
					bottom:25,
					left:20,
					right:20,
					elevation:0,
					backgroundColor:'#fff',
					borderRadius:15,
					height:90,
					...styles.shadow
				}
			}}
		>
			<BTab.Screen name="Home" component={CycleScreen} options={{
				headerShown:false,

				tabBarIcon:({focused})=>(
					<View style={{
						alignItems:'center',
						justifyContent:'center'
					}}>
						<MaterialCommunityIcons name="recycle-variant" size={20} color={focused ? '#e32f45' : "#748c94"} />
						<Text style={{color: focused ? '#e32f45' : "#748c94", fontSize:12}}>Cycles</Text>
					</View>
					)
			}} />
			<BTab.Screen  name="Alarm" component={AlarmScreen} options={{
				headerShown:false,
				tabBarBadge:3,
				tabBarIcon:({focused})=>(

					<View style={{
						alignItems:'center',
						justifyContent:'center'
					}}>
						<Ionicons name="notifications-outline" size={20} color={focused ? '#e32f45' : "#748c94"} />
						<Text style={{color: focused ? '#e32f45' : "#748c94", fontSize:12}}>Alerts</Text>
					</View>
					)

			}} />
			<BTab.Screen  name="Chat" component={SearchScreen} options={{
				tabBarIcon:({focused})=>(
					<View style={{
						alignItems:'center',
						justifyContent:'center'
					}}>
						<MaterialCommunityIcons name="qrcode-scan" size={20} color={focused ? '#e32f45' : "#748c94"} />
						<Text style={{color: focused ? '#e32f45' : "#748c94", fontSize:12}}>Scan</Text>
					</View>
					)

			}} />
			<BTab.Screen name="Settings" component={SettingsScreen} options={{
					tabBarIcon:({focused})=>(
						<View style={{
						alignItems:'center',
						justifyContent:'center'
					}}>
						<Ionicons name="add-outline" size={40} color={focused ? '#fff' : "#fff"} />
					</View>
					),
					tabBarButton:(props)=>(
							<AddBottomTabButton {...props}/>
						)
			}} />

		</BTab.Navigator>
	
	);
}


const styles = StyleSheet.create({
	shadow:{
		shadowColor:'#7F5Df0',
		shadowOffset:{
			width:0,
			height:10,
		},
		shadowOpcaity:0.25,

		shadowRadius:3.5,
		elevation:5
	}
})