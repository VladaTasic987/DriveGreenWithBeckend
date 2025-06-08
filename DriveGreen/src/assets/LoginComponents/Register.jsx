import arrowBack from '../Images/ArrowBack.png';
import { Link } from 'react-router-dom';
import notVision from '../Images/NotVision.png';
import vision from '../Images/Vision.png';
import googleIcon from '../Images/GoogleIcon.png'
import passValidationRed from '../Images/PasswordValidationRedLine.png';
import passValidationGreen from '../Images/PasswordValidationGreenLine.png';
import { useUser } from '../Context';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function Register() {

const { visible, toggleVisible} = useUser();

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Podaci iz forme:", data);
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
        <label>Ime i prezime</label>
        <input
          {...register("fullName", { required: "Ovo polje je obavezno" })}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>


    <div className='email-input'>
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: "Unesite email adresu" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>


    <div className='password-input'>
        <label>Lozinka</label>
        <input
          type={visible ? "text" : "password"}
          {...register("password", { required: "Unesite lozinku" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

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
        <label className='agree-text'>
          <input
            className='check-box'
            type="checkbox"
            {...register("terms", {
              required: "Morate prihvatiti uslove poslovanja",
            })}
          />
          &nbsp;Saglasan sam sa politikom i opstim uslovima poslovanja
        </label>
        {errors.terms && <p>{errors.terms.message}</p>}
      </div>


    
        <Link 
        to="/MapStart"
        className='link-to-map'
        >Registruj se</Link>

        <h4 className='existing-user'>Postojeci korisnik? 
        <Link
        to="/Login"
        className='link-to-login'
        >Prijavi se!</Link> 
        </h4>

        <button 
        className='register-google'
        onClick={handleSubmit(onSubmit)}
        >
            <img
                src={googleIcon}
                alt="googleicon" />
                Koristi Google nalog
        </button>
        
    
        {/* <p className='existing-account'>Postojeci nalog. Ulogujte se</p>  */}


        
    {/* <div className='pass-validation-container'>
        <img 
        className='red-line'
        src={passValidationRed} alt="pass-val" />
        <p className='pass-val-text'>Lozinka je preslaba. Koristite 8 karaktera, jedno veliko slovo i jedan specijalan karakter</p>
    </div> */}
     
    {/* <div id='pas-container-green'>
        <img 
        className='green-line'
        src={passValidationGreen} alt="green-line" />
        <p className='green-text'>Jaka lozinka</p>
    </div> */}


</div>

        

    )

}