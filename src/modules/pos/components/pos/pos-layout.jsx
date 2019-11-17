/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import Header from '../header';
import PosOrder from '../pos-order';
import PosProducts from '../pos-products/pos-products';
import PosProductsItem from '../pos-products-item/pos-products-item';
import PosOrderIteam from '../pos-order-item/pos-order-item';
import PosGroup from '../pos-group';
import state from '../../../../mocks/state';
import './pos-layout.scss';

const posLayout = () => {

  const [data, setData] = useState(state);
  const [group, setGroup] = useState(0);

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

  const selectProducts = (id) => {
    setGroup(id);
  };

  const backProducts = () => {
    setGroup(0);
  };

  const bannerGroup = () => {
    let value = 'grupo';
    data.productsGroup.map((item) => {
      if (item.id === group) {
        value = item.category;
      }
    });
    return value;
  }

  return (
    <section className='PosLaoyout'>
      <div className='PosLaoyout__header'>
        <Header />
      </div>
      <div className='PosLaoyout__products'>
        {group === 0 ? (
          <div className='container text-center mt-4'>
            <h2>Grupo de productos</h2>
            <div className='row justify-content-center mt-4'>
              {data.productsGroup.map((group) => (
                <PosGroup
                  key={group.id}
                  name={group.category}
                  img={group.img}
                  onClick={() => selectProducts(group.id)}
                />
              ))}
            </div>
          </div>
        ) :
          (
            <PosProducts
              onClick={() => backProducts()}
              grupo={bannerGroup()}
            >
              {data.products.map((item) => (
                item.idProductGroup === group && (
                  <PosProductsItem
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    type={item.type}
                    description={item.description}
                    price={item.price}
                    onClick={() => handlenOrder(item)}
                  />
                )
              ))}
            </PosProducts>
          )}
      </div>
      <div className='PosLaoyout__order'>
        <PosOrder subTotal={data.subtotal} btnCancel={CancelOrden}>
          {data.cart.map((item) => (
            <PosOrderIteam
              key={item.id}
              img={item.img}
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
