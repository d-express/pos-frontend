import React, { useState } from 'react';
import LogoClient from '../../../../assets/images/pizza-logo.png';

const CashOpen = (props) => {
  const [form, setForm] = useState({
    number: 0,
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  const handlSubmit = (event) => {

    event.preventDefault();
    props.history.push('/pos');
  };

  return (
    <section className='lockScreenLayout'>
      <div className='col-md-6 container-fluid containing'>
        <div className='row'>
          <div className='col-md-4 logo-client'>
            <img src={LogoClient} alt='logo Cliente' />
          </div>
          <form className='col-md-6 m-0 p-0 d-flex flex-column justify-content-around' onSubmit={handlSubmit}>
            <h3 className='text-white'>Apertura de Caja</h3>
            <div className='FormContainer'>
              <small className='FormLabel'>Dinero de inicio</small>
              <input
                name='number'
                className='FormInput'
                type='number'
                min='1000'
                onChange={handleInput}
                required
              />
            </div>
            <button className='btn btn-danger' type='submit'>Abrir</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CashOpen;
