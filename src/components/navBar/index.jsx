import Logo from '../../assets/LOGO.png'
import LogoSmall from '../../assets/Logo-small.png'
import { NavLink } from "react-router-dom";
import './style.scss'

function NavBar() {
    return (
        <nav className='nav'>
        <picture>
            <source media="(max-width: 996px)" srcSet={LogoSmall} />
            <img src={Logo} alt="logo Kasa" />
        </picture>

        <ul className='nav__list'>
            <li><NavLink to="/" className='nav__list__link'>Accueil</NavLink></li>
            <li><NavLink to="/about" className='nav__list__link'>A Propos</NavLink></li>
        </ul>
        </nav>
    )
}

export default NavBar