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
    margin : wp('15%'),
    textAlign : 'center',
  },
  question : {
    fontSize :25,  
  },
  option : {
    fontSize :hp('4%'),
    borderWidth : 2,
    padding :15,
    backgroundColor : 'grey',
    marginTop : hp('5%'),
    borderColor : '#fff',
    marginLeft : wp('10%'),
    marginRight : wp('10%'),
    textAlign : 'center',
    borderRadius :hp('7.5%'),
    height : hp('25%'),
    backgroundColor : '#75D1CB',
    color : '#fff',
  },
});