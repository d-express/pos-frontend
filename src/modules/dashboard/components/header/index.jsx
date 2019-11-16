import React from 'react';
import { connect } from 'react-redux';
import {
  setContainerClassnames,
  clickOnMobileMenu
  // logoutUser
} from '../../../../redux/actions';
import Fullscreen from '../../../../utils/fullscreen';

import HeaderLayout from './header-layout';

const Header = (props) => {
  const {
    containerClassnames,
    selectedMenuHasSubItems,
    menuClickCount,
    setContainerClassnames,
    clickOnMobileMenu,
  } = props;

  const menuButtonClick = (e, menuClickCount, containerClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);

    let count = menuClickCount;
    setContainerClassnames(
      ++count,
      containerClassnames,
      selectedMenuHasSubItems
    );
  };

  const mobileMenuButtonClick = (e, containerClassnames) => {
    e.preventDefault();
    clickOnMobileMenu(containerClassnames);
  };

  const toggleFullScreen = () => {
    const fullscreen = new Fullscreen();
    fullscreen.toggleFullScreen();
  };

  return (
    <HeaderLayout
      containerClassnames={containerClassnames}
      menuClickCount={menuClickCount}
      menuButtonClick={menuButtonClick}
      mobileMenuButtonClick={mobileMenuButtonClick}
      toggleFullScreen={toggleFullScreen}
    />
  );
};

const mapStateToProps = ({ menu, settings, }) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems, } = menu;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
  };
};
export default connect(
  mapStateToProps,
  {
    setContainerClassnames,
    clickOnMobileMenu,
    // logoutUser,
  }
)(Header);
