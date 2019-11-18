import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/dexpress.png';

import './register.scss';

const Register = (props) => {
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
    <section className='Register'>
      <div className='Register__container'>
        <div className='Register__container__Info'>
          <h2>Punto de venta</h2>
          <p>Sistema fácil de usar, inteligente y con la capacidad de aumentar sus ganancias</p>
        </div>
        <div className='Register__container__form'>
          <div className='Register__container__form__logo'>
            <img src={Logo} alt='Logo' />
          </div>
          <div className='Register__container__form__title'>
            <h2>Registro</h2>
          </div>
          <form onSubmit={handlSubmit}>
            <div className='FormContainer'>
              <small className='FormLabel'>NIT</small>
              <input
                name='nit'
                className='FormInput'
                type='number'
                onChange={handleInput}
                required
              />
            </div>
            <div className='FormContainer'>
              <small className='FormLabel'>Empresa o negocio</small>
              <input
                name='empresa'
                className='FormInput'
                type='text'
                onChange={handleInput}
                required
              />
            </div>
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
              <small className='FormLabel'>Telefono</small>
              <input
                name='phone'
                className='FormInput'
                type='number'
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
            <div className='FormContainer'>
              <small className='FormLabel'>Verifica la contraseña</small>
              <input
                name='password'
                className='FormInput'
                type='password'
                onChange={handleInput}
                required
              />
            </div>
            <div className='Register__container__form__accion'>
              <div className='Register__container__form__accion__acepto'>
                <input type='checkbox' placeholder='Acepto' name='acepto' required />
                <small>Estoy de acuerdo con los </small>
                <Link to='X' className='Register__container__form__accion__link'>
                  <small>términos y condiciones</small>
                </Link>
              </div>
              <button className='btn btn-danger' type='submit'>Comenzar</button>
            </div>
            <Link to='/login' className='text-center'>
              Ya tengo Cuenta
            </Link>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Register;
