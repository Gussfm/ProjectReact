import React from 'react';
import { Link  } from 'react-router-dom';
import './stylesheader.css'

import backIcon from '../../image/back.svg';

interface HeaderProps {
    title: string;
    children: React.ReactNode;
}


const Header: React.FC<HeaderProps> = (props) => {
    return(
        <header className='page-header'>
            <div className='top-bar'>
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
            </div>

            <div className='header-main'>
                <strong>{props.title}</strong>

                {props.children}
            </div>
        </header>
    );
}

export default Header;