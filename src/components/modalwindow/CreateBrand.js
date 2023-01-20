import React from 'react'

const CreateBrand = () => {
  return (
    <div>
 <h2>Добавить Бренд</h2>
        <form>
            <input type="text" placeholder="введите бренд"/>
            
            <button>Отмена</button>
            <button>Добавить</button>
            
        </form>
    </div>
  )
}

export default CreateBrand