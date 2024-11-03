import React from 'react';
import Banner from '../conponents/Banner';
import Heading from '../conponents/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../conponents/Categories';

const Home = () => {
  const categories= useLoaderData()
  return (
    <div>
     
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading title={"Brows coffee by Category"} subtitle={"Choose your desired coffee category to brows through specific coffees that fit in your test"}></Heading>
      {/* categories tab section */}  
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>

      {/* Dynamic Nested components */}
    </div>
  );
};

export default Home;