import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4d94ff",
        justifyContent: 'center',
        padding: 30,
    },

    textTitle: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#FFFFFF",
    },

    banner: {
        width: '100%', 
        height: 300,
        resizeMode: 'contain'
    },

    text: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        
    },

    containerButtons: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    buttons: {
        backgroundColor: '#1d31a5',
        width: '45%',
        height: 90,
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonsText: {
        fontSize: 20,
        color: '#FFFFFF'
    }
});

export default styles;