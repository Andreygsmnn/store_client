import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../../index.js'

const BrandBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <div>
            {product.brands.map(brand =>
                <div key={brand.id}>
                    {brand.name}
                </div>
            )}
        </div>
    )
})

export default BrandBar