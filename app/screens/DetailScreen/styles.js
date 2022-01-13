import React from "react";
import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "../../config/responsive";

export default StyleSheet.create({
    textStyle: {
        fontSize: responsiveFontSize(1.55),
        fontFamily: 'Montserrat-Regular',
        color: "black"
    },
    rightView: {
        flex: 3,
        paddingLeft: responsiveHeight(1)
    },
    smallText: {
        fontSize: responsiveFontSize(1.3),
        fontFamily: 'Montserrat-Regular',
        marginTop: responsiveHeight(1),
        color: "black"

    },
    labelText: {
        fontSize: responsiveFontSize(1.25),
        fontFamily: 'Montserrat-Regular',
        marginTop: responsiveHeight(1),
        color: "black"


    },
    topText: {
        fontSize: responsiveFontSize(1.4),
        fontFamily: 'Montserrat-SemiBold',
        color: 'white'

    },
    myStarStyle: {
        color: '#FFD700',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    }
})