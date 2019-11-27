/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchCategory, fetchProductsCategory } from '../../redux/fetch-actions';
import { addCard, updateCard, cancelCard } from '../../redux/actions/index';
import Header from '../header';
import PosOrder from '../pos-order';
import PosProducts from '../pos-products/pos-products';
import PosProductsItem from '../pos-products-item/pos-products-item';
import PosOrderIteam from '../pos-order-item/pos-order-item';
import PosGroup from '../pos-group';
import state1 from '../../../../mocks/state';

import './pos-layout.scss';
import Modal from '../modal';

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
    cancelCard,
    updateCard,
  } = props;

  const getData = () => {
    fetchCategory();
  };
  // eslint-disable-next-line no-unused-vars
  const [inicialState, setInicialState] = useState(getData);
  const [data, setData] = useState(state1);
  const [modalProducts, setModalProducts] = useState(false);
  const [PayModal, setPayModal] = useState(false);
  const [group, setGroup] = useState({ id: 0, name: 'Grupo de productos', });
  const handlenOrder = (product) => {
    if (product.amount) {
      product.amount += 1;
      updateCard(product);
    } else {
      product.amount = 1;
      addCard(product);
    }
  };
  const priceVariation = (product, variation) => {
    product._id = variation._id;
    product.price = variation.value;
    product.description = variation.description;
    handlenOrder(product);
  };
  const modalSubProducts = () => {
    modalProducts ? setModalProducts(false) : setModalProducts(true);
  };
  const modalPay = () => {
    PayModal ? setPayModal(false) : setPayModal(true);
  };
  const CancelOrden = () => {
    // eslint-disable-next-line array-callback-return
    products.map((item) => {
      if (item.amount) {
        delete item.amount;
      }
    });
    cancelCard();
  };
  const ConfirmOrder = () => {
    setData({
      ...data,
      historyTransaccion: [...data.historyTransaccion, data.cart],
    });
    CancelOrden();
    modalPay();
  };
  const selectProducts = (id, name) => {
    fetchProductsCategory(id);
    setGroup({
      id,
      name,
    });
  };
  const backProducts = () => {
    setGroup({
      id: 0,
      name: 'Grupo de productos',
    });
  };

  return (
    <section className='PosLaoyout'>
      {PayModal && (
        <Modal title='Modalidad de Pago' onClick={() => modalPay()}>
          <div className='w-75'>
            <button type='button' className='btn btn-warning btn-lg btn-block' onClick={() => ConfirmOrder()}>Efectivo</button>
            <button type='button' className='btn btn-success btn-lg btn-block' onClick={() => ConfirmOrder()}>Tarjeta</button>
          </div>
        </Modal>
      )}
      <div className='PosLaoyout__header'>
        <Header />
      </div>
      <div className='PosLaoyout__products'>
        <PosProducts
          onClick={() => backProducts()}
          grupo={group.name}
        >
          {group.id === 0 ? (
            <div className='container text-center mt-2'>
              <div className='row justify-content-center'>
                {category.map((group) => (
                  <PosGroup
                    key={group._id}
                    name={group.name}
                    img={urlImgCategory + group._id}
                    onClick={() => selectProducts(group._id, group.name)}
                  />
                ))}
              </div>
            </div>
          ) : (
            products.map((item) => (
              item.price ? (
                <PosProductsItem
                  key={item._id}
                  img={urlImgProduct + item._id}
                  name={item.name}
                  type={item.type}
                  description={item.description}
                  price={item.price + (item.price * item.tax)}
                  onClick={() => handlenOrder(item)}
                />
              ) : (
                <div className='w-100'>
                  <PosProductsItem
                    key={item._id}
                    img={urlImgProduct + item._id}
                    name={item.name}
                    type={item.type}
                    description={item.description}
                    onClick={() => modalSubProducts()}
                  />
                  {modalProducts && (
                    <Modal title={item.name} onClick={() => modalSubProducts()}>
                      {item.prices.map((sizeProducts) => (
                        <PosOrderIteam
                          key={item._id}
                          img={urlImgProduct + item._id}
                          name={sizeProducts.description}
                          cant={item.amount}
                          price={(sizeProducts.value * item.tax) + sizeProducts.value}
                          type={item.type}
                          onClick={() => priceVariation(item, sizeProducts)}
                        />
                      ))}
                    </Modal>
                  )}
                </div>
              )
            ))
          )}
        </PosProducts>
      </div>
      <div className='PosLaoyout__order'>
        <PosOrder
          subTotal={subtotal}
          tax={tax}
          btnCancel={() => CancelOrden()}
          btnPay={() => modalPay()}
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
      )
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
  cancelCard,
};

export default connect(mapStateToProps, mapActionToProps)(posLayout);
