import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  img : {
    height : hp("100%"),
    width : wp("100%"),
    top : 30,
  },
  logo:{
    position : 'absolute',
    marginTop : hp('10%'),
    alignSelf : "center"
  },
  back:{
    marginTop : hp('25%'),
    margin : wp('15%'),
    textAlign : 'center',
  },
  question : {
    fontSize :25,
    textAlign : 'center',
    color : "#656565"  
  },
  option1 : {
    fontSize :hp('3.5%'),
    top : hp('18%'),
    position : 'absolute',
    marginLeft : wp('22%'),
    marginRight : wp('17%'),
    textAlign : 'center',
    color : '#444444',
    justifyContent : 'center',
    paddingVertical :hp('2%'),
    fontWeight : "700"
  },
  option2 : {
    fontSize :hp('3.5%'),
    top : hp('45%'),
    position : 'absolute',
    marginLeft : wp('23%'),
    marginRight : wp('18%'),
    textAlign : 'center',
    color : '#444444',
    justifyContent : 'center',
    paddingVertical :hp('4.5%'),
    fontWeight : '700'
  },
  img1 : {
    margin : wp('15%'),
    height : hp('22%'),
    width : wp('40%')
  },
  img2 : {
    marginLeft : wp('15%'),
    height : hp('22%'),
    width : wp('40%')
  },
});