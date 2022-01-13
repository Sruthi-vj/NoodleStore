import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImageLoad from 'react-native-image-placeholder';
import { responsiveHeight, responsiveFontSize } from '../../config/responsive';
import styles from './styles';
import Stars from 'react-native-stars';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
    }
    render() {
        const data = this.props.route?.params
        if (data?.topTen != "NaN" || data?.topTen != "Nan")
            var words = data?.topTen.split(' ')
        return (
            <SafeAreaView edges={['left', 'right']} style={{}}>
                <View style={{
                }}>
                    <View style={{
                        height: responsiveHeight(40),
                    }}>
                        <ImageLoad
                            source={{
                                uri: this.props.route?.params?.image
                            }}
                            style={{
                                height: responsiveHeight(40),
                                width: '100%',
                            }}
                            placeholderSource=
                            {require('../../assets/images/placeholder.png')}

                        />
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#00000030',
                                position: 'absolute',
                            }}
                        />
                        {data?.topTen != "NaN" ?
                            <View style={{

                                backgroundColor: '#ffa500',
                                width: responsiveHeight(8),
                                height: responsiveHeight(8),
                                position: "absolute",
                                bottom: responsiveHeight(-3),

                                borderRadius: responsiveHeight(8),
                                right: responsiveHeight(2),
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={styles.topText}>
                                    {words[1]}
                                </Text>
                                <Text style={{
                                    fontSize: responsiveFontSize(1.3),
                                    fontFamily: 'Montserrat-Regular',
                                    color: 'white'
                                }}>in</Text>
                                <Text style={styles.topText}>
                                    {words[0]}
                                </Text>
                            </View> : null}
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{
                            position: "absolute", top: responsiveHeight(3),
                            left: responsiveHeight(2)
                        }}>
                        <Icon
                            name="arrow-left"
                            size={20}
                            // color={"black"}
                            enableRTL={true}
                        />
                    </TouchableOpacity>
                    <View style={{
                        paddingHorizontal: responsiveHeight(2),
                        marginTop: responsiveHeight(3)
                    }}>
                        <Text style={styles.labelText}>Brand</Text>
                        <Text style={styles.textStyle}>{data?.brand}</Text>
                        <Text style={styles.labelText}>Variety</Text>
                        <Text style={styles.textStyle}
                            numberOfLines={2}>{data?.variety}</Text>

                        <Text style={styles.labelText}>Style</Text>
                        <Text style={styles.textStyle}>{data?.style != "Nan" && data?.style != "NaN" ? data?.style : "Not available"}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Text style={styles.labelText}>Country</Text>
                                <Text style={styles.textStyle}>{data?.country}</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Text style={[styles.labelText, { alignSelf: 'flex-end' }]}>Rating</Text>
                                <View style={{
                                    alignItems: 'flex-end',
                                }}>
                                    {data?.stars != "NaN" ?
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={styles.textStyle}>{data?.stars}</Text>
                                            <Stars
                                                display={data?.stars}
                                                // spacing={8}
                                                count={5}
                                                starSize={35}
                                                fullStar={<Icon1 name={'star'} style={[styles.myStarStyle]} />}
                                                emptyStar={<Icon1 name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                                halfStar={<Icon1 name={'star-half'} style={[styles.myStarStyle]} />}

                                            />
                                        </View> :
                                        <Text style={styles.textStyle}>Not Available</Text>}
                                </View>

                            </View>

                        </View>
                    </View>


                </View>
            </SafeAreaView >
        )
    }
}