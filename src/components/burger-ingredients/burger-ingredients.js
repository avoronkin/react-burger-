import React from 'react';
import {
    Counter,
    DeleteIcon,
    LockIcon,
    CurrencyIcon,
    Tab,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './styles.module.css'
import { ingredients } from '../../utils/data'
// Из библиотеки UI-компонентов возьмите следующие:
// счётчики,
// иконки,
// переключатели,
// типографику,
// систему отступов.
// У компонента свой кастомизированный скроллбар. 
// Подумайте над реализацией и возможным ограничением высоты блока, в том числе и на разных разрешениях экранов.

const Ingredient = (props) => {
    return (
        <div className='text text_type_main-default' style={{width: '50%'}}>
            <img alt={props.name} src={props.image}/>
            <h3><span className='pl-2'>{props.price} </span><CurrencyIcon type="primary" /></h3>
            <h4>{props.name}</h4>
        </div>
    )
}

const Ingredients = (props) => {
    return (
        <>
            <h2 className='text text_type_main-medium'>{props.name}</h2>
            <section className={styles.ingredients}>
                {props.ingredients.map((ingredient) => {
                    return (
                        <div className='text text_type_main-default' style={{width: '50%'}} key={ingredient.id}>
                            <img alt={ingredient.name} src={ingredient.image}/>
                            <h3>
                                <span className='pl-2'>{ingredient.price} </span>
                                <CurrencyIcon type="primary" />
                            </h3>
                            <h4>{ingredient.name}</h4>
                        </div>
                    )
                })}
            </section>
        </>
    )
}
export const BurgerIngredients = () => {
    return (
        <div>
            <nav className='pt-5' style={{ display: 'flex' }}>
                <Tab active>
                    Булки
                </Tab>
                <Tab>
                    Соусы
                </Tab>
                <Tab>
                    Начинки
                </Tab>
            </nav>
            <section className='custom-scroll' style={{width: '600px', height: '650px', overflowY: 'scroll'}}>

                <Ingredients 
                    name='Булки' 
                    ingredients={ingredients.filter(i => i.type === 'bun')}
                    />

                <Ingredients 
                    name='Соусы' 
                    ingredients={ingredients.filter(i => i.type === 'sauce')}
                    />
                
                <Ingredients 
                    name='Начинки' 
                    ingredients={ingredients.filter(i => i.type === 'main')}
                    />
            </section>
        </div>
    )
}
