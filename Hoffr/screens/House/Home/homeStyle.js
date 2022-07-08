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
    marginLeft : wp('3%'),
    position : 'absolute',
  },
  logo:{
    //position : "absolute",
    marginTop : hp('5%'),
    height : hp('6%'),
    width : wp('35%'),
    marginLeft : wp("32%")
  },
  icon : {
    position : 'absolute',
    top : hp('13%'),
    right : wp('3%'),
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
  dp : {
    borderRadius : hp("9%"),
    height : hp("18%"),
    width : hp("18%"),
    margin : hp("1%"),
    borderColor : "green",
    borderWidth : 2
  },
  name : {
    alignSelf : 'center'
  },
  bton1 : {
    marginTop : hp('1%'),
    width : wp('90%'),
    borderWidth : 2,
    backgroundColor : '#75D1CB',
    borderColor : '#fff',
    paddingLeft : hp('4%'),
    padding : hp("0.4%"),
    borderRadius :15,
    justifyContent : "space-between",
    flexDirection : "row"
  },
  bton2 : {
    marginTop : hp('1%'),
    width : wp('90%'),
    borderWidth : 2,
    borderColor : '#75D1CB',
    paddingLeft: hp('4%'),
    padding : hp("0.4%"),
    borderRadius :15,
    justifyContent : "space-between",
    flexDirection : "row"
  },
  live : {
    fontSize : 20,
    fontWeight : "600",
    color : "#fff"
  },
  join : {
    fontSize : 20,
    color : "#656565",
    fontWeight : "600"
  },
});