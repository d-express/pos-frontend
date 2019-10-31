import React from 'react';
import './Pos-order-layOut.scss';

const PosOrderLayOut = ({ children }) => {
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
            <i className='iconsminds-repeat' />
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <i className='iconsminds-tag' />
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <i className='simple-icon-options' />
          </a>
        </li>
      </ul>
      <div className='order__item d-flex flex-grow-1 PosOrderLayOut__content'>
        {children}
      </div>
      <div className='PosOrderLayOut__accion'>
        <div className='order-tax d-flex justify-content-between '>
          <p>
            Impuesto
            </p>
          <span className='mr-0'>0</span>
        </div>
        <div className='order-total d-flex justify-content-between'>
          <p>
            Total
            </p>
          <span className='mr-0'>40.000</span>
        </div>
        <div className='d-flex'>
          <button className='mb-2 btn btn-secondary btn'><span>Cancelar</span></button>
          <button className='ml-2 mb-2 btn btn-success btn-block'><span>Pagar</span></button>
        </div>
      </div>
    </div>
  );
};

export default PosOrderLayOut;
