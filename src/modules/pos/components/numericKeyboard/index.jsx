import React from 'react';

const numericKeyboard = () => {
  return (
    <div className='row pin-container'>
      <div className='col-4'>
        <button
          type='button'
          className='btn btn-outline-primary btn-lg btn-block'
        >
          1
      </button>
      </div>
      <div className='col-4'>
        <button
          type='button'
          className='btn btn-outline-primary btn-lg btn-block'
        >
          2
      </button>
      </div>
      <div className='col-4'>
        <button
          type='button'
          className='btn btn-outline-primary btn-lg btn-block'
        >
          3
      </button>
      </div>
      <div className='col-4'>
        <button
          type='button'
          className='btn btn-outline-primary btn-lg btn-block'
        >
          4
      </button>
      </div>
      <div className='col-4'>
        <button
          type='button'
          className='btn btn-outline-primary btn-lg btn-block'
        >
          5
      </button>
      </div>
      <div className='col-4'>
        <button
          type='button'
          className='btn btn-outline-primary btn-lg btn-block'
        >
          6
      </button>
      </div>
      <div className='col-4'>
        <button
          type='button'
          className='btn btn-outline-primary btn-lg btn-block'
        >
          7
      </button>
      </div>
      <div className='col-4'>
        <button
          type='button'
          className='btn btn-outline-primary btn-lg btn-block'
        >
          8
      </button>
      </div>
      <div className='col-4'>
        <button
          type='button'
          className='btn btn-outline-primary btn-lg btn-block'
        >
          9
      </button>
      </div>
      <div className='col-4'>
        <button
          type='button'
          className='btn btn-outline-primary btn-lg btn-block'
        >
          <i className='iconsminds-arrow-x-right'></i>
        </button>
      </div>
      <div className='col-4'>
        <button
          type='button'
          className='btn btn-outline-primary btn-lg btn-block'
        >
          0
      </button>
      </div>
      <div className='col-4'>
        <button type='button' className='btn btn-success btn-lg btn-block'>
          Iniciar
      </button>
      </div>
    </div>
  );
};

export default numericKeyboard;
