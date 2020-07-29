import React from 'react';
import Logo from '../../assets/img/LogoMain.png'
import './menu.css'
import Button from '../Button/'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/"><img className="Logo" src={Logo} alt="Aluraflix logo"/></a>

            <Button as="a" href="/"  className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;