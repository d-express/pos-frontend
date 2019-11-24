import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRegister } from '../../redux/auth/fetch_actions';
import Logo from '../../assets/images/dexpress.png';

import './register.scss';

const Register = (props) => {
  const [form, setForm] = useState({
    vat: 0,
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

    /*     if (event.target.name === 'password2') {
          if (form.password === form.password2) {
            console.log('ok')
          } else {
            console.log('Las contraseñas no son iguales intenta N');
          }
        } */
  };

  const handlSubmit = (event) => {
    if (form.password === form.password2) {
      event.preventDefault();
      delete form.password2;
      form.termsConditions = true;
      props.fetchRegister(form, props.history);
    } else {
      alert('Las contraseñas no son iguales intenta de nuevo');
    }

  };

  return (
    <section className='Register'>
      <div className='Register__container'>
        <div className='Register__container__Info'>
          <h2>Punto de venta</h2>
          <p>Sistema fácil de usar, inteligente y con la capacidad de aumentar sus ganancias</p>
        </div>
        <div className='Register__container__form'>
          <div className='Register__container__form__logo mb-0'>
            <img src={Logo} alt='Logo' />
          </div>
          <div className='Register__container__form__title'>
            <h2>Registro</h2>
          </div>
          <form onSubmit={handlSubmit} className='container'>
            <div className='row'>
              <div className='FormContainer col-6'>
                <small className='FormLabel'>NIT</small>
                <input
                  name='vat'
                  className='FormInput w-100'
                  type='number'
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='FormContainer col-6'>
                <small className='FormLabel'>Empresa o negocio</small>
                <input
                  name='businessName'
                  className='FormInput w-100'
                  type='text'
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='FormContainer col-6'>
                <small className='FormLabel'>Dirección</small>
                <input
                  name='address'
                  className='FormInput w-100'
                  type='text'
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='FormContainer col-6'>
                <small className='FormLabel'>Telefono</small>
                <input
                  name='telephone'
                  className='FormInput w-100'
                  type='number'
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='FormContainer col-6'>
                <small className='FormLabel'>Nombre</small>
                <input
                  name='firstName'
                  className='FormInput w-100'
                  type='text'
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='FormContainer col-6'>
                <small className='FormLabel'>Apellido</small>
                <input
                  name='lastName'
                  className='FormInput w-100'
                  type='text'
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='FormContainer col-12'>
                <small className='FormLabel'>Email</small>
                <input
                  name='email'
                  className='FormInput w-100'
                  type='email'
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='FormContainer col-12'>
                <small className='FormLabel'>Contraseña</small>
                <input
                  name='password'
                  className='FormInput w-100'
                  type='password'
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='FormContainer col-12'>
                <small className='FormLabel'>Verifica la contraseña</small>
                <input
                  name='password2'
                  className='FormInput w-100'
                  type='password'
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='Register__container__form__accion col-12'>
                <div className='Register__container__form__accion__acepto'>
                  <input type='checkbox' placeholder='Acepto' onChange={handleInput} name='termsConditions' required />
                  <small>Estoy de acuerdo con los </small>
                  <Link to='/' className='Register__container__form__accion__link'>
                    <small>términos y condiciones</small>
                  </Link>
                </div>
                <button className='btn btn-danger' type='submit'>Comenzar</button>
                <Link to='/login' className='text-center'>
                  Ya tengo Cuenta
                </Link>
              </div>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

const mapActionToProps = {
  fetchRegister,
};

const mapStateToProps = ({ message, }) => {
  return { message, };
};

export default connect(mapStateToProps, mapActionToProps)(Register);
