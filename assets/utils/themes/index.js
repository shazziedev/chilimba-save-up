import { Dimensions } from 'react-native';
const { height , width } = Dimensions.get("window"); 


export const GetColor	= {
	//basic app colors
	PRIMARY: '#40E0D0',
	SECONDARY:'#DE3163',
	LEMON:'#DFFF00',
	TEAL:'teal',

	GRAY: '#BEC1D2',
	GRAY1: "#111",
	GRAY2: "#222",
	GRAY3: "#333",
	GRAY4: "#444",
	GRAY5: "#555",
	NARVY: "#000219",
	BLACK: '#1E1F20',
	WHITE: '#FFF',
	LIGHT_G0:'#ABAFB8',
	LIGHT_G1:'#EFEFF0',
	LIGHT_G2:'#D4D5D6',
	BLUE: '#42B0FF',
	DARK_GREEN:'#59990F',
	DARKGRAY:'#898C95',
	TRANS_GRAY0:'#CCD4D5D6',
	TRANS_GRAY1:'rgba(225,225,225,0.7)',
} 	

export const GetSize = {
	//global sizes
	INDEX: 8,
	FONT: 14,
	RADIUS:12,
	PADDING:24,

	//font sizes
	TITLE_LG: 50,
	H1: 30,
	H2: 22,
	H3: 16,
	H4: 14,
	TEXT1: 30,
	TEXT2: 20,
	TEXT3: 16,
	TEXT4: 14,

	//app dimension
	width,
	height 
}


 
export const GetFonts = {
	LG_TITLE: {fontFamily:"Roboto-Bold",fontSize:GetSize.largeTitle,lineHeight:50 },
	H1:  {fontFamily:"Roboto-Black",fontSize:GetSize.h1,lineHeight:36 },
	H2: {fontFamily:"Roboto-Bold",fontSize:GetSize.h2,lineHeight:30 },
	H3: {fontFamily:"Roboto-Bold",fontSize:GetSize.h3,lineHeight:22 },
	H4: {fontFamily:"Roboto-Bold",fontSize:GetSize.h3,lineHeight:22 },
	TEXT1:  {fontFamily:"Roboto-Regular",fontSize:GetSize.body1,lineHeight:36 },
	TEXT2: {fontFamily:"Roboto-Regular",fontSize:GetSize.body2,lineHeight:30 },
	TEXT3: {fontFamily:"Roboto-Regular",fontSize:GetSize.body3,lineHeight:22 },
	TEXT4: {fontFamily:"Roboto-Regular",fontSize:GetSize.body3,lineHeight:22 },
}

const customeTheme = { GetColor , GetSize , GetFonts };

export default customeTheme;