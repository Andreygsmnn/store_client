import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'


const TypeBar = observer(() => {    //будет расположен слева в Shop (категории по сути)
    const { product } = useContext(Context)

    return (
        <div>
            {product.types.map(type =>
                <div key={type.id}

                // active={type.id === product.selectedType.id}

                // onClick={()=> product.setSelectedType(type)}
                >


                    {type.name}
                </div>)}
        </div>
    )
})

export default TypeBar