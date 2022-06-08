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
      margin : hp('5%'),
  },

  email : {
    marginLeft : wp('2%')
  },

  box : {
      borderStyle : 'solid',
      borderWidth : 2,
      borderRadius : hp('3%'),
      fontSize:15,
      padding :hp("1%"),
      backgroundColor : '#FDFBFB'
  },

  code : {
      backgroundColor : '#75D1CB',
      fontSize:18,
      borderRadius:hp('3%'),
      textAlign: 'center',
      marginTop : hp('8%'),
      color : '#fff',
      margin :hp('1%'),
      padding:hp('0.7%')
  },

  options:{
      textAlign : 'center',
      fontSize:18,
      marginTop:hp('0.6%')
  },

  google:{
    backgroundColor : '#fff',
    width :wp("10%"),
    height : hp('5%'),
    marginLeft : wp('15%'),
    marginTop :hp('3%'),
  },

  sign : {
    flexDirection : 'row',
    alignItems : 'center',
    marginLeft:wp('10%')
},

options2:{
  textAlign : 'center',
  fontSize:18,
  marginTop:hp('2%'),
  marginLeft : wp('5%')
},

});