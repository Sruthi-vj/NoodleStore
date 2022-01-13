//App
import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import Navigator from './navigation'

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { responsiveHeight } from './config/responsive';
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate
                loading={
                    <ActivityIndicator
                        size="large"
                        color="grey"
                        style={{ marginTop: responsiveHeight(55) }}
                    />
                }
                persistor={persistor}>
                <Navigator />
            </PersistGate>
        </Provider>
    )
}