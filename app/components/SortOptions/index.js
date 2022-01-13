import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import styles from './styles'
import { responsiveHeight, responsiveFontSize } from '../../config/responsive';

export default function SortOptions(props) {
    const { options, hideMenuModal, sortOptionClicked, visible, selected } = props;

    return (
        <Modal
            isVisible={visible}
            onSwipeComplete={() => {
                hideMenuModal();
            }}
            swipeDirection={['down']}
            onRequestClose={() => {
                hideMenuModal();
            }}
            onBackdropPress={() => {
                hideMenuModal();
            }}
            style={styles.bottomModal}>

            <View style={{}}>
                <View
                    style={[
                        styles.contentFilterBottom,
                        {
                            //backgroundColor: "grey"
                        },
                    ]}>
                    <View style={styles.contentSwipeDown}>
                        <View style={styles.lineSwipeDown} />
                    </View>
                    {options.map((item, index) => (

                        <TouchableOpacity
                            key={item?.id}
                            style={[
                                styles.contentActionModalBottom,
                                { borderBottomColor: "#F5F5F5", justifyContent: "space-between" },
                            ]}
                            onPress={() => {
                                sortOptionClicked(item.id, item);
                            }}>

                            <Text body2 style={{
                                paddingRight: responsiveHeight(2),
                                fontFamily: 'Montserrat-Regular',
                                fontSize: responsiveFontSize(1.5),
                                color: 'black'
                            }}>
                                {item?.text}
                            </Text>
                            {selected == item?.value &&
                                <View style={{
                                    height: responsiveHeight(1),
                                    width: responsiveHeight(1), backgroundColor: '#25b361',
                                    borderRadius: responsiveHeight(1),
                                    right: 1,
                                    alignSelf: 'center',
                                }} />
                            }
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

        </Modal>
    )
}
