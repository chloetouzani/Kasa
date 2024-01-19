import HomeHeader from '../../assets/Home-Header.png'
import './style.scss'

function Header() {
    return (
        <header className='header'>
            <img src={HomeHeader} alt="falaises en bord de mer" className='header__img'/>
            <p className='header__text'>Chez vous, partout et ailleurs</p>
        </header>
    )
}

export default Header