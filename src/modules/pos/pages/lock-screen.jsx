import React from 'react';
import lockScreenLayout from '../components/lockScreenLayout';

const LockScreen = () => {
  return (
    <div>
      {React.createElement(lockScreenLayout)}
    </div>
  );
};

export default LockScreen;
