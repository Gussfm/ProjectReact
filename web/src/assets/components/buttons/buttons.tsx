import React, {InputHTMLAttributes, FormEvent, useState, useEffect, useRef} from 'react';
import api from '../../../services/api';

import './buttons.css';

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label?: string;
    update?: Usuarios;
    
}

export interface Usuarios {
    id: number;
    nome_usuario: string;
    senha_usuario: string;
    telefone_usuario: string;
}


const Button: React.FC<ButtonProps> = ({label, update, name, ...rest}) => {
    


    return (
        <div className='buttons'>
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}   />
        </div>
    )
}

export default Button;