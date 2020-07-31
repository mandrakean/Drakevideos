import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom'
import Logo from '../../assets/images/Logo.png';
import './Menu.css'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
    <nav className='Menu'>
        <Link to='/'>
            <img className='Logo' src={Logo} alt='Mdk Lab'></img>
        </Link>

        <Button as={Link} className='ButtonLink' to='/cadastro/video'>
            Novo vídeo
        </Button>
    </nav>
    );
}

export default Menu;