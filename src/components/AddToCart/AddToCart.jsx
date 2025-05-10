"use client";
import styles from "./AddToCart.module.css";
import { useRouter } from "next/navigation";


function AddToCart({ product }) {
  const router = useRouter();
  console.log("product prop:", product);
  const handleAddCart = async () => {
    const results = await JSON.parse(localStorage.getItem("products"));
    if (results === null) {
      localStorage.setItem(
        "products",
        JSON.stringify([{ product: product, count: 1 }])
      );
    } else {
      const index = results.findIndex((item) => item.product.id === product.id);

      if (index > -1) {
        results[index].count++;
        router.replace("/cart")
        
      } else {
        results.push({ product: product, count: 1 });
        router.replace("/cart")
      }

      localStorage.setItem("products", JSON.stringify([...results]));
    }
  };

  return <button className={styles.addToCart_btn} onClick={handleAddCart}>Add to Cart</button>;
}

export default AddToCart;
