import React from 'react'
import CreateBrand from '../components/modalwindow/CreateBrand'
import CreateProduct from '../components/modalwindow/CreateProduct'
import CreateType from '../components/modalwindow/CreateType'


const Admin = () => {
  
  return (
    <div>
      <CreateBrand />
      <CreateType />
      <CreateProduct />
    </div>
  )
}

export default Admin