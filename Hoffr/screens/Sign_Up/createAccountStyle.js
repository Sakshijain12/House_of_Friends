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
      marginTop:hp('8%'),
      textAlign : 'left',
      margin : wp('10%'),
  },

  box : {
      borderStyle : 'solid',
      borderWidth : 2,
      borderRadius : 12,
      fontSize:15,
      padding :wp('2.5%'),
      marginBottom : hp('4%'),
      marginTop : hp('1%')
  },

  login : {
      borderRadius : 12,
      borderStyle : 'solid',
      borderWidth:2,
      borderColor : '#FDFBFB',
      marginTop :hp('4%'),
      textAlign : 'center',
      backgroundColor :'#75D1CB',
      color : '#fff',
      fontSize :20,
      padding :wp('1.5%')
  },

  options:{
    textAlign : 'center',
    fontSize:18,
    marginTop:hp('4%'),
  },

  options1:{
    textAlign : 'center',
    fontSize:18,
    marginTop:hp('3%'),
  },

  bottom : {
      marginTop:hp('1%'),
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
    marginLeft:wp('8%')
},

options2:{
  textAlign : 'center',
  fontSize:18,
  marginTop:hp('2%'),
  marginLeft : wp('5%')
},

});