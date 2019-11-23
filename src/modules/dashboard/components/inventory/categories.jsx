import React, { useState } from 'react';
import CategoriesLayout from './categories-layout';

const Categories = ({ match, }) => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedOrderOption, setSelectedOrderOption] = useState({
    column: 'title',
    label: 'Categoría',
  });
  const [orderOptions, setOrderOptions] = useState([
    { column: 'title', label: 'Categoría', }
  ]);
  const [pageSizes, setPageSizes] = useState([10, 20, 30, 50, 100]);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(10);
  const [totalItemCount, setTotalItemCount] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  const handleChangeSelectAll = (isToggle) => {
    if (selectedItems.length >= items.length) {
      if (isToggle) {
        setSelectedItems([]);
      }
    } else {
      setSelectedItems(items.map((x) => x.id));
    }
    document.activeElement.blur();
    return false;
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <CategoriesLayout
      match={match}
      handleChangeSelectAll={handleChangeSelectAll}
      selectedOrderOption={selectedOrderOption}
      orderOptions={orderOptions}
      pageSizes={pageSizes}
      startIndex={startIndex}
      endIndex={endIndex}
      totalItemCount={totalItemCount}
      modalOpen={modalOpen}
      toggleModal={toggleModal}
    />
  );
};

export default Categories;
