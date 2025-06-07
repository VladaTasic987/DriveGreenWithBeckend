import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png'

export function Wellcome() {

    return (
        <div id='wellcome-card'>
            <img src={logo} alt="logo" />

            <p>Kreiraj svoj nalog!</p>

            {/*<button className='user-button'>*/}
                <Link
                    to="/register" className='link-to-register'
               >Korisnik</Link>
            {/*</button>*/}
            {/*<button className={'link-to-registerPartner-button'}>*/}
                <Link
                    to="/registerPartner" className='link-to-registerPartner'>
                    Partner</Link>
            {/*</button>*/}

            <h4>Postojeci nalog? &nbsp;
                <Link
                    to="/login" className='link-to-login'
                >Prijavi se!</Link>
            </h4>

        </div>
    )

}