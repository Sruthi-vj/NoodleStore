import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function Loading({ navigation }) {


    useEffect(() => {
        console.log(" GOING HPOME ....")
        // setTimeout(() => {
        navigation.navigate('Home')
        // console.log(" after 2500")
        // }, 2500)
    }, [])



    return (
        <View>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>
            <Text>hi this is Loading</Text>

        </View>
    )
}