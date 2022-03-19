import React from 'react';
import Select from 'react-select';

const Filters = ({ handleSort, sortOrder }) => {
  const options = [
    { value: '', label: 'All Category' },
    { value: 'asc', label: 'A-Z' },
    { value: 'desc', label: 'Z-A' },
    // { value: 'position', label: 'All Position' }

  ];

  return (
    <div className="sortBy">

      <Select
        value={sortOrder}
        className="select-filter"
        onChange={handleSort}
        options={options}
      />
    </div>
  );
};

export default Filters;