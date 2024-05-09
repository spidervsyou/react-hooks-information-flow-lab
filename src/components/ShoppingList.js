import React from 'react';
import Item from './Item';

function ShoppingList({ items, selectedCategory }) {
  const filteredItems = selectedCategory === 'all' ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <Filter onCategoryChange={onCategoryChange} />
      <ul>
        {filteredItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
