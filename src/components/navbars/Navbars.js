import React, { useContext } from "react";
import { Context } from "../../index.js";
import { useNavigate, NavLink } from "react-router-dom";
import styles from "./Navbars.module.css";
import InputSearch from "../../ui/inputSearch/InputSearch";
import delivery from "../../assets/svg/delivery.svg";
import profile from "../../assets/svg/profile.svg";
import cart from "../../assets/svg/cart.svg";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../../utils/constants";

const Navbars = (props) => {

    const { user } = useContext(Context)
    const navigate = useNavigate()




    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>

                <div className={styles.info}>
                    <span>Каталог</span>
                    <span>Оплата и доставка</span>
                    <span> Контакты</span>
                </div>
                <div className={styles.search}>
                    <InputSearch />
                </div>
                <div className={styles.profile}>
                    <div className={styles.profileItem}>
                        <img src={delivery} alt="Доставка" />
                        <span>Доставка</span>
                    </div>
                    {user.isAuth
                        ?
                        <div className={styles.profileItem} onClick={() => navigate(ADMIN_ROUTE)}>
                            <img src={profile} alt="Профиль" />
                            <span>Профиль</span>
                        </div>
                        :
                        <div className={styles.profileItem} onClick={() => navigate(LOGIN_ROUTE)}>
                            <img src={profile} alt="Профиль" />
                            <span>Профиль</span>
                        </div>
                    }
                    <div className={styles.profileItem}>
                        <img src={cart} alt="Корзина" />
                        <span>Корзина</span>
                    </div>

                </div>
            </div>
        </div >
    )
};

export default Navbars;
