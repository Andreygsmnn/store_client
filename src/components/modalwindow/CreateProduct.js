import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import { createProduct, fetchBrands, fetchTypes } from '../../http/productApi'

const CreateProduct = observer(() => {
    const { product } = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchBrands().then(data => product.setBrands(data))
    }, [])

    const addInfo = (e) => {
        e.preventDefault()
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }
    const selectedFile = e => {
        setFile(e.target.files[0])
    }
    const addProduct = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', product.selectedBrand.id)
        formData.append('typeId', product.selectedType.id)
        formData.append('info', JSON.stringify(info))
        console.log(product.selectedBrand.id)
        console.log(product.selectedType.id)
        console.log(`${price}`)
        console.log(name)
        createProduct(formData).then(data => console.log(data))
    }
    return (
        <div>
            <h2>Добавить продукт</h2>
            <form>
                <input type="text"
                    placeholder="Название продукта"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <input type="number"
                    placeholder="цена"
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                />
                <br />

                <input type="file" onChange={selectedFile} />
                <br />
                <label htmlFor="brands">Выбрать бренд</label>

                <select id="brands" size="5">

                    {product.brands.map(brand => <option
                        key={brand.id}
                        onClick={() => product.setSelectedBrand(brand) }
                    >{brand.name}</option>)}

                </select>

                <br />

                <label htmlFor="types" >Выбрать тип</label>
                <select id="types" size="5">
                    {product.types.map(type => <option
                        key={type.id}
                        onClick={() => product.setSelectedType(type)}
                    >{type.name}</option>)}
                </select>


                <br />
                
                <button type="submit" onClick={addProduct}>Добавить продукт</button>

            </form> <br />
            <button
                onClick={addInfo}
            >Добавить новое свойство</button>

            {info.map(i =>
                <div key={i.number}>
                    <form>
                        <input type="text"
                            placeholder="название свойства"
                            value={i.title}
                            onChange={(e) => changeInfo('title', e.target.value, i.number)} /><br />

                        <input type="text"
                            placeholder="описание свойства"
                            value={i.description}
                            onChange={(e) => changeInfo('description', e.target.value, i.number)}
                        /><br />
                        <button>Принять</button><br />
                        <button>Отмена</button>

                    </form>
                </div>)}
            {/* <button onClick={removeInfo(i.number)}>Удалить свойство</button>  реализовать удаление*/}

        </div>
    )
})

export default CreateProduct