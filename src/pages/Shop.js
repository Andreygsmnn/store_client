import React, { useContext, useEffect } from 'react'
import BrandBar from '../components/brandbar/BrandBar'
import ProductList from '../components/productlist/ProductList'
import TypeBar from '../widgetts/typebar/TypeBar'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchBrands, fetchProducts, fetchTypes } from '../http/productApi';
import styles from "./Shop.module.css";


const Shop = observer(() => {
  const { product } = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data))
    fetchBrands().then(data => product.setBrands(data))
    fetchProducts().then(data => product.setProducts(data.rows))
  }, [])

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <TypeBar />
        <BrandBar />
        <ProductList />
      </div>
    </div>
  )
})

export default Shop