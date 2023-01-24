import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOneProduct } from '../http/productApi'
const ProductPage = () => {
  const [product,setProduct] = useState({info:[]})
  const {id} = useParams()
  
  useEffect(()=>{
     fetchOneProduct(id).then(data=>setProduct(data))
  },[])
  return (
    <>
    <div>PAge</div>
    <img src = {process.env.REACT_APP_API_URL + product.img} alt="фото товара"/>
    <h2> {product.name}</h2>
    <div>{product.price +' руб'}</div>
    <div>{product.rating}</div>
    <h1>Характеристики</h1>
    
    {product.info.map((info,index)=>
    <div key={info.id}> {info.title}: {info.description}</div>)}
    </>
  )
}

export default ProductPage