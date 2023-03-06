import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../pages/Landing/index.js';
import Register from '../pages/register/register';
import Lista from '../pages/listar/list';
import Taps from './Taps';


const {Navigator, Screen} = createNativeStackNavigator();

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='Landing' component={Landing}/>
                <Screen name='Register' component={Register}/>
                <Screen name='Lista' component={Lista}/>
                <Screen name='Taps' component={Taps}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;