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
    marginTop : hp('1%')
  },
  welcome : {
    fontWeight : '600',
    fontSize : 20,
    color : '#363636'
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
    fontSize :20,
    color : '#fff',
    fontWeight : '600'
  },
});