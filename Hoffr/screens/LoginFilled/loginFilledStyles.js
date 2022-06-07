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
      marginTop:100,
      textAlign : 'left',
      margin : 50,
  },

  box : {
      borderStyle : 'solid',
      borderWidth : 2,
      borderRadius : 15,
      fontSize:15,
      padding :10,
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
      marginTop :30,
      textAlign : 'center',
      backgroundColor : '#656565',
      color : '#fff',
      fontSize :18,
      padding :5
  },

});