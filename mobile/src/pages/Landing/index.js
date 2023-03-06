import React from "react";
import { View, Image, Text, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import AppStack from "../../routes/AppStack";
import landingImg from '../../assets/landingImg.png';
import {useNavigation} from '@react-navigation/native'
import Register from "../register/register";


const Landing = ( {navigation} ) => {
    const navigateToRegister = () => {
        navigation.push('Taps');
    };

    const navigateToList = () => {
        navigation.push('Taps');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>ProTracer</Text>
            <Image style= {styles.banner}source={require('../../assets/landingImg.png')} />
            <Text style={styles.text}>
                Faça seu cadastro ou insira login.
            </Text>
            <View style={styles.containerButtons}>

                <TouchableOpacity onPress={navigateToList} style={styles.buttons}>
                    <Text style={styles.buttonsText}>Listagem</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateToRegister} style={styles.buttons}>
                    <Text style={styles.buttonsText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    );
}




export default Landing;