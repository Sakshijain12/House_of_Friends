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
    //justifyContent :"space-between"
  },
  groupPic : {
    width : hp('5%'),
    height : hp('5%'),
    backgroundColor : '#F9C460',
    borderRadius : hp('2.5%'),
    marginTop : hp('5%'),
    marginLeft : wp('3%'),
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
    left : wp("85%"),
    height : hp("7%"),
    width : hp("5%")
  },
  img : {
    height : hp("92%"),
    width : wp("100%"),
  },
  back:{
    //borderTopWidth : 0.5,
    width : width,
    marginTop : hp('1%'),
    top : hp('-1%')
  },
  heading : {
    flexDirection : "row",
    justifyContent : "space-between",
    padding : 10,
    borderWidth : 1,
  },
  vc : {
    borderWidth : 1,
    borderRadius : 16,
    backgroundColor : "green",
    padding : 1,
    borderColor : "#fff",
    height : 32,
    width : 32,
    textAlign : "center"
  },
  ipt : {
    borderWidth : 1,
    borderRadius : 15,
    borderColor : "#656565",
    paddingLeft : 10,
    padding : 5,
    height : 35,
    position : "absolute",
    width : wp("85%"),
    top : hp("80%"),
    marginLeft : 10,
    flexDirection : "row",
  },
  attach : {
    left : wp("49%")
  },
  sent : {
    left : wp("51%")
  }
});