import React from "react";
import styles from "./InputSearch.module.css";


const InputSearch = (props) => {
  return (
    <div>
       <input className={styles.inputSearch} type="text" placeholder="Поиск по каталогу"/>
    </div>
  )
};

export default InputSearch;
