import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footerParent}>
      <footer className={styles.footerChild}>
        <p className={styles.footer}>
          &copy; CodeItFinal. All rights reserved.
        </p>
        <div className={styles.footerCont}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
