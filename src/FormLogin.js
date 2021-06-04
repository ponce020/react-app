import React from 'react';
import './FormLogin.css';
import minerva from './images/minerva.png';

function FormLogin() {
    return (
        <div className='box'>
            <img className='image-login' src={minerva} alt=''/>
            <form className='datos'>
                <input placeholder={`Usuario?`}/>
                <input placeholder={`Contraseña?`}/>
                <button type='submit'>Ingresar</button>
            </form>
        </div>
    )
}

export default FormLogin
