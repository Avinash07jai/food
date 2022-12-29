import React, { useState } from 'react';
import FoodCard from './FoodCard';
import Menu from './MenuApi';
import './FoodMenu.css';

const FoodMenu = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (categroy) => {
    const updated = Menu.filter((currentElement) => {
        return currentElement.categroy === categroy;
    });
    setMenuData(updated);
  }
  return (
    <>
    <nav className='navbar'>
      <div className='container'>
        <div className='row'>
          <div className='col-md'>
          <button onClick={() => filterItem('breakfast')}>Breakfast</button>
              <button onClick={() => filterItem('lunch')}>Lunch</button>
              <button onClick={() => filterItem('dinner')}>Dinner</button>
              <button onClick={() => filterItem('evening')}>Evening</button>
              <button onClick={() => setMenuData(Menu)}>All</button>
            </div>
        </div>
      </div>
    </nav>
      <FoodCard  menuData={menuData} />
    </>
  )
}

export default FoodMenu;
