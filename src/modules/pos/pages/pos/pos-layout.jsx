import React from 'react';
import Header from '../../components/header';
import PosOrder from '../../components/pos-order';
import PosProducts from '../../components/pos-products/pos-products';
import PosProductsItem from '../../components/pos-products-item/pos-products-item';
import imgProduct from '../../../../assets/imagen/pizza-min.jpg';
import './pos-layout.scss';

const posLayout = () => {
  return (
    <section className='PosLaoyout'>
      <div className='PosLaoyout__header'>
        <Header />
      </div>
      <div className='PosLaoyout__products'>
        <PosProducts>
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
          <PosProductsItem img={imgProduct} name='Jamón' type='clasica' description='sss' />
        </PosProducts>
      </div>
      <div className='PosLaoyout__order'>
        <PosOrder />
      </div>
    </section>
  );
};

export default posLayout;
