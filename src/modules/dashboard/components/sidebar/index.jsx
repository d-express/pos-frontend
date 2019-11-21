import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderLayout from './sidebar-layout';

import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames,
  changeSelectedMenuHasSubItems
} from '../../../../redux/actions';

import menuItems from '../../constants/menu';

class Sidebar extends Component {
  state = { selectedParentMenu: '', viewingParentMenu: '', collapsedMenus: [], };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
    this.handleProps();
    this.setSelectedLiActive(this.setHasSubItemStatus);
  }

  handleWindowResize = (event) => {
    const { setContainerClassnames, selectedMenuHasSubItems, } = this.props;
    if (event && !event.isTrusted) {
      return;
    }
    const { containerClassnames, } = this.props;
    const nextClasses = this.getMenuClassesForResize(containerClassnames);
    setContainerClassnames(0, nextClasses.join(' '), selectedMenuHasSubItems);
  };

  getMenuClassesForResize = (classes) => {
    const { menuHiddenBreakpoint, subHiddenBreakpoint, } = this.props;
    let nextClasses = classes.split(' ').filter((x) => x !== '');
    const windowWidth = window.innerWidth;
    if (windowWidth < menuHiddenBreakpoint) {
      nextClasses.push('menu-mobile');
    } else if (windowWidth < subHiddenBreakpoint) {
      nextClasses = nextClasses.filter((x) => x !== 'menu-mobile');
      if (
        nextClasses.includes('menu-default') &&
        !nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses.push('menu-sub-hidden');
      }
    } else {
      nextClasses = nextClasses.filter((x) => x !== 'menu-mobile');
      if (
        nextClasses.includes('menu-default') &&
        nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses = nextClasses.filter((x) => x !== 'menu-sub-hidden');
      }
    }
    return nextClasses;
  };

  handleProps = () => {
    this.addEvents();
  };

  addEvents = () => {
    [('click', 'touchstart', 'touchend')].forEach((event) => document.addEventListener(event, this.handleDocumentClick, true));
  };

  setSelectedLiActive = (callback) => {
    const { selectedParentMenu, } = this.state;

    const oldli = document.querySelector('.sub-menu  li.active');
    if (oldli != null) {
      oldli.classList.remove('active');
    }

    const oldliSub = document.querySelector('.third-level-menu  li.active');
    if (oldliSub != null) {
      oldliSub.classList.remove('active');
    }

    /* set selected parent menu */
    const selectedSublink = document.querySelector(
      '.third-level-menu  a.active'
    );
    if (selectedSublink != null) {
      selectedSublink.parentElement.classList.add('active');
    }

    const selectedlink = document.querySelector('.sub-menu  a.active');

    if (selectedlink != null) {
      selectedlink.parentElement.classList.add('active');
      this.setState(
        {
          selectedParentMenu: selectedlink.parentElement.parentElement.getAttribute(
            'data-parent'
          ),
        },
        callback
      );
    } else {
      const selectedParentNoSubItem = document.querySelector(
        '.main-menu  li a.active'
      );

      if (selectedParentNoSubItem != null) {
        const { location, match, } = this.props;
        let parentMenu = location.pathname.substring(match.path.length + 1);
        if (parentMenu === '') {
          parentMenu = selectedParentNoSubItem.getAttribute('data-flag');
        }
        this.setState(
          {
            selectedParentMenu: parentMenu,
          },
          callback
        );
      } else if (selectedParentMenu === '') {
        this.setState(
          {
            selectedParentMenu: menuItems[0].id,
          },
          callback
        );
      }
    }
  };

  componentDidUpdate(prevProps) {
    const { location, } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      this.setSelectedLiActive(this.setHasSubItemStatus);

      window.scrollTo(0, 0);
    }
    this.handleProps();
  }

  setHasSubItemStatus = () => {
    const { changeSelectedMenuHasSubItems, } = this.props;
    const hasSubmenu = this.getIsHasSubItem();
    changeSelectedMenuHasSubItems(hasSubmenu);
    this.toggle();
  };

  getIsHasSubItem = () => {
    const { selectedParentMenu, } = this.state;
    const menuItem = menuItems.find((x) => x.id === selectedParentMenu);
    if (menuItem) {
      return !!(menuItem && menuItem.subs && menuItem.subs.length > 0);
    }
    return false;
  };

  toggle = () => {
    const {
      containerClassnames,
      menuClickCount,
      changeSelectedMenuHasSubItems,
      setContainerClassnames,
    } = this.props;
    const hasSubItems = this.getIsHasSubItem();
    changeSelectedMenuHasSubItems(hasSubItems);
    const currentClasses = containerClassnames ?
      containerClassnames.split(' ').filter((x) => x !== '') :
      '';
    let clickIndex = -1;

    if (!hasSubItems) {
      if (
        currentClasses.includes('menu-default') &&
        (menuClickCount % 4 === 0 || menuClickCount % 4 === 3)
      ) {
        clickIndex = 1;
      } else if (
        currentClasses.includes('menu-sub-hidden') &&
        (menuClickCount === 2 || menuClickCount === 3)
      ) {
        clickIndex = 0;
      } else if (
        currentClasses.includes('menu-hidden') ||
        currentClasses.includes('menu-mobile')
      ) {
        clickIndex = 0;
      }
    } else {
      if (currentClasses.includes('menu-sub-hidden') && menuClickCount === 3) {
        clickIndex = 2;
      } else if (
        currentClasses.includes('menu-hidden') ||
        currentClasses.includes('menu-mobile')
      ) {
        clickIndex = 0;
      }
    }
    if (clickIndex >= 0) {
      setContainerClassnames(clickIndex, containerClassnames, hasSubItems);
    }
  };

  componentWillUnmount() {
    this.removeEvents();
    window.removeEventListener('resize', this.handleWindowResize);
  }

  removeEvents = () => {
    ['click', 'touchstart', 'touchend'].forEach((event) => document.removeEventListener(event, this.handleDocumentClick, true));
  };

  openSubMenu = (e, menuItem) => {
    const {
      changeSelectedMenuHasSubItems,
      setContainerClassnames,
      addContainerClassname,
    } = this.props;
    const selectedParent = menuItem.id;
    const hasSubMenu = menuItem.subs && menuItem.subs.length > 0;
    changeSelectedMenuHasSubItems(hasSubMenu);
    if (!hasSubMenu) {
      this.setState({
        viewingParentMenu: selectedParent,
        selectedParentMenu: selectedParent,
      });
      this.toggle();
    } else {
      e.preventDefault();

      const { containerClassnames, menuClickCount, } = this.props;
      const currentClasses = containerClassnames ?
        containerClassnames.split(' ').filter((x) => x !== '') :
        '';

      if (!currentClasses.includes('menu-mobile')) {
        if (
          currentClasses.includes('menu-sub-hidden') &&
          (menuClickCount === 2 || menuClickCount === 0)
        ) {
          setContainerClassnames(3, containerClassnames, hasSubMenu);
        } else if (
          currentClasses.includes('menu-hidden') &&
          (menuClickCount === 1 || menuClickCount === 3)
        ) {
          setContainerClassnames(2, containerClassnames, hasSubMenu);
        } else if (
          currentClasses.includes('menu-default') &&
          !currentClasses.includes('menu-sub-hidden') &&
          (menuClickCount === 1 || menuClickCount === 3)
        ) {
          setContainerClassnames(0, containerClassnames, hasSubMenu);
        }
      } else {
        addContainerClassname('sub-show-temporary', containerClassnames);
      }
      this.setState({
        viewingParentMenu: selectedParent,
      });
    }
  };

  render() {
    const {
      selectedParentMenu,
      viewingParentMenu,
      collapsedMenus,
    } = this.state;

    return (
      <HeaderLayout
        selectedParentMenu={selectedParentMenu}
        viewingParentMenu={viewingParentMenu}
        collapsedMenus={collapsedMenus}
        openSubMenu={this.openSubMenu}
        toggleMenuCollapse={this.toggleMenuCollapse}
      />
    );
  }
}

const mapStateToProps = ({ menu, }) => {
  const {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems,
  } = menu;
  return {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems,
  };
};

const mapActionToProps = {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames,
  changeSelectedMenuHasSubItems,
};

export default withRouter(connect(mapStateToProps, mapActionToProps)(Sidebar));
