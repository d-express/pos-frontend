import React from 'react';

const PosOrderIteam = ({ img, name, cant, price, type, }) => (
  <div className='d-flex'>
    <img alt={name} src={img} className='imgSmall' />
    <div className='d-flex flex-column ml-2'>
      <div className='list-item-heading text-truncate'>
        <h4 className='m-0'>{name}</h4>
      </div>
      <p className='text-muted mb-1 text-small d-flex justify-content-between'>
        <span>{cant}</span>
        <small className='px-2'>{type}</small>
        <span className='text-dark font-weight-bold'>{`$ ${price.toLocaleString('de-DE')}`}</span>
      </p>
    </div>
  </div>
);

export default PosOrderIteam;
