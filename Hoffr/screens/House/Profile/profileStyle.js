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
  img : {
    height : hp("120%"),
    width : wp("100%"),
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
  logo:{
    marginTop : hp('5%'),
    height : hp('6%'),
    width : wp('35%'),
  },
  back:{
    alignItems : 'center',
    borderTopWidth : 1,
    width : width,
    marginTop : hp('1%')
  },
  heading : {
    fontSize : 20,
    fontWeight : '700',
    marginTop : 10
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
    fontSize : 20,
    fontWeight : "600",
  },
  info : {
    right : wp("20%"),
  }
});