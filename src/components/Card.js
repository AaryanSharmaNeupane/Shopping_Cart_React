import React from "react";

export const Card = ({ item, handleCart }) => {
  return (
    <div className="flex flex-col justify-between  flex-wrap  shadow rounded-lg max-w-sm mb-5 ">
      <img src={item.image} alt="items" className="rounded-lg max-h-72" />
      <h1 className="font-semibold text-2xl p-3">{item.title}</h1>
      <p className=" text-md px-3">{item.description}</p>
      <button
        onClick={() => handleCart(item.id, item.title, item.image)}
        className="shadow rounded-md p-4 m-3 bg-blue-900 text-2xl font-bold text-slate-100 hover:bg-blue-800"
      >
        Add to cart
      </button>
    </div>
  );
};
