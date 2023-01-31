import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/userApi'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/constants'
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import styles from './Auth.module.css';
import cross from '../assets/svg/cross.svg';

const Auth = observer(({ textButton }) => {
  const { user } = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async (e) => {
    e.preventDefault()
    try {
      let data;

      if (isLogin) {
        data = await login(email, password)
        navigate(SHOP_ROUTE)
        console.log(data)
      } else {
        data = await registration(email, password)
        console.log(data)
      }
      user.setUser(user)
      user.setIsAuth(true)

    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div className={styles.wrapForm}>
      
     
      <form className={styles.authForm}>
      <img className={styles.cross} src={cross} alt="крестик закрытия" onClick={()=>navigate(SHOP_ROUTE)}/>
        <h2>Войдите или зарегистрируйтесь</h2>
        <input className={styles.formItem} type="email" placeholder='введите почту' value={email} onChange={e => setEmail(e.target.value)} />
        <input className={styles.formItem} type="password" placeholder='введите пароль' value={password} onChange={e => setPassword(e.target.value)} />

        {isLogin
          ?
          <div className={styles.toggleSpan}>
            <span>Нет аккаунта?</span>
            <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
          </div>
          :
          <div className={styles.toggleSpan}>
            <span>Есть аккаунт?</span>
            <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
          </div>
        }
        <button className={styles.formButton} onClick={click}>{textButton}</button>
      </form>
    </div>
  )
})

export default Auth