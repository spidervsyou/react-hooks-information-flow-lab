import React from 'react';

function Filter({ onCategoryChange }) {
  const handleChange = (e) => {
    onCategoryChange(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="all">All</option>
      <option value="fruit">Fruit</option>
      <option value="vegetable">Vegetable</option>
      {/* Add more options as needed */}
    </select>
  );
}

export default Filter;
