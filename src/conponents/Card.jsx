import React from 'react';

const Card = ({ coffee }) => {
  const {name,image,category,origin,type,id, rating,popularity}=coffee||{}
  return (
   <div className="card card-compact bg-base-100 shadow-xl p-2">
  <figure className=' w-full h-48 overflow-hidden'>
    <img className=''
      src={image}
      alt="Shoes" />
  </figure>
  <div className="p-4">
        <h2 className="text-xl">Name: { name}</h2>
        <p>Category: {category}</p>
        <p>Type: {type}</p>
        <p>Origin: {origin}</p>
        <p>Rating: {rating}</p>
        <p>Popularity: {popularity}</p>
        
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default Card;