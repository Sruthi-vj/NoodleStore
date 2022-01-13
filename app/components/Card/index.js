import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
import { responsiveHeight, responsiveFontSize } from '../../config/responsive';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Card(props) {
    const {
        brand,
        variety,
        style,
        country,
        stars,
        topTen,
        index,
        imageList,
        img,
        navigation
    } = props
    //check for Nan

    if (topTen != "NaN" || topTen != "Nan")
        var words = topTen.split(' ')
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', {
                brand: brand,
                variety: variety,
                image: imageList[index]?.Image,
                style: style,
                country: country,
                topTen: topTen,
                stars: stars
            })}
            style={{ flexDirection: 'row', marginBottom: responsiveHeight(2) }}>
            <View>
                {imageList[index]?.Image != undefined ?
                    <ImageLoad
                        source={{
                            uri:
                                //img?.Image
                                imageList[index]?.Image
                        }}
                        style={{
                            height: responsiveHeight(12),
                            width: responsiveHeight(12),
                            borderRadius: responsiveHeight(1),

                        }}
                        placeholderStyle={{
                            height: responsiveHeight(10),
                            width: responsiveHeight(10),
                            borderRadius: responsiveHeight(1),
                        }}
                        placeholderSource={require('../../assets/images/placeholder.png')}
                        borderRadius={responsiveHeight(1)}
                    /> :
                    <ImageLoad
                        source={require('../../assets/images/placeholder.png')}
                        style={{
                            height: responsiveHeight(10),
                            width: responsiveHeight(10),
                            borderRadius: responsiveHeight(1),

                        }}
                        placeholderStyle={{
                            height: responsiveHeight(10),
                            width: responsiveHeight(10),
                            borderRadius: responsiveHeight(1),
                        }}
                        placeholderSource={require('../../assets/images/placeholder.png')}
                        borderRadius={responsiveHeight(1)}
                    />}

            </View>
            <View style={styles.rightView}>
                <Text style={[styles.textStyle, { fontFamily: 'Montserrat-SemiBold' }]}>
                    {brand}</Text>
                <Text style={styles.textStyle}
                    numberOfLines={2}>
                    {variety}</Text>
                <Text style={styles.smallText}>
                    Style: {style != "Nan" && style != "NaN" ? style : "Not available"}</Text>
                <Text style={styles.smallText}>
                    Country: {country}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Icon name="star" size={10} color={"#FFD700"} solid />
                        <Text style={styles.starStyle}>{stars != "NaN" ? stars : "Not available"}</Text>

                    </View>
                    <Text style={styles.smallText}>
                        {topTen != "NaN" ?
                            words[1] + " in Top 10, " + words[0] : "Not available"}</Text>
                </View>



            </View>
        </TouchableOpacity>
    )
}