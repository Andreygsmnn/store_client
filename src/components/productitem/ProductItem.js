import React from 'react'
import { useNavigate } from "react-router-dom"
import { PRODUCT_ROUTE } from '../../utils/constants'

const ProductItem = ({product}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id ) }>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.rating}</div>
        <img width={150} height={150} src={process.env.REACT_APP_API_URL + product.img} 
        alt={`изображение ${process.env.REACT_APP_API_URL+product.name}`} />
    </div>
  )
}

export default ProductItem