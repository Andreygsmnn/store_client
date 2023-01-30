import React from "react";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/constants";
import styles from "./Contacts.module.css";
import logo from "../../assets/images/logo.png";
import location from "../../assets/svg/location.svg";
import email from "../../assets/svg/email.svg";
import phone from "../../assets/svg/phone.svg";

const Contacts = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <NavLink to={SHOP_ROUTE}>
            <img src={logo} alt="Лого" />
          </NavLink>
        </div>


        <div className={styles.contacts}>
          <div className={styles.location}>
            <img src={location} alt="Локация" />
            <span>г. Нижний Новгород, ул.Касьянова д.6</span>
          </div>

          <div className={styles.email}>
            <img src={email} alt="электронная почта" />
            <span>itv-52@yandex.ru</span>
          </div>

          <div className={styles.phone}>
            <img src={phone} alt="телефон" />
            <div>
              <span>+79873940474</span>
              <span>+79160089364</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contacts;

