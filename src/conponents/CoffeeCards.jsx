import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();
  const [coffee,setCoffee]=useState([])
  useEffect(() => {
    if (category) {
      const filteredCardByCategory = [...data].filter((coffee)=>coffee.category === category);
    setCoffee(filteredCardByCategory);
    } else {
      setCoffee(data.slice(0,6));
  }
},[category,data])
  console.log(data);
  return (<div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
      {coffee.map((coffee)=><Card key={coffee.id} coffee={coffee}></Card>)}
    </div>
    <button className='btn btn-warning' onClick={() => navigate('/coffees')}>View more</button>
    </div>
  );
};

export default CoffeeCards;