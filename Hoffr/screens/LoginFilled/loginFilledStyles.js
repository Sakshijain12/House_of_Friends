import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logo:{
    marginTop : hp('10%'),
    alignItems: 'center',
    justifyContent : 'center'
  },

  back:{
      marginTop:hp('10%'),
      textAlign : 'left',
      margin : wp('10%'),
  },

  box : {
      borderStyle : 'solid',
      borderWidth : 2,
      borderRadius : 15,
      fontSize:15,
      padding :wp('2.5%'),
  },

  put : {
    textAlign : 'right',
    marginBottom :hp('5%')
  },

  login : {
      borderRadius : wp('15%'),
      borderStyle : 'solid',
      borderWidth:2,
      borderColor : '#FDFBFB',
      marginTop :hp('5%'),
      textAlign : 'center',
      backgroundColor : '#75D1CB',
      color : '#fff',
      fontSize :18,
      padding :wp('2%'),
  },

});