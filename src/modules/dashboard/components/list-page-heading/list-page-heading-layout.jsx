import React from 'react';
import {
  Row,
  Button,
  ButtonDropdown,
  Input,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CustomInput,
  Collapse
} from 'reactstrap';

import { Colxx, Separator } from '../common/custom-bootstrap';
import Breadcrumb from '../breadcrumb';

import { DataListIcon, ThumbListIcon, ImageListIcon } from '../svg';

const ListPageHeadingLayout = (props) => {
  const {
    displayMode,
    changeDisplayMode,
    handleChangeSelectAll,
    changeOrderBy,
    changePageSize,
    selectedPageSize,
    selectedOrderOption,
    match,
    startIndex,
    endIndex,
    selectedItemsLength,
    itemsLength,
    totalItemCount,
    onSearchKey,
    orderOptions,
    pageSizes,
    toggleModal,
    heading,
    displayOptionsIsOpen,
    dropdownSplitOpen,
    toggleDisplayOptions,
  } = props;
  return (
    <Row>
      <Colxx xxs='12'>
        <div className='mb-2'>
          <h1>{heading}</h1>
          <div className='text-zero top-right-button-container'>
            <Button
              color='primary'
              size='lg'
              className='btn-shadow top-right-button mr-2'
              onClick={() => toggleModal()}
            >
              Nuevo
            </Button>
            <Button color='secondary' className='btn-shadow top-right-button'>
              <i className='simple-icon-trash' />
            </Button>
          </div>
          <Breadcrumb match={match} />
        </div>
        <div className='mb-2'>
          <Button
            color='empty'
            className='pt-0 pl-0 d-inline-block d-md-none'
            onClick={toggleDisplayOptions}
          >
            Opciones de vista
            {' '}
            <i className='simple-icon-arrow-down align-middle' />
          </Button>
          <Collapse
            isOpen={displayOptionsIsOpen}
            className='d-md-block'
            id='displayOptions'
          >
            <div className='d-flex justify-content-between'>
              <div className='d-flex'>
                <span className='mr-3 d-inline-block float-md-left'>
                  <a
                    href='#/'
                    className={`mr-2 view-icon ${
                      displayMode === 'list' ? 'active' : ''
                    }`}
                    onClick={() => changeDisplayMode('list')}
                  >
                    <DataListIcon />
                  </a>
                  <a
                    href='#/'
                    className={`mr-2 view-icon ${
                      displayMode === 'thumblist' ? 'active' : ''
                    }`}
                    onClick={() => changeDisplayMode('thumblist')}
                  >
                    <ThumbListIcon />
                  </a>
                  <a
                    href='#/'
                    className={`mr-2 view-icon ${
                      displayMode === 'imagelist' ? 'active' : ''
                    }`}
                    onClick={() => changeDisplayMode('imagelist')}
                  >
                    <ImageListIcon />
                  </a>
                </span>
                <div className='d-block d-md-inline-block pt-1'>
                  <div className='search-sm d-inline-block float-md-left mr-1 mb-1 align-top'>
                    <input
                      type='search'
                      name='keyword'
                      id='search'
                      placeholder='Buscar'
                      onKeyPress={(e) => onSearchKey(e)}
                    />
                  </div>
                  <UncontrolledDropdown className='mr-1 float-md-left btn-group mb-1'>
                    <DropdownToggle caret color='outline-dark' size='xs'>
                      {`Ordenar por ${selectedOrderOption.label}`}
                    </DropdownToggle>
                    <DropdownMenu>
                      {orderOptions.map((order, index) => {
                        return (
                          <DropdownItem
                            key={index}
                            onClick={() => changeOrderBy(order.column)}
                          >
                            {order.label}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className='d-none d-md-block float-md-right pt-1'>
                <span className='text-muted text-small mr-1'>{`${startIndex}-${endIndex} de ${totalItemCount} `}</span>
                <UncontrolledDropdown className='d-inline-block'>
                  <DropdownToggle caret color='outline-dark' size='xs'>
                    {selectedPageSize}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {pageSizes.map((size, index) => {
                      return (
                        <DropdownItem
                          key={index}
                          onClick={() => changePageSize(size)}
                        >
                          {size}
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
          </Collapse>
        </div>
        <Separator className='mb-5' />
      </Colxx>
    </Row>
  );
};

export default ListPageHeadingLayout;
