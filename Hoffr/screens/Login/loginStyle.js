import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logo:{
    marginTop : hp('14%'),
    alignItems: 'center',
    justifyContent : 'center'
  },

  back:{
      marginTop:hp('10%'),
      margin : hp('5%'),
      textAlign : 'left'
  },

  email : {
    marginLeft : wp('2%'),
    fontWeight : '500',
    color : '#606060',
    marginBottom : hp('1%')
  },

  box : {
      borderStyle : 'solid',
      borderWidth : 2,
      borderRadius : 12,
      fontSize:15,
      padding :hp("1%"),
      color : '#606060',
      borderColor : '#656565'
  },

  code : {
      backgroundColor : '#75D1CB',
      fontSize:20,
      borderRadius:12,
      textAlign: 'center',
      marginTop : hp('8%'),
      color : '#fff',
      margin :hp('1%'),
      padding:hp('0.7%'),
  },

  option:{
    textAlign : 'center',
    fontSize:18,
    marginTop:hp('2%'),
    color : '#606060'
  },

  options:{
      textAlign : 'center',
      fontSize:18,
      marginTop:hp('3%'),
      color : '#606060',
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
    marginLeft : wp('5%'),
    color : '#606060',
  },

});