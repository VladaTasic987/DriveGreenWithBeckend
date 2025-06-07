import { Link } from 'react-router-dom';
import arrowBack from '../Images/ArrowBack.png';
import googleIcon from '../Images/GoogleIcon.png';
import notVision from '../Images/NotVision.png';
import vision from '../Images/Vision.png';
import { useUser } from '../Context';
import { useState } from 'react';

export function Login() {

const { visible, toggleVisible} = useUser();

    return (
        <div id='login-card'>

            <div className='login-header'>

                <img src={arrowBack} alt="arrow-back" />

                <Link
                    to="/"
                    className='link-to-wellcome'
                >Nazad</Link>
            </div>


            <div className='login-title'>
                <h1>Prijavi se</h1>
                <p>Ulogujte se na Vaš nalog</p>
            </div>

            <div className='separator'></div>

            <div className='login-inputs-email'>
                <label htmlFor="">
                    Email
                    <br />
                    <input
                        type="text"
                        placeholder='Vaša email adresa'
                    />
                </label>
            </div>

            <div className='login-inputs-password'>
                <label htmlFor="">
                    Lozinka
                    <br />
                    <input
                        type={visible ? "text" : "password"}
                        placeholder='Vaša lozinka'
                    />
                   {!visible ? <img 
                    onClick={toggleVisible}
                    className='not-vision'
                    src={notVision} 
                    alt="eye" />
                    :
                    <img 
                    onClick={toggleVisible}
                    className='not-vision'
                    src={vision} 
                    alt="eye" /> }
                </label>
            </div>

            <Link
                className='link-to-forgot'
                to="/forgot">
                <h4>Zaboravljena lozinka?</h4>
            </Link>


            <Link

            className='link-to-map'

            to="/mapStart"
            
            >Prijavi se
            </Link>

            <h4 className='new-user'>Novi Korisnik? 
                <Link 
                to="/register"
                className='link-to-register'>
                Kreiraj svoj nalog!
                </Link>
            </h4>

            <button className='login-google'>
                <img
                    src={googleIcon}
                    alt="googleicon" />
                Koristi Google nalog</button>

                {/* <p
                    className="warrning-pass"
                    >
                    Pogrešna lozinka ili email
                </p> */}
        </div>
    )

}
