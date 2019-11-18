import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoCliente from '../../assets/images/pizza-logo.png';
import Logo from '../../assets/images/dexpress.png';
import './login.scss';

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
              <Link to='X'>
                <p>¿Olvido su contraseña?</p>
              </Link>
              <button className='btn btn-danger' type='submit'>Inciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
