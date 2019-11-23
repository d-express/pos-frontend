import React from 'react';
import WelcomeLayout from './welcome-layout';

import menuItems from '../../constants/menu';

const newMenuItems = menuItems.filter((item) => item.id !== 'dashboards');

const Welcome = ({ match, }) => {
  console.log(match);
  return <WelcomeLayout match={match} menuItems={newMenuItems} />;
};
export default Welcome;
