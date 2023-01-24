import axios from 'axios'

const publicHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {   //функция которая подставляет токен в хедеры запросов
         config.headers.authorization = `Bearer ${localStorage.getItem('token')}`   //получаем токен из локального хранилища
         return config
}

authHost.interceptors.request.use(authInterceptor)   //подставляем в запросы аксиоса в свойство интерцепторы

export {publicHost, authHost}