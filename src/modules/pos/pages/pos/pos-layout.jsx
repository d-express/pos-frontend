import React from 'react';
import Header from '../../components/header';
import PosOrder from '../../components/pos-order';
import './pos-layout.scss';

const posLayout = () => {
  return (
    <section className='PosLaoyout'>
      <div className='PosLaoyout__header'>
        <Header />
      </div>
      <div className='PosLaoyout__products'>
      s
      </div>
      <div className='PosLaoyout__order'>
        <PosOrder />
      </div>
    </section>
  );
};

export default posLayout;
