/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import Header from '../header';
import PosOrder from '../pos-order';
import PosProducts from '../pos-products/pos-products';
import PosProductsItem from '../pos-products-item/pos-products-item';
import imgProduct from '../../../../assets/images/pizza-min.jpg';
import state from '../../../../mocks/state';
import './pos-layout.scss';
import PosOrderIteam from '../pos-order-item/pos-order-item';

const posLayout = () => {

  const [data, setData] = useState(state);

  const handlenOrder = (product) => {
    if (product.amount) {
      product.amount += 1;
      setData({
        ...data,
        cart: [...data.cart],
        subtotal: data.subtotal + product.price,
      });
    } else {
      product.amount = 1;
      setData({
        ...data,
        cart: [...data.cart, product],
        subtotal: data.subtotal + product.price,
      });
    }

  };

  const CancelOrden = () => {
    // eslint-disable-next-line array-callback-return
    data.products.map((item) => {
      if (item.amount) {
        delete item.amount;
      }
    });
    setData({
      ...data,
      cart: [],
      subtotal: 0,
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
              onClick={() => handlenOrder(item)}
            />
          ))}
        </PosProducts>
      </div>
      <div className='PosLaoyout__order'>
        <PosOrder subTotal={data.subtotal} btnCancel={CancelOrden}>
          {data.cart.map((item) => (
            <PosOrderIteam
              key={item.id}
              img={imgProduct}
              name={item.name}
              cant={item.amount}
              price={item.price * item.amount}
              type={item.type}
            />
          ))}
        </PosOrder>
      </div>
    </section>
  );
};

export default posLayout;
