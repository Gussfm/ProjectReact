import React, {useState} from "react";
import styles from "./styles";
import { BorderlessButton } from "react-native-gesture-handler";
import { View, Text, Button, TextInput,TouchableOpacity, ScrollView, Image } from "react-native";

import api from "../../services/api";

export interface Usuarios {
    id: number;
    nome_usuario: string;
    email_usuario: string;
    senha_usuario: string;
    telefone_usuario: string;
    
}

interface itemProps {
    usuarios: Usuarios;
    children?: React.ReactNode;
    setOnEdit?: Usuarios;
}

const Item: React.FC<itemProps> = ({usuarios}) =>{

    const [visible, setVisible] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
    }


    async function userDelete(id: number){
        await api.delete("/" + id, {params: {id }}).then(() =>{

            alert('Cadastro Deletado com sucesso!');
            window.location.reload();
        })
    }

    const [nome_usuario, setNome_usuario] = useState('');
    const [email_usuario, setEmail_usuario] = useState('');
    const [telefone_usuario, setTelefone_usuario] = useState('');
    const [senha_usuario, setSenha_usuario] = useState('');

    async function userUpdate(id: number) {
        
        await api.put("/" + id ,{
            
                nome_usuario,
                email_usuario,
                senha_usuario,
                telefone_usuario,
                id,
            
        }).then(() => {
            alert('Usuario atualizado!');
            window.location.reload();
        })
    }

    return(
        <ScrollView style={styles.container}>
            <Text>Dados:</Text>
            <View style={styles.dataBase}>
                <Text style={styles.text}>{usuarios.nome_usuario}</Text>
                <Text style={styles.text}>{usuarios.email_usuario}</Text>
               
                <Text style={styles.text}>{usuarios.telefone_usuario}</Text>
                <Text style={styles.text}>{usuarios.senha_usuario}</Text>
                
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => userDelete(usuarios.id)} >
                        <Text style={styles.textButton}>Excluir</Text>
                    </TouchableOpacity>

                
            </View>

            <Button title="Mais Info" onPress={handleToggleVisible}></Button>


            {visible && (
                <View style={styles.dataBase}>
                    <TextInput placeholder="Nome" style={styles.insertText} value={nome_usuario} onChangeText={text =>setNome_usuario(text)}></TextInput>
                    <TextInput placeholder="Email" style={styles.insertText} value={email_usuario} onChangeText={text =>setEmail_usuario(text)}></TextInput>
                    <TextInput placeholder="Telefone" style={styles.insertText} value={telefone_usuario} onChangeText={text =>setTelefone_usuario(text)}></TextInput>
                    <TextInput placeholder="Senha" style={styles.insertText} value={senha_usuario} onChangeText={text =>setSenha_usuario(text)}></TextInput>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => userUpdate(usuarios.id)}>
                        <Text style={styles.textButton}>Atualizar</Text>
                    </TouchableOpacity>
                
                </View>

            )}

            
        </ScrollView>
    );
}

export default Item;