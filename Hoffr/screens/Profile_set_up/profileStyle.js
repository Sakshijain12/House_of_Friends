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
    marginTop : hp('30%'),
    alignItems : 'center',
  },
  pic : {
    height : hp('20%'),
    width :hp('20%'),
    marginTop : hp('2%'),
    marginBottom : hp('5%'),
    borderRadius : hp('10%'),
    backgroundColor : '#656565',
    borderWidth : 2,
    borderColor : 'black',
  },
  name : {
    borderWidth :2,
    borderStyle : 'solid',
    width : wp('80%'),
    borderRadius : 12,
    height : hp('5%'),
    padding: wp('3%'),
    marginTop :hp('2%'),
    borderColor : '#656565',
    color : '#606060',
    backgroundColor : "#fff"
  },
  bton : {
    marginTop : hp('10%'),
    width : wp('70%'),
    borderWidth : 2,
    backgroundColor : '#75D1CB',
    textAlign : 'center',
    borderColor : '#fff',
    padding : hp('0.4%'),
    borderRadius :12,
    fontSize :20,
    color : '#fff',
    fontWeight : "700"
  },
});