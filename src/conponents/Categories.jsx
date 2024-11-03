import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
 
  return (
    <div>

      <div role="tablist" className="tabs tabs-lifted">
        {
          categories.map(category =>  (<NavLink to={`/category/${category.category}`} key={category.category}  role="tab" className={({isActive})=>`tab text-2xl font-thin ${isActive?'tab-active text-[26px]':''}`}>{ category.category}</NavLink>))
        }
      </div>

    </div>
  );
};

export default Categories;

   