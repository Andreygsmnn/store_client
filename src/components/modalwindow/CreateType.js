import React,{useState} from 'react'
import { createType } from '../../http/productApi'


const CreateType =() => {
  const [value, setValue]= useState('')
  
  const addType = (e)=> {
    e.preventDefault()
        createType({name:value}).then(data => setValue(''))
  }


  return (
    <div>
        <h2>Добавить Тип</h2>
        <form>
            <input type="text" 
            value={value}
            onChange = {e=> setValue(e.target.value)}
            placeholder="введите тип"/>
            <button onClick={addType}>Добавить</button>
            
        </form>
    </div>
  )
}

export default CreateType