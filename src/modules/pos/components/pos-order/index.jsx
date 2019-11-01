import React from 'react';
import PosOrderLayout from './pos-order-layout';

const PosOrder = ({ children, subTotal, }) => (
  <PosOrderLayout subTotal={subTotal}>
    {children}
  </PosOrderLayout>
);

export default PosOrder;
