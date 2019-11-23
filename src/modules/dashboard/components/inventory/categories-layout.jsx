import React from 'react';
import { Row, Card, CardBody } from 'reactstrap';
import { Colxx, Separator } from '../common/custom-bootstrap';
import ListPageHeading from '../list-page-heading';
import CategoryModal from './category-modal';

const CategoriesLayout = ({
  match,
  handleChangeSelectAll,
  selectedOrderOption,
  orderOptions,
  pageSizes,
  startIndex,
  endIndex,
  totalItemCount,
  modalOpen,
  toggleModal,
}) => (
  <div className='categories disable-text-selection'>
    <ListPageHeading
      heading='Categorías de productos'
      match={match}
      handleChangeSelectAll={handleChangeSelectAll}
      selectedOrderOption={selectedOrderOption}
      orderOptions={orderOptions}
      pageSizes={pageSizes}
      startIndex={startIndex}
      endIndex={endIndex}
      totalItemCount={totalItemCount}
      toggleModal={toggleModal}
      // displayMode={displayMode}
      // changeDisplayMode={this.changeDisplayMode}
      // changeOrderBy={this.changeOrderBy}
      // changePageSize={this.changePageSize}
      // selectedPageSize={selectedPageSize}
      // selectedItemsLength={selectedItems ? selectedItems.length : 0}
      // itemsLength={items ? items.length : 0}
      // onSearchKey={this.onSearchKey}
    />
    <CategoryModal
      modalOpen={modalOpen}
      toggleModal={toggleModal}
    />
  </div>
);

export default CategoriesLayout;
