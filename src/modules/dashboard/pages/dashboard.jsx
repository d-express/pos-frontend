import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../components/header';
import Sidebar from '../components/sidebar';
// import Main from '../components/main';

const Dashboard = ({ containerClassnames, }) => (
  <div id='app-container' className={containerClassnames}>
    <Header />
    <Sidebar />
    {/* <Main /> */}
  </div>
);

const mapStateToProps = ({ menu, }) => {
  const { containerClassnames, } = menu;
  return { containerClassnames, };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Dashboard)
);
