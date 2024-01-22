import './style.scss'
import WhiteLogo from '../../assets/White-Logo.png'

function Footer() {
    return (
        <footer className='footer'>
            <img src={WhiteLogo} alt='logo' />
            <p>© 2022 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer