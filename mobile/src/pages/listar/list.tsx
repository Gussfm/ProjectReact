import React, {useState, useEffect} from "react";
import {View, ScrollView} from 'react-native';
import styles from './styles';
import Header from "../../components/PageHeader/header";
import Item, { Usuarios } from "../../components/Itens/itens";
import api from "../../services/api";

function Lista() {
    const[usuarios, setUsuarios] = useState([]);

    async function getUsuarios() {
        const res = await api.get("/" ,{params:{}});
        setUsuarios(res.data);
    }
    useEffect(() => {
        getUsuarios();
    }, [setUsuarios]);
    
    return(
        <View style={styles.container}>
            <Header title="Lista de Cadastrados"></Header>
        
            <ScrollView>
                {usuarios.map((usuarios : Usuarios)=>{
                    return <Item usuarios={usuarios}></Item>
                })}
                
                
            </ScrollView>
            
        </View>

    );
}

export default Lista;