import React from 'react';
import './pos-products.scss';

const PosProducts = ({ children, onClick, grupo, }) => {

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <section className='PosProducts container'>
      <div className='FormContainer row'>
        <button type='button' className='btn btn-white col-1' onClick={onClick}>
          <i className='simple-icon-arrow-left' />
        </button>
        <input
          name='searchKeyword'
          id='searchKeyword'
          placeholder='Buscar productos'
          type='search'
          className='FormInput col-10'
          onChange={(text) => handleSearch(text)}
        />
      </div>
      <div className='row PosProducts__items pb-4'>
        {children}
      </div>
      <div className='PosProducts__group'>
        {grupo}
      </div>
    </section>
  );
};

export default PosProducts;
