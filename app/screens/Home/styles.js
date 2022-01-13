import React from 'react'
import { StyleSheet } from 'react-native'
import { responsiveHeight } from '../../config/responsive'

export default StyleSheet.create({
    container: {
        paddingHorizontal: responsiveHeight(2),
        flex: 1,

    },
    searchRow: {
        flexDirection: "row"
    },
    searchBox: {
        backgroundColor: "#F5F5F5",
        height: 46,
        borderRadius: 5,
        paddingHorizontal: 10,
        // width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: responsiveHeight(2),
        flex: 1
    },
    textInput: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        justifyContent: 'flex-start',
        fontFamily: 'Montserrat-Regular',
        color: 'black'

    },
    emptyContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }

})