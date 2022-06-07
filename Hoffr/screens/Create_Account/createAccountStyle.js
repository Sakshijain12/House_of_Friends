import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logo:{
    marginTop : 150,
    alignItems: 'center',
    justifyContent : 'center'
  },

  back:{
      marginTop:70,
      textAlign : 'left',
      margin : 50,
  },

  box : {
      borderStyle : 'solid',
      borderWidth : 2,
      borderRadius : 15,
      fontSize:15,
      padding :10,
      marginBottom : 30
  },

  put : {
    textAlign : 'right',
    marginBottom :40
  },

  login : {
      borderRadius : 25,
      borderStyle : 'solid',
      borderWidth:2,
      borderColor : '#FDFBFB',
      //marginTop :30,
      textAlign : 'center',
      backgroundColor :'#B4E4BC',
      //color : '#656565',
      fontSize :18,
      padding :5
  },

  options:{
    textAlign : 'center',
    fontSize:18,
    marginTop:5,
  },

  bottom : {
      marginTop:15,
  }

});