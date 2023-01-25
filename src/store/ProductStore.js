import { makeAutoObservable } from "mobx"


export default class ProductStore {
    constructor() {
        this.types = []
        this.brands = []
        this.products = []
        this.selectedBrand = {}
        this.selectedType = {}
        this.page = 1
        this.totalCount = 0
        this.limit = 3
        makeAutoObservable(this)    // функ mobx следит за изменениями этих переменных и делает ререндер соответ компонентов
    }

    setTypes(types) {             //actions геттеры сеттеры
        this.types = types
    }
    setBrands(brands) {
        this.brands = brands
    }
    setProducts(products) {
        this.products = products
    }
    setSelectedType(type) {
        this.setPage(1)
        this.selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this.selectedBrand = brand
    }
    setPage(page) {
        this.page = page
    }
    setTotalCount(count) {
        this.totalCount = count
    }
    getSelectedType() {
        return this.selectedType
    }
    getSelectedBrand() {
        return this.selectedBrand
    }
    getTotalCount() {
        return this.totalCount
    }
    getPage(){
        return this.page
    }
    getLimit(){
        return this.limit
    }
    getTypes() {
        return this.types
    }
    getBrands() {
        return this.brands
    }
    getProducts() {
        return this.products
    }
    

}