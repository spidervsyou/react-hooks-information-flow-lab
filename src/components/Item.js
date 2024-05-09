import React from 'react';

function Item({ item }) {
  const handleItemClick = () => {
    // Handle item click event if needed
  };

  return (
    <li onClick={handleItemClick}>
      {item.name}
    </li>
  );
}

export default Item;
