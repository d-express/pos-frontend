import React from 'react';
import './Modal.scss';

const Modal = ({ children, title, onClick, }) => {
  return (
    <section>
      <div className='Modal'>
        <div className='Modal__content p-1'>
          <button type='button' onClick={onClick} className='Modal__close btn p-0 border-0 btn-outline-danger'>
            <i className='iconsminds-close' />
          </button>
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Modal;
