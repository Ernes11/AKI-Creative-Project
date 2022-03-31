import React from 'react';
import Select from 'react-select';
import '../../sass/sort.scss'

const Filters = ({ handleSort, sortOrder }) => {
  const options = [
    { value: '', label: 'All Category' },
    { value: 'asc', label: 'A-Z' },
    { value: 'desc', label: 'Z-A' }

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