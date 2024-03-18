import React, { useEffect, useState } from "react";
import items from "../data";
import { Card } from "../components";

export const Home = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [itemCount, setItemCount] = useState(0);

  const handleCart = (id, title, image) => {
    if (cartItems.length === 0) {
      setCartItems([{ productId: id, amount: 1, title: title, image: image }]);
    } else {
      let updatedCart = [...cartItems];
      let productFound = false;

      for (let index = 0; index < updatedCart.length; index++) {
        if (updatedCart[index]["productId"] === id) {
          updatedCart[index]["amount"] = updatedCart[index]["amount"] + 1;
          productFound = true;
          break;
        }
      }
      if (!productFound) {
        updatedCart.push({
          productId: id,
          amount: 1,
          title: title,
          image: image,
        });
      }
      setCartItems(updatedCart);
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
    setItemCount(cartItems.length);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("itemCount", itemCount);
  }, [itemCount]);

  return (
    <section className="max-w-7xl flex justify-between flex-wrap py-5 m-auto ">
      {items.map((item) => (
        <Card item={item} handleCart={handleCart} key={item.id} />
      ))}
    </section>
  );
};
