import arrowBack from '../Images/ArrowBack.png';
import { Link } from 'react-router-dom';
import { useUser } from '../Context';

export function ForgotPasswordEmail() {

    const {} = useUser();
    return (
        <div id="forgot-password-container">

            <div className="forgot-password-header">
                <img src={arrowBack} alt='arrow-back' />
                <Link
                    to="/login"
                    className='link-to-welcome'
                >
                    Nazad
                </Link>
            </div>

            <div className="forgot-title">
                <h1>Zaboravljena lozinka?</h1>
                <p>Unesite Vaš email radi verifikovanja,<br />a mi ćemo Vam poslati verifikacioni kod</p>
            </div>

            <div className="forgot-input-email">
                <label>
                    Email
                    <br />
                    <input
                        type="text"
                        placeholder='Upišite Vaš email...'
                    />
                </label>
            </div>


            <Link
                className= "send-code"
                to="/passwordCode"
                >
                Pošalji kod
            </Link>
        </div>
    )
}