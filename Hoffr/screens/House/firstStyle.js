import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  img : {
    height : hp("105%"),
    width : wp("100%"),
    top : 30,
  },
  logo:{
    marginTop : hp('10%'),
    alignItems : "center"
  },
  back:{
    marginTop : hp('-3%'),
    alignItems : 'center',
  },
  question : {
    color : '#606060',
    fontWeight : '700',
    fontSize : 20,
    margin : wp('15%'),
    marginBottom : wp('10%'),
    textAlign : 'center',
  },
  set : {
    alignItems : 'center',
    
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
    fontWeight : '700',
    fontSize : 24
  },
  plus : {
    padding : 10,
    backgroundColor : "#75D1CB",
    marginTop : hp('2%'),
    borderRadius : hp("4%"),
    height : hp('8%'),
    width : hp('8%'),
    textAlign : 'center',
    left : wp('70%')
  },
  add : {
    flexDirection : 'row',
    marginTop : hp("4%"),
  },
  new1 : {
    borderStyle : "solid",
    borderColor : "#75D1CB",
    borderRadius : 15,
    //backgroundColor : "#fff",
    borderWidth : 2,
    padding : wp("2%"),
    marginRight : wp("5%"),
    fontSize : 20,
    fontWeight : '700',
    color : "#656565",
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.2,
    elevation: 1,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  new2 : {
    borderStyle : "solid",
    borderColor : "#75D1CB",
    borderRadius : 15,
    //backgroundColor : "#fff",
    borderWidth : 2,
    padding : wp("2%"),
    marginLeft : wp("3%"),
    fontSize : 20,
    fontWeight : '700',
    color : "#656565",
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.2,
    elevation: 1,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },

});