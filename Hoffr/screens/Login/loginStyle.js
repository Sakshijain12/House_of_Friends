import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
  },

  logo:{
    //position : 'absolute',
    marginTop : 150,
    alignItems: 'center',
    justifyContent : 'center'
  },

  back:{
      marginTop:150,
      textAlign : 'left',
      margin : 50,
  },

  box : {
      borderStyle : 'solid',
      borderWidth : 2,
      borderRadius : 15,
      fontSize:20
  },

  code : {
      backgroundColor : 'grey',
      fontSize:18,
      borderRadius:10,
      textAlign: 'center',
      marginTop : 50,
      color : '#fff',
      margin :15,
      padding:5
  },

  options:{
      textAlign : 'center',
      fontSize:18,
      marginTop:5
  }
});