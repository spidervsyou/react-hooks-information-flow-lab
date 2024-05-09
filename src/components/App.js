import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ShoppingList from './ShoppingList';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
