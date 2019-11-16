import React from 'react';
import numericKeyboard from '../numericKeyboard';
import LogoClient from '../../../../assets/imagen/pizza-logo.png';
import './lockScrenLayout.scss';

const lockScreenLayout = () => (
  <section className='lockScreenLayout'>
    <div className='col-md-6 container-fluid containing'>
      <div className='row'>
        <div className='col-md-4 logo-client'>
          <img src={LogoClient} alt='logo Cliente' />
        </div>
        <div className='col-md-6 m-0 p-0'>
          {React.createElement(numericKeyboard)}
        </div>
      </div>
    </div>
  </section>
);

export default lockScreenLayout;
