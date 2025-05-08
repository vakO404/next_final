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
    <div className={styles.container}>
      {cartProducts?.map((prod) => (
        <div key={prod.product.id} className={styles.itemWrapper}>
          <Image
            src={prod.product.image}
            width={70}
            height={70}
            alt={prod.product.title}
          />
          <div>
            <h4 className={styles.title_txt}> {prod.product.title}</h4>
            <br />
            <p className={styles.count_txt}>{prod.count} ცალი</p>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.cart} onClick={() => handleAddOne(prod.product)}>+</button>
            <button className={styles.cart} onClick={() => handleRemoveOne(prod.product)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;