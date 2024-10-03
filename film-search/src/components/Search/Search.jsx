<<<<<<< HEAD
import { useState, useRef } from "react";
import Button from "../Button/Button";
import styles from "./Search.module.css";
import Input from "../Input/Input";


function Search() {
  const [inputData, setInputData] = useState("");
  const searchRef = useRef();
  const buttonRef = useRef();
=======
import { useState } from "react";
import Button from "../Button/Button";
import "./Search.css";

function Search() {
  const [inputData, setInputData] = useState("");
>>>>>>> e8907b933747af60d07b67d18f767f4d3b27e771

  const inputChange = (e) => {
    setInputData(e.target.value);
  };

  const seacrhItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
<<<<<<< HEAD
    setInputData("");
=======
>>>>>>> e8907b933747af60d07b67d18f767f4d3b27e771
    console.log(formProps);
  };

  return (
<<<<<<< HEAD
    
    <form className={styles["main-text"]} onSubmit={seacrhItem}>
      <img src="./Left Icon.svg" className={styles["form-loupe"]} />
      <Input
        ref={searchRef}
=======
    <form className="main-text" onSubmit={seacrhItem}>
      <img src="./Left Icon.svg" className="form-loupe" />
      <input
        className="input-search"
>>>>>>> e8907b933747af60d07b67d18f767f4d3b27e771
        type="text"
        name="Название фильма"
        value={inputData}
        onChange={inputChange}
        placeholder="Введите название"
      />

<<<<<<< HEAD
      <Button ref={buttonRef} text="Искать" />
=======
      <Button textBtn="Искать" />
>>>>>>> e8907b933747af60d07b67d18f767f4d3b27e771
    </form>
  );
}

export default Search;
