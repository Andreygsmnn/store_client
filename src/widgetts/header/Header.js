import React from "react";
import Contacts from "../../components/contacts/Contacts";
import Navbar from "../../components/navbar/Navbar";
import Navbars from "../../components/navbars/Navbars";
import styles from "./Header.module.css";

//не забыть интегрировать navbar в navbars
const Header = (props) => {
  return (
    <header className={styles.wrapper}>
      <Contacts />
      <Navbars />
      
      {/* <Navbar /> */}
    </header>
  )
};

export default Header;
