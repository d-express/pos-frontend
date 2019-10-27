import React from 'react';
import LogoCliente from '../assets/static/logo-pizza.png';
import Logo from '../assets/static/dexpress.png';

const Login = () => {
  return (
    <section className='Login'>
      <div className='Login_logoCliente'>
        <img src={LogoCliente} alt='Logo Cliente' />
      </div>
      <div className='Login__form'>
        <div className='Login__form__logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <form>
          contenido formulario
        </form>
      </div>
    </section>
  );
};

export default Login;
