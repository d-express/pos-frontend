import React from 'react';
import LogoCliente from '../assets/static/logo-pizza.png';
import Logo from '../assets/static/dexpress.png';
import '../assets/style/pages/login.scss';

const Login = () => {
  return (
    <section className='Login'>
      <div className='Login__container'>
        <div className='Login__container__logoCliente'>
          <img src={LogoCliente} alt='Logo Cliente' />
        </div>
        <div className='Login__container__form'>
          <div className='Login__container__form__logo'>
            <img src={Logo} alt='Logo' />
          </div>
          <div className='Login__container__form__title'>
            <h2>Iniciar Sesión</h2>
          </div>
          <form>
            <div className='FormContainer'>
              <small className='FormLabel'>Email</small>
              <input className='FormInput' type='email' />
            </div>
            <div className='FormContainer'>
              <small className='FormLabel'>Contraseña</small>
              <input className='FormInput' type='password' />
            </div>
            <button className='boton boton-primario' type='submit'>Inciar Sesión</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
