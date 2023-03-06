import react, { useState } from 'react';
import styles from './styles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../components/PageHeader/header';
import api from '../../services/api';

function Register() {

    const [nome_usuario, setNome_usuario] = useState('');
    const [email_usuario, setEmail_usuario] = useState('');
    const [telefone_usuario, setTelefone_usuario] = useState('');
    const [senha_usuario, setSenha_usuario] = useState('');

    async function createUsers() {
        
        await api.post("/" ,{
                nome_usuario,
                email_usuario,
                telefone_usuario,
                senha_usuario
        }).then(() => {
            alert('Usuario Criado!');
    
        }).catch(() => {
            alert('Deu Rruim');
        })
    }

    return (
        <View style={styles.container}>
            <Header title='Cadastro de usuario'></Header>

        <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>Informe seus Dados</Text>

            <TextInput placeholder='Digite seu Nome' style={styles.input} value={nome_usuario}  onChangeText={text=>setNome_usuario(text)}/>
            <TextInput placeholder='Digite seu Email' style={styles.input} value={email_usuario} onChangeText={text=>setEmail_usuario(text)}/>
            <TextInput placeholder='Digite seu Telefone' style={styles.input} value={telefone_usuario} onChangeText={text=>setTelefone_usuario(text)}/>
            <TextInput placeholder='Digite seu Senha' style={styles.input}  value={senha_usuario} onChangeText={text=>setSenha_usuario(text)}/>
            
            
            
            <TouchableOpacity style={styles.button} onPress={()=>createUsers()}>
                <Text style={styles.textbutton}>Salvar</Text>
            </TouchableOpacity>

        </View>
           
            
        </View>
    );
}

export default Register;