import Image from "next/image";
import styles from "./ProductItem.module.css";

function ProductItem({ item }) {
  console.log(item);
  return (
    <section className={styles.itemContainer}>
      <div>
        <div className={styles.imageContainer}>
          <Image src={item.image} width={224} alt="item-image" />
        </div>
        <div>item name</div>
      </div>
      <div>
        <div>
          <p>{item.price}</p>
          <p>120 ლარი ყოველთვიურად</p>
        </div>
        <Image src="globe.svg" alt="favorite-icon" />
      </div>
    </section>
  );
}

export default ProductItem;