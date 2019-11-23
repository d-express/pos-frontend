import React from 'react';
import './pos-products-item.scss';

const PosProductsItem = ({ img, name, type, description, price, onClick, }) => {

  return (
    <div className='col-sm-12 col-md-4 col-lg-3 PosProductsItem mb-3'>
      <div className='d-none d-md-block' role='button' tabIndex={0} onClick={onClick}>
        <div className='card text-white card-rounded container'>
          <div className='row'>
            <div className='sm-2'>
              <img alt={name} src={img} className='card-rounded img-fluid ' />
            </div>
            <div className='card-img-overlay p-2 card-rounded sm-10'>
              <div className='card-title mb-0'>{name}</div>
              <p className='text-truncate mb-0'>{description}</p>
              <p className='text-truncate mb-0'>{price}</p>
            </div>
          </div>
        </div>
        <span className='position-absolute badge-top-right badge badge-primary badge-pill bg-dark text-white'>
          {type}
        </span>
      </div>
      <div className='d-md-none PosProductsItem__list' role='button' tabIndex={0} onClick={onClick}>
        <div className='d-flex flex-row card'>
          <img
            alt={name}
            src={img}
            className='list-thumbnail border-0 card-img-left imgSmall_list'
          />
          <div className='card-body d-flex align-items-center h-100'>
            <div className='list-item-heading truncate pr-2'>{name}</div>
            <div className='list-item-heading truncate pr-2'>{description}</div>
            <div className='list-item-heading truncate pr-2'>{price}</div>
            <span className='badge badge-secondary badge-pill d-none d-sm-block'>
              {type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosProductsItem;
