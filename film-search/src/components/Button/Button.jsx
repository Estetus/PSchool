import styles from  "./Button.module.css";

function Button({ textBtn, onClick }) {
  return (
    <>
      <button className={styles["search-btn"]} onClick={onClick}>
        {textBtn}
      </button>
    </>
  );
}

export default Button;
