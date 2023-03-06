import React, { FormEvent, useState, useEffect } from 'react';
import api from '../../../services/api';
import './list.css';
import Button from '../../../assets/components/buttons/buttons';

export interface Usuarios {
    id: number;
    nome_usuario: string;
    email_usuario: string;
    senha_usuario: string;
    telefone_usuario: string;
    
}


interface ListUsuarioProps {
    usuarios: Usuarios;
    children?: React.ReactNode;
    setOnEdit?: Usuarios;
}

const List: React.FC<ListUsuarioProps> = ({usuarios, setOnEdit}) => {

    const [nome_usuario, setNome_usuario] = useState('');
    const [email_usuario, setEmail_usuario] = useState('');
    const [telefone_usuario, setTelefone_usuario] = useState('');
    const [senha_usuario, setSenha_usuario] = useState('');
    
    
    async function userUpdate(id: number) {
        
        await api.put("/" + id ,{
            
                nome_usuario,
                senha_usuario,
                telefone_usuario,
                id,
            
        }).then(() => {
            alert('Usuario atualizado!');
            console.log(setNome_usuario);
            window.location.reload();
        })
    }



    

    async function userDelete(id: number){
        await api.delete("/" + id, {params: {id }}).then(() =>{

            alert('Cadastro Deletado com sucesso!');
            window.location.reload();
        })
    }

    

    
    return(
            
        <header id='list'>

            <form >
                <table>
                    
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Senha</td>
                                <td>Telefone</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{usuarios.nome_usuario}</td>
                                <td>{usuarios.senha_usuario}</td>
                                <td>{usuarios.telefone_usuario}</td>
                            </tr>
                            <tr>
                                <td><input type="text" name='nome_usuario' value={nome_usuario} onChange={(e) => {setNome_usuario(e.target.value)}} /></td>
                                <td><input type="text" name='senha_usuario' value={senha_usuario} onChange={(e) => {setSenha_usuario(e.target.value)}} /></td>
                                <td><input type="text" name='telefone_usuario' value={telefone_usuario} onChange={(e) => {setTelefone_usuario(e.target.value)}}/></td>
                            </tr>
                            
                        </tbody>
                        
                     
                </table>

                <button type='submit' onClick={() => userUpdate(usuarios.id)}>Update</button>
                <button type='button' onClick={() => userDelete(usuarios.id)}>Delete</button>
            </form>    

                
                

            </header>
      
        

            
            
             
        
    );
}

export default List;