import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  img : {
    height : hp("120%"),
    width : wp("100%"),
    top : 30,
  },
  logo:{
    position : 'absolute',
    marginTop : hp('10%'),
    alignSelf : 'center'
  },
  back:{
    marginTop : hp('25%'),
    alignItems : 'center',
  },
  pic : {
    height : hp('20%'),
    width :hp('20%'),
    marginTop : hp('2%'),
    marginBottom : hp('4%'),
    borderRadius : hp('10%'),
    borderColor : '#656565',
    borderWidth : 2
  },
  name : {
    borderWidth :2,
    borderStyle : 'solid',
    width : wp('80%'),
    borderRadius : 15,
    height : hp('5%'),
    padding: wp('3%'),
    marginTop :hp('2%'),
    borderColor : '#656565',
    color : '#606060'
  },
  bton : {
    marginTop : hp('6%'),
    borderRadius : 15,
    backgroundColor : '#75D1CB',
    padding : hp('1%'),
    width : wp('70%'),
    textAlign : 'center',
    fontWeight : '700',
    fontSize : 20,
    color : '#fff'
  },
  box : {
    borderRadius : 15,
    borderStyle : 'solid',
    borderWidth :2,
    padding : 10,
    marginTop : hp('2%'),
    fontWeight : '500',
    borderColor : '#75D1CB',
    backgroundColor : "#fff"
  },
  newChannel : {
    marginTop : hp('1%'),
    fontWeight : '500'
  },
  text : {
    fontStyle : 'italic',
    color : '#656565'
  },
});