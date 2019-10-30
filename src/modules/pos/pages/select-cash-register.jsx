import React, { useState } from 'react';
import LogoCliente from '../../../assets/imagen/logo-pizza.png';
import Logo from '../../../assets/imagen/dexpress.png';
import '../../../assets/style/modules/pos/SelectCashRegister.scss';

//provisonal
import Data from '../../../mocks/state';

const SelectCashRegister = (props) => {

  const [paymentBox, setPaymentBox] = useState(Data);

  const handleSelect = (event) => {
    setPaymentBox({
      ...paymentBox,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearch = (event) => {
    console.log(event.target.value)
    console.log(Data.paymentBox.includes(String(event.target.value)))
    setPaymentBox({
      paymentBox: Data.paymentBox.includes(event.target.value),
    });
  };

  const handlSubmit = (event) => {
    event.preventDefault();
    /*     props.history.push('/'); */
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

                onChange={(text) => handleSearch(text)}
              />
              <select
                name='caja'
                size='4'
                className='FormSelector'
                onChange={handleSelect}
              >
                {Data.paymentBox.map((item) => <option key={item.idPaymentBox} name={item.paymentBox} value={item.idPaymentBox}>{item.paymentBox}</option>)}
              </select>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SelectCashRegister;
