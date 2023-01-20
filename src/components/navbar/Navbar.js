import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../index'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
//import styles from './Navbar.module.scss'


const Navbar = observer( () => {                  //observer для отслеживания mobx в реалтайм для ререндера
    
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = ()=>{
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <nav>
            <NavLink to={SHOP_ROUTE}> КупиСлона</NavLink>
            <div>
                {user.isAuth
                    ?
                    <div>
                        <button onClick={()=> logOut()}> Выйти </button>
                        <button onClick={()=> navigate(ADMIN_ROUTE)}> Админ панель</button>
                    </div>
                    :
                    <div>
                        <button onClick={()=> navigate(LOGIN_ROUTE)}> Авторизация</button>
                    </div>}
            </div>

        </nav>
    )
})

export default Navbar