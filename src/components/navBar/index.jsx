import Logo from '../../assets/LOGO.png'
import { NavLink } from "react-router-dom";
import './NavBar.scss'

function NavBar() {
    return (
        <nav className='nav'>
        <img src={Logo} alt="logo Kasa" />
        <ul className='nav__list'>
            <li><NavLink to="/" className='nav__list__link'>Accueil</NavLink></li>
            <li><NavLink to="/about" className='nav__list__link'>A Propos</NavLink></li>
        </ul>
        </nav>
    )
}

export default NavBar