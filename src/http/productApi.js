import { publicHost, authHost } from './index';



export const createType = async (type) => {
    const { data } = await authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await publicHost.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const { data } = await authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await publicHost.get('api/brand')
    return data
}

export const createProduct = async (product) => {
    const { data } = await authHost.post('api/product', product)
    return data
}

export const fetchProducts = async () => {
    const { data } = await publicHost.get('api/product')
    return data
}
export const fetchOneProduct = async (id) => {
    const { data } = await publicHost.get('api/product/'+id)
    return data 
}
