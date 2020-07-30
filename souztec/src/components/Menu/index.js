import React from 'react';
import Logo from '../../assets/img/Logo.png'
import Button from '../Button';
// import ButtonLink from './components';
import './Menu.css'

function Menu(){
    return(
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo"/>
      </a>

      <Button className="ButtonLink" as="a" href="/">
         Novo video
      </Button>
    </nav>
    )
}

export default Menu;