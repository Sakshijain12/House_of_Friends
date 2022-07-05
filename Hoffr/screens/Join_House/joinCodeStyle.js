import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  img : {
    height : hp("120%"),
    width : wp("100%"),
    top : 30,
  },

  logo:{
    marginTop : hp('10%'),
    alignItems: 'center',
    justifyContent : 'center'
  },

  back:{
      marginTop:hp('10%'),
      margin : hp('5%'),
      textAlign : 'left'
  },

  code : {
    marginLeft : wp('2%'),
    fontSize : 24,
    textAlign : 'center',
    marginBottom : hp('4%'),
    fontWeight : '600',
    color : '#656565',
  },

  box : {
      borderStyle : 'solid',
      borderWidth : 2,
      borderRadius : hp('3%'),
      fontSize:18,
      padding :hp("1%"),
      textAlign : 'center',
      backgroundColor : "#fff"
  },

  join : {
      backgroundColor : '#75D1CB',
      fontSize:20,
      borderRadius:wp('15%'),
      textAlign: 'center',
      marginTop : hp('8%'),
      color : '#fff',
      margin :wp('15%'),
      padding:hp('0.7%'),
      fontWeight : '700'
  },

  or : {
    textAlign : 'center',
      fontSize:18,
      marginTop:hp('-2%'),
      fontWeight : '400',
      color : '#656565'
  },

  link:{
      textAlign : 'center',
      fontSize:24,
      fontWeight : '500',
      marginTop : hp('4%'),
      margin : wp('10%'),
      color : '#656565'
  },
});