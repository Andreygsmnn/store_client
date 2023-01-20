import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import ProductItem from '../productitem/ProductItem'

const ProductList = observer( () => {
    const {product} = useContext(Context)
  return (
    <div>
        {product.products.map(product =>
            <ProductItem key={product.id} product={product}/>
            )}
    </div>
  )
})

export default ProductList