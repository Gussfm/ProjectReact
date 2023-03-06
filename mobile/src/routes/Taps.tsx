import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Landing from '../pages/Landing/index.js';
import Register from '../pages/register/register';
import Lista from '../pages/listar/list';

const {Navigator, Screen} = createBottomTabNavigator();

function Taps(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Landing' component={Landing}/>
            <Screen name='Register' component={Register}/>
            <Screen name='Lista' component={Lista}/>
        </Navigator>

    );
    
}

export default Taps;