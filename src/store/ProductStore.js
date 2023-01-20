import { makeAutoObservable } from "mobx"


export default class ProductStore{
    constructor(){
        this.types = []
        this.brands = []
        
        this.products = [
            // {id:1, name:'Репитер Крокс SW60',price: 16799, rating:4, img:'https://kroks.ru/upload/shop_1/1/6/9/item_1698/item_1698.jpg'},
            // {id:2, name:'Репитер Vegatel Vt2',price: 123500, rating:1, img:'https://www.vegatel.ru/assets/cache/images/upd_2017/repiter/1800_3g/vt2-1800_3g_led/v1-3-692x562-277.jpg'},
            // {id:3, name:'Репитер Крокс SW60',price: 16799, rating:2, img:'https://kroks.ru/upload/shop_1/1/6/9/item_1698/item_1698.jpg'},
            // {id:4, name:'Антенна Vegatel pi',price: 1050, rating:4, img:'https://www.vegatel.ru/assets/cache/images/upd_2017/antena/ant-700_2700-11y/v1-2-692x562-e4d.jpg.webp'},
            // {id:5, name:'Репитер Крокс SW60',price: 16799, rating:3, img:'https://kroks.ru/upload/shop_1/1/6/9/item_1698/item_1698.jpg'}
        ]
        this.selectedBrand = {}
        this.selectedType = {}
        makeAutoObservable(this)    // функ mobx следит за изменениями этих переменных и делает ререндер соответ компонентов
    }

    setTypes(types){             //actions геттеры сеттеры
        this.types = types
    }
    setBrands(brands){
        this.brands = brands
    }
    setProducts(products){
        this.products = products
    }
    setSelectedType(type){
        this.selectedType = type
    }
    getTypes(){
        return this.types
    }
    getBrands(){
        return this.brands
    }
    getProducts(){
        return this.products
    }
    getSelectedType(){
        return this.selectedType
    }
    
}