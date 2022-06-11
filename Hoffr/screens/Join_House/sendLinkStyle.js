import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo:{
    position : 'absolute',
    marginTop : hp('10%'),
  },
  back:{
    marginTop : hp('25%'),
    alignItems : 'center',
  },
  welcome : {
    marginTop : hp('4%'),
    fontWeight : '500',
    fontSize : hp('2%')
  },
  house : {
    marginTop : hp('4%'),
    fontWeight : '500'
  },
  pic : {
    height : hp('14%'),
    width :hp('14%'),
    backgroundColor : '#75D1CB',
    marginTop : hp('2%'),
    marginBottom : hp('5%'),
    borderRadius : hp('7%'),
  
  },
  name : {
    borderWidth :2,
    borderStyle : 'solid',
    width : wp('80%'),
    borderRadius : 15,
    height : hp('5%'),
    padding: wp('3%'),
    marginTop :hp('2%'),
  },
  bton : {
    marginTop : hp('10%'),
    width : wp('70%'),
    borderWidth : 2,
    backgroundColor : '#75D1CB',
    textAlign : 'center',
    borderColor : '#fff',
    padding : hp('0.4%'),
    borderRadius :15,
    fontSize :18,
    color : '#fff'
  },
  box : {
    borderRadius : 15,
    borderStyle : 'solid',
    backgroundColor : 'red'
  },
  profile : {
    width : wp('10%'),
    height : wp('10%'),
    backgroundColor : '#F9C460',
    borderRadius : wp('5%')
  },
  gap : {
    alignSelf : 'flex-start',
    flexDirection : 'row',
    marginTop : hp('1%'),
    marginLeft : wp('10%')
  },
  text : {
    marginTop : hp('1%'),
    marginLeft : wp("6%")
  },
});