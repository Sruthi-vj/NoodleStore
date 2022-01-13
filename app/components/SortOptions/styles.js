import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    contentFilterBottom: {
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingHorizontal: 20,
        backgroundColor: "white"
    },
    contentSwipeDown: {
        paddingTop: 10,
        alignItems: 'center',
    },
    lineSwipeDown: {
        width: 30,
        height: 2.5,
        backgroundColor: '#F5F5F5',
    },
    contentActionModalBottom: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomWidth: 1,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});
