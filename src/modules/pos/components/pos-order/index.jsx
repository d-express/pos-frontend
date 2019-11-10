import React from 'react';
import PosOrderLayout from './pos-order-layout';

const PosOrder = ({ children, subTotal, btnCancel }) => (
  <PosOrderLayout subTotal={subTotal} btnCancel={btnCancel}>
    {children}
  </PosOrderLayout>
);

export default PosOrder;
