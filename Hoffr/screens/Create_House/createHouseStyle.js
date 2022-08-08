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
    alignSelf : 'center'
  },
  back:{
    marginTop : hp('30%'),
    alignItems : 'center',
  },
  pic : {
    height : hp('20%'),
    width :hp('20%'),
    backgroundColor : '#656565',
    marginTop : hp('2%'),
    marginBottom : hp('4%'),
    borderRadius : hp('10%'),
    textAlign : 'center',
    textAlignVertical : 'center',
    color : '#fff'
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
    color : '#606060',
    //backgroundColor : "#fff"
  },
  bton : {
    marginTop : hp('4%'),
    height : 90,
    backgroundColor : "#fff"
  },
});