import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoCliente from '../assets/imagen/logo-pizza.png';
import Logo from '../assets/imagen/dexpress.png';
import '../assets/styles/pages/login.scss';

const Login = (props) => {
  const [form, setForm] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handlSubmit = (event) => {
    event.preventDefault();
    props.history.push('/');
  };

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
          <form onSubmit={handlSubmit}>
            <div className='FormContainer'>
              <small className='FormLabel'>Email</small>
              <input
                name='email'
                className='FormInput'
                type='email'
                onChange={handleInput}
                required
              />
            </div>
            <div className='FormContainer'>
              <small className='FormLabel'>Contraseña</small>
              <input
                name='password'
                className='FormInput'
                type='password'
                onChange={handleInput}
                required
              />
            </div>
            <div className='Login__container__form__btn'>
              <Link to='#'>
                <p>¿Olvido su contraseña?</p>
              </Link>
              <button className='button button-primary' type='submit'>Inciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
