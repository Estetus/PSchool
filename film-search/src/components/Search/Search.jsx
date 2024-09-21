import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Search.module.css";

function Search() {
  const [inputData, setInputData] = useState("");

  const inputChange = (e) => {
    setInputData(e.target.value);
  };

  const seacrhItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <form className={styles["main-text"]} onSubmit={seacrhItem}>
      <img src="./Left Icon.svg" className={styles["form-loupe"]} />
      <input
        className={styles["input-search"]}
        type="text"
        name="Название фильма"
        value={inputData}
        onChange={inputChange}
        placeholder="Введите название"
      />

      <Button textBtn="Искать" />
    </form>
  );
}

export default Search;
