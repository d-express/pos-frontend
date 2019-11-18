import React from 'react';
import './Modal.scss';

const Modal = ({ children, close, }) => (
  <section className='Modal'>
    <div className='Modal__content'>
      <button type='button' onClick={close} className='Modal__close btn btn-outline-danger'>
        <i className='iconsminds-close' />
      </button>
      {children}
    </div>
  </section>
);

export default Modal;
