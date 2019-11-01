import React from 'react';
import './pos-products-item.scss';

const PosProductsItem = ({ img, name, type, description, price, onClick, }) => {

  return (
    <div className='col-sm-6 col-md-4 col-lg-3 PosProductsItem p-1' onClick={onClick}>
      <div className='card text-white card-rounded '>
        <div className='position-relative'>
          <a className='w-40 w-sm-100' href=''>
            <img alt={name} src={img} className='card-img card-rounded ' />
          </a>
        </div>
        <div className='card-img-overlay card-rounded '>
          <div className='card-title mb-0'>{name}</div>
          <p className='text-truncate mb-0'>{description}</p>
          <p className='text-truncate mb-0'>{price}</p>
          <i className='simple-icon-layers' />
        </div>
      </div>
      <span className='position-absolute badge-top-right badge badge-primary badge-pill bg-dark text-white'>
        {type}
      </span>
    </div>
  );
};

export default PosProductsItem;
