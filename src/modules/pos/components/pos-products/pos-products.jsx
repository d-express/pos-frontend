import React from 'react';
import './pos-products.scss';

const PosProducts = ({ children }) => {

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <section className='PosProducts'>
      <div className='FormContainer'>
        <button type='button' className='btn btn-white'>
          <i className='simple-icon-arrow-left' />
        </button>
        <input
          name='searchKeyword'
          id='searchKeyword'
          placeholder='Buscar caja'
          type='search'
          className='FormInput'
          onChange={(text) => handleSearch(text)}
        />
      </div>
      <div className='container'>
        <div className='row m-1 PosProducts__items'>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PosProducts;
