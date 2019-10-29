import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoCliente from '../../../assets/static/logo-pizza.png';
import Logo from '../../../assets/static/dexpress.png';
import '../../../assets/style/modules/pos/SelectCashRegister.scss';

const SelectCashRegister = (props) => {

  const [paymentBox, setPaymentBox] = useState({
    idPaymentBox: '0',
    paymentBox: '',
    number: 0,
  });

  const handleSelect = (event) => {
    console.log(event)
    setPaymentBox({
      ...paymentBox,
      [event.target.name]: event.target.value,
    });
  };
  const handlSubmit = (event) => {
    event.preventDefault();
    console.log('si')
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
            <h2>Elegir caja registradora</h2>
            <img src={Logo} alt='Logo' />
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
              <select
                name='caja'
                size='2'
                className='FormSelector'
                onChange={handleSelect}
              >
                <option name={paymentBox} value={idPaymentBox}>Caja 1</option>
                <option name={paymentBox} value={idPaymentBox}>Caja 2</option>
                <option name={paymentBox} value={idPaymentBox}>Caja 3</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SelectCashRegister;
