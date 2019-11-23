import React, { useState } from 'react';
import ListPageHeadingLayout from './list-page-heading-layout';

const ListPageHeading = (props) => {
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);

  const toggleDisplayOptions = () => {
    setDisplayOptionsIsOpen(!displayOptionsIsOpen);
  };

  return (
    <ListPageHeadingLayout
      {...props}
      displayOptionsIsOpen={displayOptionsIsOpen}
      toggleDisplayOptions={toggleDisplayOptions}
    />
  );
};

export default ListPageHeading;
