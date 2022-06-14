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
    marginTop : hp('15%'),
    alignItems : 'center',
  },
  question : {
    color : '#606060',
    fontWeight : '500',
    fontSize : 20,
    margin : wp('20%'),
    marginBottom : wp('10%'),
    textAlign : 'center'
  },
  set : {
    alignItems : 'center'
  },
  pic : {
    height : hp('20%'),
    width :hp('20%'),
    marginTop : hp('2%'),
    borderRadius : hp('10%'),
    borderWidth : 2,
  },
  text : {
    bottom : hp('12%'),
    color : '#fff',
    fontWeight : '600',
    fontSize : 24
  },
});