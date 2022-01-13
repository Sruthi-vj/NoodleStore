//Navigation
import React from 'react'
import { View, Text } from 'react-native'
import Home from "../screens/Home";
import DetailScreen from "../screens/DetailScreen";
import Loading from '../screens/Loading';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';


const RootStack = createNativeStackNavigator()
function Navigator() {

    return (
        <NavigationContainer >
            <RootStack.Navigator
                mode="modal"
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Home"
            >
                <RootStack.Screen name="Loading" component={Loading} />

                <RootStack.Screen name="Home" component={Home} />
                <RootStack.Screen name="DetailScreen" component={DetailScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
export default Navigator;