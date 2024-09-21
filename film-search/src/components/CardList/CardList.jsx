import styles from "./CardList.module.css";

function CardList({ children }) {
  return <div className={styles["card-list"]}>{children}</div>;
}

export default CardList;
