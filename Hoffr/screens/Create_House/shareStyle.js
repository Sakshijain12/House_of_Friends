import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    top: {
        flexDirection: 'row'
    },
    groupPic: {
        width: hp('5%'),
        height: hp('5%'),
        backgroundColor: '#F9C460',
        borderRadius: hp('2.5%'),
        marginTop: hp('5%'),
        marginLeft: wp('-25%'),
        position: 'absolute',
    },
    img: {
        height: hp("100%"),
        width: wp("100%"),
        //top : hp('1%')
    },
    logo: {
        marginTop: hp('5%'),
        height: hp('6%'),
        width: wp('35%'),
    },
    icon: {
        position: 'absolute',
        top: hp('13%'),
        right: wp('-28%'),
        color: '#667080'
    },
    back: {
        alignItems: 'center',
        borderTopWidth: 1,
        width: width,
        marginTop: hp('1%'),
        top : hp('-1%')
    },
    house: {
        marginTop: hp('4%'),
        fontWeight: '700',
        fontSize: 20,
        color: '#656565'
    },
    pic: {
        height: hp('20%'),
        width: hp('20%'),
        backgroundColor: '#75D1CB',
        marginTop: hp('2%'),
        marginBottom: hp('5%'),
        borderRadius: hp('10%'),
        borderWidth: 2,
        borderColor: '#656565'
    },
    member: {
        color: "#656565",
        fontSize: 16
    },
    invite: {
        marginTop: 20,
        fontWeight: "bold",
        color: "#656565",
        marginBottom: 30,
        fontSize: 18
    },
    bottom: {
        width: wp('70%'),
        //borderWidth: 2,
        backgroundColor: '#75D1CB',
        //borderColor: '#fff',
        padding: hp('0.4%'),
        borderRadius: 15,
        fontSize: 20,
        flexDirection : "row",
        alignItems : "center",
        shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.8,
    elevation: 15,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    },
    bton : {
        color : "#fff",
        fontWeight : "700",
        fontSize : 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 2
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flexDirection : "row"
    },
    button: {
        elevation: 0.001,
        margin: 5,
    },
    
    textStyle: {
        fontWeight: "600",
        textAlign: "center",
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