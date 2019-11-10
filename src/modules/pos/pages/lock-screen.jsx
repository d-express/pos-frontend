import React from 'react';
import numericKeyboard from '../components/numericKeyboard';

const LockScreen = () => {
  return (
    <div>
      {React.createElement(numericKeyboard)}
    </div>
  );
};

export default LockScreen;
