import React from 'react';

const PosGroup = ({ name, img, onClick, }) => {
  return (
    <div className='col-sm-12 col-md-4 PosProductsItem m-3' role='button' tabIndex={0} onClick={onClick}>
      <div className='d-none d-md-block h-100'>
        <div className='text-white card-rounded h-100'>
          <div className='row h-100'>
            <div className='position-relative sm-2 h-100'>
              <img alt={name} src={img} className='card-img card-rounded w-100 h-100' />
            </div>
            <div className='card-img-overlay card-rounded sm-10'>
              <div className='card-title mb-0'>{name}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-md-none PosProductsItem__list'>
        <div className='d-flex flex-row card'>
          <img
            alt={name}
            src={img}
            className='list-thumbnail border-0 card-img-left imgSmall_list'
          />
          <div className='card-body d-flex align-items-center h-100'>
            <div className='list-item-heading truncate pr-2'>{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosGroup;
