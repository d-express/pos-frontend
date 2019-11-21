import React from 'react';
import Header from '../header';
import './PaymentBoxClose.scss';

const PaymentBoxClose = () => {
  return (
    <section className='PaymentBoxClose'>
      <div className='PaymentBoxClose__header'>
        <Header />
      </div>
      <div className='PaymentBoxClose__content container'>
        <div className='row text-center'>
          <h2>Cierre de caja</h2>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Tipo</th>
                <th scope='col'>Last</th>
                <th scope='col'>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PaymentBoxClose;
