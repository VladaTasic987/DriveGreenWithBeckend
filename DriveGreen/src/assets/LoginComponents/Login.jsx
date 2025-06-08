import { Link } from 'react-router-dom';
import arrowBack from '../Images/ArrowBack.png';
import googleIcon from '../Images/GoogleIcon.png';
import notVision from '../Images/NotVision.png';
import vision from '../Images/Vision.png';
import { useUser } from '../Context';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function Login() {

    const { visible, toggleVisible} = useUser();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitError, setSubmitError] = useState('');

  const onSubmit = (data) => {
    // Provera emaila i lozinke (primer)
    if (data.email !== 'test@example.com' || data.password !== '123456') {
      setSubmitError('Vaš email ili lozinka nije ispravna');
    } else {
      setSubmitError('');
      alert('Uspešno logovanje!');
    }
  };



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
                <label>Email:</label>
                <input
                {...register('email', { required: true })}
                type="email"
                />
                
                {errors.email && <p style={{ color: 'red' }}>Email je obavezan</p>}
                {submitError && <p style={{ color: 'red' }}>{submitError}</p>}
                
            </div>

            <div className='login-inputs-password'>
                <label>Lozinka:</label>
                <input
                {...register('password', { required: true })}
                type={visible ? "text" : "password"}
                />
                {errors.password && <p style={{ color: 'red' }}>Lozinka je obavezna</p>}
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

            <button 
            onClick={handleSubmit(onSubmit)}
            className='login-google'>
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
