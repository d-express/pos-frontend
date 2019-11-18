import React from 'react';
import PosOrderLayout from './pos-order-layout';

const PosOrder = ({ children, subTotal, btnCancel, btnPay, }) => (
  <PosOrderLayout subTotal={subTotal} btnCancel={btnCancel} btnPay={btnPay}>
    {children}
  </PosOrderLayout>
);

export default PosOrder;
