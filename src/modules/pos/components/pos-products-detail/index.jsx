import React from 'react';

const ProductsDetail = ({ img, name, size, price, }) => {
  return (
    <div className='d-md-none PosProductsItem__list'>
      <div className='d-flex flex-row card'>
        <img
          alt={name}
          src={img}
          className='list-thumbnail border-0 card-img-left imgSmall_list'
        />
        <div className='card-body d-flex align-items-center h-100'>
          <div className='list-item-heading truncate pr-2'>{name}</div>
          <div className='list-item-heading truncate pr-2'>{price}</div>
          <span className='badge badge-secondary badge-pill d-none d-sm-block'>
            {size}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
