import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 8,
        marginBottom: 20,
        overflow: 'hidden',
        
    },

    dataBase: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        
        
    },

    text: {
        fontSize: 15,
        marginBottom: 15
    },

    

    buttonContainer: {
        backgroundColor: '#1d31a5',
        borderRadius: 8,
        width: 150,
        height: 40,
        justifyContent: 'center',
    },

    textButton: {
        
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
        
    },

    

    insertText: {
        backgroundColor: '#f0f0f7',
        color: '#000000',
        width: 150,
        height: 35,
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 10,
    },

});

export default styles;