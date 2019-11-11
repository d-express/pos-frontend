import React from 'react';
import './numericKeyboard.scss';

const numericKeyboard = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  numbers = numbers.sort(() => (Math.random() - 0.5));
  const pin = [];
  const handlePin = (event) => {
    pin.push(event.target.value);
  };
  const deletePin = () => {
    pin.pop();
  };
  return (
    <section className='numericKeyboard'>
      <div className='row display m-0'>
        <div className='col-12 text-center'>
          <h2>Ingresa Codigo</h2>
        </div>
      </div>
      <div className='row numbers m-0'>
        {numbers.map((item) => (
          <div key={item} className='col-4' onClick={handlePin} role='button' tabIndex={item}>
            <button
              value={item}
              type='button'
              className='btn btn-outline-primary btn-lg btn-block'
            >
              {item}
            </button>
          </div>
        ))}

        <div className='col-4' onClick={deletePin} role='button' tabIndex='-0'>
          <button
            type='button'
            className='btn btn-outline-primary btn-lg btn-block'
          >
            <i className='iconsminds-arrow-x-right' />
          </button>
        </div>
        <div className='col-4'>
          <button type='button' className='btn btn-success btn-lg btn-block'>
            Iniciar
          </button>
        </div>
      </div>
    </section>
  );
};

export default numericKeyboard;
