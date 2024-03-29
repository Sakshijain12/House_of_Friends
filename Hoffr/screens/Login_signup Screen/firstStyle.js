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
  logo:{
    position : 'absolute',
    marginTop : hp('23%'),
    alignSelf : 'center'
  },
  Bton : {
    margin : hp('2.5%'),
    width : wp('70%'),
    backgroundColor : '#75D1CB',
    padding :5,
    borderRadius :12,
    alignSelf : 'center',
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.8,
    elevation: 15,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  texting: {
    color : '#fff',
    textAlign : 'center',
    fontSize :20,
    fontWeight : "700"
  },
  back:{
    marginTop : hp('54%'),
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});