import React from "react";
import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "../../config/responsive";

export default StyleSheet.create({
    textStyle: {
        fontSize: responsiveFontSize(1.4),
        fontFamily: 'Montserrat-Regular',
        color: "black"
    },
    rightView: {
        flex: 3,
        paddingLeft: responsiveHeight(1)
    },
    starStyle: {
        fontSize: responsiveFontSize(1.3),
        paddingLeft: responsiveHeight(0.5),
        fontFamily: 'Montserrat-Regular',
        color: 'black'


    },
    smallText: {
        fontSize: responsiveFontSize(1.3),
        fontFamily: 'Montserrat-Regular',
        color: "black"

    },
    labelText: {
        fontSize: responsiveFontSize(1.25),
        fontFamily: 'Montserrat-Regular',
        color: "black"

    },
})