import React, { FormEvent, useState } from "react";
import { useNavigate} from "react-router-dom";

import Header from "../../assets/components/header/pageheader";
import Button from "../../assets/components/buttons/buttons";
import './register.css';
import api from "../../services/api";

function Register() {
    const navigation = useNavigate();


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
            alert('Cadastro Realizado com sucesso!');
            navigation('/login');
        }).catch(() => {
            alert('Erro no cadastro, verifique as informações.');
        })
        
    }


    return(
        <div id="page-register" className="container">
            <Header title="Informe seus dados para cadastro!">

            </Header>
            <main>
                <form onSubmit={createUsers}>
                    <fieldset>
                        <legend>Dados de Cadastro</legend>
                        <Button name="nome_usuario" label="Nome Completo:" value={nome_usuario} onChange={(e) => {setNome_usuario(e.target.value)}}/>
                        <Button name="email_usuario" label="Email:" value={email_usuario} onChange={(e) => {setEmail_usuario(e.target.value)}}/>
                        <Button name="telefone_usuario" label="Telefone:" type="tel" value={telefone_usuario} onChange={(e) => {setTelefone_usuario(e.target.value)}}/>
                        <Button name="senha_usuario" label="Senha:" value={senha_usuario} onChange={(e) => {setSenha_usuario(e.target.value)}}/> 
                    </fieldset>

                    <div className="button-register">
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                    
                </form>
               

            </main>
        </div>
        
        
    )
}
export default Register;