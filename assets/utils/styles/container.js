import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    HeaderText:{
      fontSize:15,
      // fontWeight: 50,
      paddingBottom:5,
    },
    welcomeBtn:{
      width:290,
      borderRadius:50,
      alignItems: "center",
      backgroundColor: "dodgerblue",
      padding: 10,
      margin:3,
      
    },
    welcomeWrapper:{
      flex: 1,
      justifyContent: "flex-end",
      paddingHorizontal: 10,
      alignItems: "center",
    },
    welcomeBtnWrap:{   
      padding:20
    },
    signInWrapper:{
      justifyContent:"center",
      flex:1,
      alignItems:"center",

    },
    signInTextInput:{ 
      height: 30, 
      backgroundColor:"white", 
      borderColor: 'gray', 
      borderWidth: 1,
      margin:20,
      width:290,
      borderRadius:10,
      paddingLeft:10,
    },
    sigInFormWrap:{
      padding:20,
    },
    signInInputGroup:{
      padding:10,
    },
  });

export default styles;