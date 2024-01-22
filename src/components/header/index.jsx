import './style.scss'

function Header({src, alt, text=""}) {
    return (
        <header className='header'>
            <img src={src} alt="alt" className='header__img'/>
            <p className='header__text'>{text}</p>
        </header>
    )
}

export default Header