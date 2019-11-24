import React from 'react';

const PosOrderIteam = ({ img, name, cant, price, type, onClick, }) => (
  <div className='d-flex PosProductsItem__list w-100 m-1' role='button' tabIndex={0} onClick={onClick}>
    <div className='d-flex flex-row card w-100'>
      <img
        alt={name}
        src={img}
        className='list-thumbnail border-0 card-img-left imgSmall'
      />
      <div className='card-body p-0 text-center'>
        <h4 className='m-0'>{cant}</h4>
        <p className='m-0'>
          {name}
        </p>
        <h4 className='m-0'>{`$ ${price.toLocaleString('de-DE')}`}</h4>

      </div>
    </div>
  </div>
);

export default PosOrderIteam;
