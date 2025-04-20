import styles from "./page.module.css";
function layout({ children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>This is Navbar</nav>
      {children}
    </div>
  );
}

export default layout;