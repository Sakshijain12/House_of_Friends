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
    marginTop : hp('23%'),
  },
  Bton : {
    margin : hp('2.5%'),
    width : wp('70%'),
    backgroundColor : '#75D1CB',
    padding :5,
    borderRadius :12,
  },
  texting: {
    color : '#fff',
    textAlign : 'center',
    fontSize :20
  },
  back:{
    marginTop : hp('54%'),
  }
});