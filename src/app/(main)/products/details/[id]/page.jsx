import AddToCart from "@/components/AddToCart/AddToCart";
import styles from "./page.module.css";

const page = async ({ params }) => {
  const id = params.id;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={product.image} alt="product-image"/>
      <h1 className={styles.title}>{product.title}</h1>
      <strong>category : {product.category}</strong>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
      <strong>Rating : {product.rating.rate}⭐</strong>
    <AddToCart/>
    </div>
  );
};

export default page;