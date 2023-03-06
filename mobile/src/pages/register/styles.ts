import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5d5d5',
        
    },

    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    textTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
    },

    input: {
        width: '90%',
        height: 40,
        backgroundColor: '#f0f0f7',
        marginTop: 20,
        padding: 10,
        borderRadius: 8,
    },

    button: {
        marginTop: 30,
        width: '90%',
        height: 60,
        backgroundColor: '#1d31a5',
        borderRadius: 8, 
    },

    textbutton: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
        fontWeight: 'bold'
       
    }

    
});

export default styles;