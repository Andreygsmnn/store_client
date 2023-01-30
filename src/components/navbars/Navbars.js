import React from "react";
import styles from "./Navbars.module.css";
import InputSearch from "../../ui/inputSearch/InputSearch";
import delivery from "../../assets/svg/delivery.svg";
import profile from "../../assets/svg/profile.svg";
import cart from "../../assets/svg/cart.svg";

const Navbars = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>

                <div className={styles.info}>
                    <span>Каталог</span>
                    <span>Оплата и доставка</span>
                    <span> Контакты</span>
                </div>
                <div className={styles.search}>
                    <InputSearch/>
                </div>
                <div className={styles.profile}>
                    <div className={styles.profileItem}>
                        <img src={delivery} alt="доставка" />
                        <span>Доставка</span>
                    </div>
                    <div className={styles.profileItem}>
                        <img src={profile} alt="доставка" />
                        <span>Профиль</span>
                    </div>
                    <div className={styles.profileItem}>
                        <img src={cart} alt="доставка" />
                        <span>Корзина</span>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Navbars;
