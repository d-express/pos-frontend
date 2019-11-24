import React from 'react';

const PosOrderIteam = ({ img, name, cant, price, type, onClick, }) => (
  <div className='d-flex PosProductsItem__list w-100' role='button' tabIndex={0} onClick={onClick}>
    <div className='d-flex flex-row card'>
      <img
        alt={name}
        src={img}
        className='list-thumbnail border-0 card-img-left imgSmall'
      />
      <div className='card-body d-flex align-items-center p-0'>
          <h4>{cant}</h4>
          <span className='text-dark font-weight-bold'>{`$ ${price.toLocaleString('de-DE')}`}</span>
        <p className='text-muted mb-1 text-small d-flex justify-content-between'>
          <small className='px-2'>{type}</small>
        </p>
      </div>
    </div>
  </div>
);

export default PosOrderIteam;
