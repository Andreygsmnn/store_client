import { makeAutoObservable } from "mobx"


export default class UserStore{
    constructor(){
        this.isAuth = false
        this.user = {}
        makeAutoObservable(this)    // функ mobx следит за изменениями этих переменных и делает ререндер соответ компонентов
    }

    setIsAuth(boolean){             //actions геттеры сеттеры
        this.isAuth = boolean
    }
    setUser(user){
        this.user = user
    }

    getAuth(){
        return this.isAuth
    }
    getUser(){
        return this.user
    }
}