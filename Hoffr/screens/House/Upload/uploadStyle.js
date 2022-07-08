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
    marginLeft : wp('-30%'),
    position : 'absolute',
  },
  logo:{
    marginTop : hp('5%'),
    height : hp('6%'),
    width : wp('35%'),
    alignSelf : 'center'
  },
  home : {
    position : "absolute",
    marginTop : hp("3.5%"),
    left : wp("55%"),
    height : hp("7%"),
    width : hp("5%")
  },
  img : {
    height : hp("120%"),
    width : wp("100%"),
  },
  back:{
    borderTopWidth : 1,
    width : width,
    marginTop : hp('1%')
  },
  heading : {
    fontWeight : '700',
    fontSize : 20,
    color : '#363636',
    alignSelf : "center"
  },
  group : {
    flexDirection : "row",
    marginTop : hp("3%"),
    justifyContent : "space-between",
    margin : hp("1.5%")
  },
  photo : {
    position : "absolute",
    top : 80,
    left : 25
  },
  document : {
    position : "absolute",
    right : 25,
    top : 80
  },
});