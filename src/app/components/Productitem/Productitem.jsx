import Image from "next/image";
import styles from "./ProductItem.module.css";

function ProductItem({ item }) {
  console.log(item);
  return (
    <section className={styles.itemContainer}>
      <div>
        <div className={styles.imageContainer}>
          <Image src={item.Image} width={224} alt="item-image" />
        </div>
        <div>item სახელი</div>
      </div>
      <div>
        <div>
          <p>1600ლ</p>
          <p>120 ლარი ყოველთვიურად</p>
        </div>
        <Image src="globe.svg" alt="favorite-icon" />
      </div>
    </section>
  );
}

export default ProductItem;