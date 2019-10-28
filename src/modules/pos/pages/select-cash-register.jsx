import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoCliente from '../../../assets/static/logo-pizza.png';
import Logo from '../../../assets/static/dexpress.png';
import '../../../assets/style/modules/pos/SelectCashRegister.scss';

const SelectCashRegister = (props) => {

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
    <section className='SelectCashRegister'>
      <div className='SelectCashRegister__container'>
        <div className='SelectCashRegister__container__logoCliente'>
          <img src={LogoCliente} alt='Logo Cliente' />
        </div>
        <div className='SelectCashRegister__container__form'>
          <div className='SelectCashRegister__container__form__logo'>
            <img src={Logo} alt='Logo' />
          </div>
          <div className='SelectCashRegister__container__form__title'>
            <h2>Elegir caja registradora</h2>
          </div>
          <form onSubmit={handlSubmit}>
            <div className='FormContainer'>
              <input
                name='searchKeyword'
                id='searchKeyword'
                placeholder='Buscar caja'
                type='search'
                className='FormInput'
              />
              <br />
              <h3>Caja</h3>
              <br />
              <select name='caja' size='3' className='FormSelector'>
                <option value='1'>Caja 1</option>
                <option value='2'>Caja 2</option>
                <option value='3'>Caja 3</option>
              </select>
            </div>
            <div className='SelectCashRegister__container__form__btn'>
              <Link to='#'>
                <p>¿Olvido su contraseña?</p>
              </Link>
              <button className='boton boton-primario' type='submit'>Inciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SelectCashRegister;
