import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import styles from './TypeBar.module.css';
import filter from '../../assets/svg/filter.svg';


const TypeBar = observer(() => {    //будет расположен слева в Shop (категории по сути)
    const { product } = useContext(Context)

    return (
        <div className={styles.wrapper}>
            <div className={styles.filterView}>
                <img src={filter} alt="фильтр"/>
                <span>Фильтр</span>
            </div>

            <div className={styles.typeView}>
                {product.types.map(type =>
                    <div className={styles.item} key={type.id}

                    // active={type.id === product.selectedType.id}

                    // onClick={()=> product.setSelectedType(type)}
                    >


                        {type.name}
                    </div>)}
            </div>
        </div>
    )
})

export default TypeBar