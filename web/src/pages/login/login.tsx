import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import Header from "../../assets/components/header/pageheader";
import Button from "../../assets/components/buttons/buttons";
import api from "../../services/api";
import './login.css';

function Login() {
    const navigation = useNavigate();
    const [email_usuario, setEmail_usuario] = useState('');
    const [senha_usuario, setSenha_usuario] = useState('');

    async function Login() {
        await api.post("/login", {
            email_usuario,
            senha_usuario
        }).then(() =>{
            alert('Login efetuado com sucesso');
            navigation('/main');
        }).catch(() => {
            alert('Login Errado');
        })
    }

    return(
        <div className="container" id="page-login" >
           <Header title="Insira Seus Dados de Login">
           </Header>
           <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Button name="email_usuario" label="Email:" value={email_usuario} onChange={(e)=>{setEmail_usuario(e.target.value)}}/>
                    <Button name="senha_usuario" label="Senha:" value={senha_usuario} onChange={(e)=>{setSenha_usuario(e.target.value)}}/>
                </fieldset>
                <div className="button-login">
                    <button type="button" onClick={Login}>
                        Entrar
                    </button>
                </div>
                
           </main>
        </div>
    )
}

export default Login;