import arrowBack from "../Images/ArrowBack.png";
import googleIcon from "../Images/GoogleIcon.png";
import {Link} from "react-router-dom";
import {useUser} from "../Context.jsx";
import notVision from "../Images/NotVision.png";
import vision from "../Images/Vision.png";
import {useState} from "react";
import passValidationRed from "../Images/PasswordValidationRedLine.png";
import passValidationGreen from "../Images/PasswordValidationGreenLine.png";

export function RegisterPartner() {

    const { visible, toggleVisible } = useUser();

    

    return (

        <div id="register-partner-card">

            <div className='register-header'>
                <img src={arrowBack} alt="arroe-back" />
                <Link
                    to="/"
                    className='link-to-wellcome'
                >Nazad</Link>
            </div>

            <div className='register-title'>
                <h1>Registruj se</h1>
            </div>

            <div className='name-input'>
                <label htmlFor="">
                    Vaše ime / ime Kompanije
                    <br />
                    <input
                        type="text"
                        placeholder='Upišite Vaše ime ili ime Kompanije...'
                    />
                </label>
            </div>

            <div className='email-input'>
                <label htmlFor="">
                    Email
                    <br />
                    <input
                        type="text"
                        placeholder='Upišite Vaš email...'
                    />
                </label>
            </div>

            <div className= 'password-input--check'>
                <label htmlFor="">
                    Lozinka
                    <br/>
                    <input
                        type={visible ? "text" : "password"}
                        placeholder='Upisite Vasu lozinku...'
                    />
                {!visible ? <img
                        onClick={toggleVisible}
                        className='not-vision'
                        src={notVision}
                        alt="eye" />
                    :
                    <img
                        onClick={toggleVisible}
                        className= 'not-vision'
                        src={vision}
                        alt="eye" />}

                </label>
            </div>
            <div className='location-input'>
                <label htmlFor="">
                    Geolokacija
                    <br />
                    <input
                        type="text"
                        placeholder='Upišite Vašu tačnu geolokaciju'
                    />
                </label>
            </div>

            <div className='dropdown-list'>

                <label htmlFor="">
                    Količina punjača 
                    <br />
                    <select  id="Punjači">

                        <option value="1 punjač">1 punjač</option>
                        <option value="2 punjača">2 punjač</option>
                        <option value="3 punjača">3 punjač</option>
                    </select>
                </label>


                <label htmlFor="">
                    KW
                    <br />
                    <select  id="Kw">

                        <option value="11">11</option>
                        <option value="22">22</option>
                        <option value="150">150</option>
                        <option value="250">250</option>
                    </select>
                </label>

                <label htmlFor="">
                    Način naplate
                    <br />
                    <select id="Naplata">
                        <option value="0">Besplatno</option>
                        <option value="100">100 rsd/min</option>
                        <option value="120">120 rsd/min</option>
                        <option value="130">130 rsd/min</option>
                    </select>
                </label>

            </div>

            <div className={'checkbox-input'}>
                <input type="checkbox" id=""
                />
                <span className={'checkbox-span'}>  &nbsp;Saglasan sam sa kupovinom i opštim uslovima poslovanja</span>
            </div>

                {/*<button className={'login-button'}>*/}
                <Link
                to="/mapStart"
                className= "link-to-map" 
                >
                    Registruj se
                </Link>
                {/*</button>*/}
                    <h4>Postojeći korisnik? &nbsp;
                        <Link
                            to="/login" className='link-to-login'
                        >Prijavi se!</Link>
                    </h4>

            <button className={'login-google'}>
                <img src={googleIcon} alt="googleIcon" />
                Koristi Google nalog
            </button>

            {/*provera lozinke i email-a*/}
            {/* <p className='existing-account' >Postojeci nalog. Ulogujte se</p>  */}


            
                {/* <div className='pass-validation-container'>
                    <img
                        className='red-line'
                        src={passValidationRed} alt="pass-val" />
                    <p className='pass-val-text'>Lozinka je preslaba. Koristite 8 karaktera, jedno veliko slovo i jedan specijalan karakter</p>
                </div>
             
                <div id='pas-container-green'>
                    <img
                        className='green-line'
                        src={passValidationGreen} alt="green-line" />
                    <p className='green-text'>Jaka lozinka</p>
                </div> */}
            



        </div>
    )

}