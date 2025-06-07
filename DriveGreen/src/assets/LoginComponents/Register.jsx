import arrowBack from '../Images/ArrowBack.png';
import { Link } from 'react-router-dom';
import notVision from '../Images/NotVision.png';
import vision from '../Images/Vision.png';
import googleIcon from '../Images/GoogleIcon.png'
import passValidationRed from '../Images/PasswordValidationRedLine.png';
import passValidationGreen from '../Images/PasswordValidationGreenLine.png';
import { useUser } from '../Context';
import { useState } from 'react';

export function Register() {

const [isChecked, setIsChecked] = useState(false);

const { visible, toggleVisible, email, password, getEmail, getPassword, name, getName, registerUser, existingEmail, clearInputs} = useUser();

const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

const canRegister = 
    password.length >= 8 &&
    passwordRegex.test(password) &&
    !existingEmail &&
    isChecked &&
    name.length > 5
    ;

const handleCheckboxChange = () => {
    setIsChecked(prev => !prev);
  };

  

return (

<div id="register-card">

   <div className='register-header'>
        <img src={arrowBack} alt="arroe-back" />
        <Link 
        to="/"
        className='link-to-wellcome'
        >Nazad</Link>
    </div>  

    <div className='register-title'>
        <h1>Registruj se</h1>
        <h4>Kreiranje naloga</h4> 
    </div>       

    <div className='name-input'>
        <label htmlFor="">
            Ime i prezime
            <br />
            <input 
            onChange={(e) => getName(e)}
            value={name}
            type="text"
            placeholder='Upisite Vase ime i prezime...'
            />
        </label>
    </div> 

    <div className='email-input'>
        <label htmlFor="">
            Email
            <br />
            <input 
            value={email}
            onChange={(e) => getEmail(e)}
            type="text"
            placeholder='Upisite Vas email...'
            />
        </label>
    </div>

    <div className='password-input'>
        <label htmlFor="">
            Lozinka
            <br />
            <input 
            value={password}
            onChange={(e) => getPassword(e)}
            type={visible ? "text" : "password"}
            placeholder='Upisite Vasu lozinku...'
            />

            
        </label>


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
        alt="eye" />}
    </div>

    <div className='agree-container'>
    <input 
            type="checkbox" 
            className='check-box'
            checked={isChecked}
            onChange={handleCheckboxChange}
            />
    <p className='agree-text'>Saglasan sam sa politikom i opstim uslovima poslovanja</p>
    </div>


    
        <Link 
        to={canRegister ? "/MapStart" : ""}
        className={canRegister ? 'link-to-map' : "disabled-link-to-map"}
        onClick={()=> {if(canRegister) {
            registerUser()
        }
        clearInputs()
        }}
        >Registruj se</Link>

        <h4 className='existing-user'>Postojeci korisnik? 
        <Link
        to="/Login"
        className='link-to-login'
        onClick={clearInputs}
        >Prijavi se!</Link> 
        </h4>

        <button 
        className='register-google'
        >
            <img
                src={googleIcon}
                alt="googleicon" />
                Koristi Google nalog
        </button>
        
    
        {existingEmail ?<p className='existing-account'>Postojeci nalog. Ulogujte se</p> : null}


        {password && !passwordRegex.test(password) ? (
    <div className='pass-validation-container'>
        <img 
        className='red-line'
        src={passValidationRed} alt="pass-val" />
        <p className='pass-val-text'>Lozinka je preslaba. Koristite 8 karaktera, jedno veliko slovo i jedan specijalan karakter</p>
    </div>
) : passwordRegex.test(password) ? (
    <div id='pas-container-green'>
        <img 
        className='green-line'
        src={passValidationGreen} alt="green-line" />
        <p className='green-text'>Jaka lozinka</p>
    </div>
) : null}

</div>

        

    )

}