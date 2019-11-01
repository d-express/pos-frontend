import React, { useState } from 'react';
import Header from '../../components/header';
import PosOrder from '../../components/pos-order';
import PosProducts from '../../components/pos-products/pos-products';
import PosProductsItem from '../../components/pos-products-item/pos-products-item';
import imgProduct from '../../../../assets/imagen/pizza-min.jpg';
import state from '../../../../mocks/state';
import './pos-layout.scss';
import PosOrderIteam from '../../components/pos-order-item/pos-order-item';

const posLayout = () => {

  const [data, setData] = useState(state);

  const handlenOrder = (product) => {
    console.log( data.subtotal)
    setData({
      ...data,
      cart: [...data.cart, product],
      subtotal: data.subtotal + product.price,
    });
  };

  return (
    <section className='PosLaoyout'>
      <div className='PosLaoyout__header'>
        <Header />
      </div>
      <div className='PosLaoyout__products'>
        <PosProducts>
          {data.products.map((item) => (
            <PosProductsItem
              key={item.id}
              img={imgProduct}
              name={item.name}
              type={item.type}
              description={item.description}
              price={item.price}
              onClick={()=> handlenOrder(item)}
            />
          ))}
        </PosProducts>
      </div>
      <div className='PosLaoyout__order'>
        <PosOrder subTotal={data.subtotal}>
          {data.cart.map((item) => (
            <PosOrderIteam
              key={item.id}
              img={imgProduct}
              name={item.name}
              cant='1'
              price={item.price}
              type={item.type}
            />
          ))}
        </PosOrder>
      </div>
    </section>
  );
};

export default posLayout;
