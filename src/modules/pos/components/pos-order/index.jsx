import React from 'react';
import PosOrderLayout from './pos-order-layout';

const PosOrder = ({ children, subTotal, tax, btnCancel, btnPay, }) => (
  <PosOrderLayout
    subTotal={subTotal}
    tax={tax}
    btnCancel={btnCancel}
    btnPay={btnPay}
  >
    {children}
  </PosOrderLayout>
);

export default PosOrder;
