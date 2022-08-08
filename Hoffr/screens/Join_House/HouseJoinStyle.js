import { StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  top : {
    flexDirection : 'row'
  },
  groupPic : {
    width : hp('5%'),
    height : hp('5%'),
    backgroundColor : '#F9C460',
    borderRadius : hp('2.5%'),
    marginTop : hp('5%'),
    marginLeft : wp('-25%'),
    position : 'absolute',
  },
  img : {
    height : hp("100%"),
    width : wp("100%"),
  },
  logo:{
    marginTop : hp('5%'),
    height : hp('6%'),
    width : wp('35%'),
  },
  icon : {
    position : 'absolute',
    top : hp('13%'),
    right : wp('-28%'),
    color : '#667080'
  },
  back:{
    alignItems : 'center',
    borderTopWidth : 1,
    width : width,
    marginTop : hp('1%'),
    top : hp('-1%')
  },
  welcome : {
    marginTop : hp('5%'),
    fontWeight : '700',
    fontSize : 24
  },
  house : {
    marginTop : hp('4%'),
    fontWeight : '700',
    fontSize : 20,
    color : '#363636'
  },
  pic : {
    height : hp('20%'),
    width :hp('20%'),
    backgroundColor : '#75D1CB',
    marginTop : hp('2%'),
    marginBottom : hp('5%'),
    borderRadius : hp('10%'),
    borderWidth : 2,
    borderColor : '#656565'
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
    position : 'absolute',
    top : hp('80%'),
    width : wp('70%'),
    //borderWidth : 2,
    backgroundColor : '#75D1CB',
    textAlign : 'center',
    //borderColor : '#fff',
    padding : hp('0.4%'),
    borderRadius :15,
    fontSize :20,
    color : '#fff',
    fontWeight : '700',
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.8,
    elevation: 15,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
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
    borderRadius : wp('5%'),
    marginLeft : wp('20%'),
    borderWidth :1,
    borderColor : 'black'
  },
  gap : {
    alignSelf : 'flex-start',
    flexDirection : 'row',
    marginTop : hp('1%'),
    marginLeft : wp('10%')
  },
  text : {
    marginTop : hp('0.5%'),
    marginLeft : wp("6%"),
    fontSize : 20,
    color : '#656565',
  },
});