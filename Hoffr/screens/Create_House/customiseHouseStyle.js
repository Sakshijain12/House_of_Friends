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
    logo: {
        position: 'absolute',
        marginTop: hp('10%'),
        alignSelf: 'center'
    },
    back: {
        marginTop: hp('30%'),
        alignItems: 'center',
    },
    pic: {
        height: hp('20%'),
        width: hp('20%'),
        backgroundColor: '#75D1CB',
        marginTop: hp('2%'),
        marginBottom: hp('4%'),
        borderRadius: hp('10%'),
        color: '#fff'
    },
    name: {
        borderWidth: 2,
        borderStyle: 'solid',
        width: wp('80%'),
        borderRadius: 15,
        height: hp('5%'),
        padding: wp('3%'),
        marginTop: hp('2%'),
    },
    bton: {
        marginTop: hp('10%'),
        width: wp('70%'),
        //borderWidth: 2,
        backgroundColor: '#75D1CB',
        textAlign: 'center',
        //borderColor: '#fff',
        padding: hp('0.4%'),
        borderRadius: 15,
        fontSize: 20,
        color: '#fff',
        fontWeight : "700",
        shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.8,
    elevation: 15,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    },
    box: {
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 10,
        marginTop: hp('1%'),
        fontWeight: '500'
    },
    newChannel: {
        marginTop: hp('1%'),
        fontWeight: '500'
    },
    text: {
        fontStyle: 'italic',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 5,
        paddingLeft : 10,
        paddingRight : 10,
        elevation: 2,
        marginBottom : 5,
    },
    buttonClose: {
        backgroundColor: "#fff",
        borderColor : "#656565",
        borderWidth : 2
    },
    backButton : {
      backgroundColor : "#75D1CB",
      borderColor : "#fff"
    },
    textStyle: {
        color : "#656565",
        fontWeight: "600",
        textAlign: "center"
    },
    textingStyle: {
      color : "#fff",
      fontWeight: "bold",
      textAlign: "center"
  },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    ipt : {
        borderWidth : 2,
        borderColor : "black",
        width : wp("60%"),
        borderRadius : 15,
        paddingLeft : 10,
        marginBottom : 5
    }
});