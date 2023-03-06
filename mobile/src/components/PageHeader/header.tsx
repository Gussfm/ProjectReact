import React from "react";
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles";
import backIcon from '../../assets/seta-esquerda.png';
import {useNavigation} from '@react-navigation/native'

interface HeaderProps {
    title: string;
}



const Header:React.FC<HeaderProps> = ({title}) => {

    const {goBack} = useNavigation();

    function goToLanding(){
        goBack();
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={goToLanding}>
                    <Image source={backIcon} resizeMode="contain"></Image>
                </BorderlessButton>
            </View>

            <Text style={styles.title}>{title}</Text>
        </View>
    );
    
};

export default Header;