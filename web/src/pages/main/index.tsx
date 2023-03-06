import React, { FormEvent, useState, useEffect } from 'react';
import Header from '../../assets/components/header/pageheader';
import Button from '../../assets/components/buttons/buttons';
import List, {Usuarios} from '../../assets/components/datalist/list';

import './styles.css';
import api from '../../services/api';





function Main() {
    //Lista de Usuarios
    const[usuarios, setUsuarios] = useState([]);

    async function getUsuarios() {
        const res = await api.get("/" ,{params:{}});
        setUsuarios(res.data);
    }
    useEffect(() => {
        getUsuarios();
    }, [setUsuarios]);

    //Criar Usuario
    const [nome_usuario, setNome_usuario] = useState('');
    const [email_usuario, setEmail_usuario] = useState('');
    const [telefone_usuario, setTelefone_usuario] = useState('');
    const [senha_usuario, setSenha_usuario] = useState('');

    function createUsers(e: FormEvent) {
        e.preventDefault();

        api.post("/", 
            {nome_usuario,
            email_usuario,
            telefone_usuario,
            senha_usuario,
        }).then(() => {
            alert('Novo Cadastro Realizado com sucesso!');
            window.location.reload();
        }).catch(() => {
            alert('Erro no cadastro, verifique as informações.');
        })
        
    }

    const [nome_usuarioSearch, setNome_usuarioSearch] = useState('');

    async function searchUsers(e: FormEvent) {
        e.preventDefault();
        const res = await api.get("/" + nome_usuario, {params: {nome_usuarioSearch}});
        console.log(res.data);
    }
    
    
    

    return(
        <div className='container' id='page-main'>
            <Header title="Aqui se encontra os dados cadastrados">
                
                
                   
               
                
            </Header>
            
            <main>
                <form className='create-usuarios' onSubmit={createUsers}>
                    <Button name='nome_usuarios' label='Nome'  value={nome_usuario} onChange={(e) => {setNome_usuario(e.target.value)}} />
                    <Button name='email_usuarios' label='Email' value={email_usuario} onChange={(e) => {setEmail_usuario(e.target.value)}}/>
                    <Button name='senha_usuarios' label='Senha'value={senha_usuario} onChange={(e) => {setSenha_usuario(e.target.value)}}/>
                    <Button name='telefone_usuarios' label='Telefone' type="tel" value={telefone_usuario} onChange={(e) => {setTelefone_usuario(e.target.value)}}/>
                            
                    <button type='submit'>Salvar</button>
                </form>
                
                
                
                {usuarios.map((usuarios: Usuarios) =>{
                    return <List key={usuarios.id} usuarios={usuarios} ></List>
                    
                })}
                
                
                    
                

                    
                    
                
                
                
                
            </main>
            
        </div>
    )
}

export default Main;