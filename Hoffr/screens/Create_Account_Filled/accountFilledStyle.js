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
      borderRadius : wp('5%'),
      fontSize:15,
      padding :wp('2.5%'),
      marginBottom : hp('4%')
  },

  login : {
      borderRadius : wp('6%'),
      borderStyle : 'solid',
      borderWidth:2,
      borderColor : '#FDFBFB',
      marginTop :hp('4%'),
      textAlign : 'center',
      backgroundColor :'#75D1CB',
      fontSize :18,
      padding :wp('1.5%'),
      color : '#fff'
  },

});