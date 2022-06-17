import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo : {
    position : 'absolute',
    marginTop : hp('17%'),
  },
  back : {
    marginTop : hp("35%"),
    alignItems : 'center',
  },
  set : {
    alignItems : 'center',
    textAlign : 'center',
    fontWeight : '500',
    height : hp("45%"),
    borderRadius : hp('10%')
  },
  text : {
    textAlign : 'center',
    fontSize : 18,
    marginLeft : wp('15%'),
    marginRight : wp('15%'),
    marginTop : 10
  },
  pic : {
    marginTop : 40
  },
  bton : {
    marginTop : 60,
    width : wp('60%'),
    padding : 5,
    backgroundColor : "#75D1CB",
    color : '#fff',
    textAlign : 'center',
    fontSize : 20,
    fontWeight : '600',
    borderRadius : 15
  }
});