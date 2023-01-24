import React, { useState } from 'react';
import {observer} from 'mobx-react-lite';
import { createBrand } from '../../http/productApi';

const CreateBrand = observer( () => {
  const [brand, setBrand] = useState('')

  const addBrand = (e) => {
    e.preventDefault()
    createBrand({name:brand}).then(()=> setBrand(''))
  }

  return (
    <div>
      <h2>Добавить Бренд</h2>
      <form>
        <input type="text"
          value={brand}
          onChange={e => setBrand(e.target.value)}
          placeholder="Введите название бренда" />

        <button>Отмена</button>
        <button type="submit"
          onClick={addBrand}>Добавить</button>

      </form>
    </div>
  )
})

export default CreateBrand