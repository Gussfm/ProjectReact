import React from "react";

import { Link } from "react-router-dom";
import './styles.css';
import landingImg from '../../assets/image/landingImg.png';

function Landing() {
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h1>ProTracer</h1>
                    <p>Uma escola de programação alinhada ao seu desenvolvimento. </p>
                </div>

                <img src={landingImg} alt="Plataforma de Estudos" className="landing-image"/>

                <div className="button-container">
                    <Link to="/login" className="login">
                        Entrar
                    </Link>
                    <Link to="/register" className="register">
                        Cadastrar
                    </Link>
                </div>

                <span className="connections">
                    Projeto estudantil
                </span>
            </div>
        </div>
    )
}

export default Landing;