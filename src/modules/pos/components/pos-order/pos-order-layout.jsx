import React from 'react';
import './Pos-order-layOut.scss';

const PosOrderLayOut = ({ children, subTotal, tax, btnCancel, btnPay, }) => {

  return (
    <div className='h-auto PosOrderLayOut'>
      <ul className='nav justify-content-center PosOrderLayOut__icons'>
        <li className='nav-item'>
          <a className='nav-link active' href='#'>
            <i className='iconsminds-printer' />
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <i className='iconsminds-tag' />
          </a>
        </li>
      </ul>
      <div className='PosOrderLayOut__client container'>
        <form className='row text-center'>
          <h6 className='col-12'>Informción Cliente</h6>
          <div className='FormContainer col-4 p-0'>
            <input
              name='idClient'
              className='FormInput'
              type='text'
              placeholder='Identificacion'
              required
            />
          </div>
          <div className='FormContainer col-8 p-0'>
            <input
              name='nameClient'
              className='FormInput'
              type='text'
              placeholder='Nombres y Apellidos'
              required
            />
          </div>
        </form>
      </div>
      <div className='d-flex flex-column PosOrderLayOut__content justify-content-start'>
        {children}
      </div>
      <div className='PosOrderLayOut__accion'>
        <div className='order-tax d-flex justify-content-between '>
          <p>
            Impuesto
          </p>
          <span className='mr-0'>{`$ ${tax.toLocaleString('de-DE')}`}</span>
        </div>
        <div className='order-total d-flex justify-content-between'>
          <p>
            Total
          </p>
          <span className='mr-0'>{`$ ${(subTotal + tax).toLocaleString('de-DE')}`}</span>
        </div>
        <div className='d-flex'>
          <button
            className='mb-2 btn btn-secondary btn'
            type='button'
            onClick={btnCancel}
          >
            <span>
              Cancelar
            </span>
          </button>
          <button
            className='ml-2 mb-2 btn btn-success btn-block'
            type='button'
            onClick={btnPay}
          >
            <span>
              Pagar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PosOrderLayOut;

