import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img : {
    height : hp("100%"),
    width : wp("100%"),
    top : 30,
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

  box1 : {
      borderStyle : 'solid',
      borderWidth : 2,
      borderRadius : 12,
      fontSize:15,
      padding :hp("1%"),
      color : '#606060',
      borderColor : '#DEDEDE',
      //backgroundColor : "#fff"
  },

  box2 : {
    borderStyle : 'solid',
    borderWidth : 2,
    borderRadius : 12,
    fontSize:15,
    padding :hp("1%"),
    color : '#606060',
    borderColor : '#656565',
    //backgroundColor : "#fff"
},

  put : {
    textAlign : 'right',
    marginBottom :hp('5%'),
    color : '#606060'
  },

  login : {
      backgroundColor : '#75D1CB',
      fontSize :20,
      borderRadius :12,
      textAlign : 'center',
      borderStyle : 'solid',
      //borderWidth:2,
      //borderColor : '#FDFBFB',
      marginTop :hp('5%'),
      color : '#fff',
      padding :wp('2%'),
      fontWeight : "700",
      shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.8,
    elevation: 15,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },

});