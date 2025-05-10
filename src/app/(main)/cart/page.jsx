"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

function page() {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductsFromStorage = async () => {
    const products = await JSON.parse(localStorage.getItem("products"));
    setCartProducts(products);
  };

  useEffect(() => {
    getProductsFromStorage();
  }, []);

  const handleAddOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);
    products[index].count++;

    setCartProducts(products);
    localStorage.setItem("products", JSON.stringify([...products]));
  };

  const handleRemoveOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);
  
    if (products[index].count > 1) {
      products[index].count--;
    } else {
      products.splice(index, 1);
    }
  
    setCartProducts(products);
    localStorage.setItem("products", JSON.stringify(products));
  };
  
return (
  <>
    <div className={styles.cartHeader}>
      <span>Product</span>
      <span>Quantity</span>
      <span>Price</span>
    </div>
      
    {cartProducts?.map((prod) => (
      <div key={prod.product.id} className={styles.itemWrapper}>
        <div className={styles.productInfo}>
          <Image src={prod.product.image} width={70} height={70} alt={prod.product.title} />
          <div>
            <p className={styles.title_txt}>{prod.product.title}</p>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <button className={styles.cart} onClick={() => handleRemoveOne(prod.product)}>-</button>
          <span>{prod.count}</span>
          <button className={styles.cart} onClick={() => handleAddOne(prod.product)}>+</button>
        </div>

        <div className={styles.price_txt}>
          {prod.product.price * prod.count} ლარი
        </div>
      </div>
    ))}
  </>
);
}

export default page;