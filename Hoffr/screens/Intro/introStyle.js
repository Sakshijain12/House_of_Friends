import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  img : {
    height : hp("120%"),
    width : wp("100%"),
    top : 30,
  },
  logo : {
    position : 'absolute',
    marginTop : hp('17%'),
    alignSelf : 'center'
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
    borderRadius : hp('7%'),
    backgroundColor : "#fff"
  },
  text : {
    textAlign : 'center',
    fontSize : 18,
    marginLeft : wp('10%'),
    marginRight : wp('10%'),
    marginTop : 15,
    fontWeight : '600',
    color : '#656565',
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
    fontWeight : '700',
    borderRadius : 15,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.8,
    elevation: 15,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
});