import React,{useContext, useEffect} from 'react'
import BrandBar from '../components/brandbar/BrandBar'
import ProductList from '../components/productlist/ProductList'
import TypeBar from '../components/typebar/TypeBar'
import {observer} from 'mobx-react-lite'
import { Context } from '..'
import { fetchBrands, fetchProducts, fetchTypes } from '../http/productApi'

const Shop = observer(() => {
  const {product} = useContext(Context)

  useEffect(()=>{
    fetchTypes().then(data=>product.setTypes(data))
    fetchBrands().then(data=>product.setBrands(data))
    fetchProducts().then(data=>product.setProducts(data.rows))
  },[])

  return (
    <div>
      <TypeBar/>
      <BrandBar/>
      <ProductList/>
    </div>
  )
})

export default Shop