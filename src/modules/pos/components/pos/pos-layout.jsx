/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchCategory, fetchProductsCategory } from '../../redux/fetch-actions';
import { addCard, updateCard } from '../../redux/actions/index';
import Header from '../header';
import PosOrder from '../pos-order';
import PosProducts from '../pos-products/pos-products';
import PosProductsItem from '../pos-products-item/pos-products-item';
import PosOrderIteam from '../pos-order-item/pos-order-item';
import PosGroup from '../pos-group';
import state1 from '../../../../mocks/state';
import './pos-layout.scss';

const posLayout = (props) => {
  const urlImgCategory = 'https://api.dexpress.app/category/image/';
  const urlImgProduct = 'https://api.dexpress.app/products/image/';
  const {
    category,
    cart,
    subtotal,
    tax,
    fetchCategory,
    products,
    fetchProductsCategory,
    addCard,
    updateCard,
  } = props;

  const getData = () => {
    fetchCategory();
  };
  // eslint-disable-next-line no-unused-vars
  const [inicialState, setInicialState] = useState(getData);
  const [data, setData] = useState(state1);
  const [group, setGroup] = useState(0);
  const handlenOrder = (product) => {
    if (product.amount) {
      product.amount += 1;
      updateCard(product);
    } else {
      product.amount = 1;
      addCard(product);
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

  const ConfirmOrder = () => {
    setData({
      ...data,
      historyTransaccion: [...data.historyTransaccion, data.cart],
    });
    console.log(data.historyTransaccion);
    CancelOrden();
  };

  const selectProducts = (id) => {
    fetchProductsCategory(id);
    setGroup(id);
  };

  const backProducts = () => {
    setGroup(0);
  };

  const bannerGroup = () => {
    let value = 'grupo';
    // eslint-disable-next-line array-callback-return
    category.map((item) => {
      if (item._id === group) {
        value = item.name;
      }
    });
    return value;
  };

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
              {category.map((group) => (
                <PosGroup
                  key={group._id}
                  name={group.name}
                  img={urlImgCategory + group._id}
                  onClick={() => selectProducts(group._id)}
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
              {products.map((item) => (
                <PosProductsItem
                  key={item._id}
                  img={urlImgProduct + item._id}
                  name={item.name}
                  type={item.type}
                  description={item.description}
                  price={item.price + (item.price * item.tax)}
                  onClick={() => handlenOrder(item)}
                />
              ))}
            </PosProducts>
          )}
      </div>
      {group !== 0 && (
        <div className='PosLaoyout__order'>
          <PosOrder
            subTotal={subtotal}
            tax={tax}
            btnCancel={CancelOrden}
            btnPay={ConfirmOrder}
          >
            {cart.map((item) => (
              <PosOrderIteam
                key={item._id}
                img={urlImgProduct + item._id}
                name={item.name}
                cant={item.amount}
                price={item.price * item.amount}
                type={item.type}
              />
            ))}
          </PosOrder>
        </div>
      )}
    </section>
  );
};
const mapStateToProps = (state) => {

  return {
    ...state,
    category: state.pos.category,
    products: state.pos.products,
    cart: state.pos.cart,
    subtotal: state.pos.subtotal,
    tax: state.pos.tax,
  };
};

const mapActionToProps = {
  fetchCategory,
  fetchProductsCategory,
  addCard,
  updateCard,
};

export default connect(mapStateToProps, mapActionToProps)(posLayout);
