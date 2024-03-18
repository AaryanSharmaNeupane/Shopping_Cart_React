import React from "react";

export const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("items"));
  return (
    <section className="min-h-screen max-w-5xl m-auto ">
      {cartItems.length === 0 ? (
        <>
          <div className="flex justify-center items-center min-h-screen">
            <p className="text-5xl">You don't have any items!!</p>
          </div>
        </>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <div
              className="border
          shadow p-4 my-5 rounded-lg flex justify-between items-center"
            >
              <span className="flex items-center">
                <img
                  src={item.image}
                  className="max-w-16 rounded-lg mr-3"
                  alt="items"
                />
                <h1 className="font-semibold text-lg">
                  {item.productId} | {item.title}
                </h1>
              </span>

              <span className="flex justify-between items-center min-w-56">
                <span className="flex items-center">
                  <p className="font-bold text-lg mr-2">Amount: </p>
                  <p className="font-semibold text-lg shadow p-2 rounded-full bg-zinc-800 text-white">
                    {item.amount}
                  </p>
                </span>

                <button className=" shadow p-3 bg-red-900 hover:bg-red-700  rounded-lg text-white ">
                  Remove
                </button>
              </span>
            </div>
          </div>
        ))
      )}
    </section>
  );
};
