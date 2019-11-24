import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({ children, }) => {
  const [modalView, setModalView] = useState(false);

  const view = () => (modalView ? setModalView(false) : setModalView(true));
  return (
    <section>
      {modalView && (
        <div className='Modal'>
          <div className='Modal__content'>
            <button type='button' onClick={() => view()} className='Modal__close btn p-0 border-0 btn-outline-danger'>
              <i className='iconsminds-close' />
            </button>
            {children}
          </div>
        </div>
      )}
    </section>
  );
};

export default Modal;
