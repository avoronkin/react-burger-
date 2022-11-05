import React from 'react';
import {
    DragIcon,
    ConstructorElement,
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './styles.module.css'
import { ingredients } from '../../utils/data'
// Из библиотеки UI-компонентов возьмите следующие:
// элементы списка,
// иконки,
// кнопку,
// типографику,
// систему отступов.
// Отображение списка организуйте самостоятельно. 
// Подумайте над реализацией и возможным ограничением высоты блока, 
// в том числе и на разных разрешениях экранов.
// Скроллбар не распространяется на заблокированные позиции конструктора.

export const BurgerConstructor = () => {
    return (
        <div >
            <div className='custom-scroll' style={{
                width: '600px', 
                height: '650px', 
                overflowY: 'scroll',
                display: 'flex', 
                flexDirection: 'column', 
                gap: '10px' }}>

                {ingredients.map((ingredient, index, array) => {
                    const type = index === 0 ? 'top' : (index === array.length - 1) ? 'bottom' : undefined
                    const extraClass = type ? 'pl-6' : ''
                    
                    return (
                        <div className={extraClass} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            {!type && <DragIcon type="primary" />}
                            <ConstructorElement 
                                text={ingredient.name}
                                thumbnail={ingredient.image}
                                price={ingredient.price}
                                type={type}
                                isLocked={ingredient.price % 3 === 0}
                                extraClass={'ml-2'}
                            />
                        </div>
                    )
                })}
            </div>
            <div className='p-6' style={{
                display: 'flex', 
                justifyContent: 'flex-end',
                alignItems: 'center'
                }}>
                <span className='text text_type_main-medium pr-4'>
                    610 <CurrencyIcon />
                </span>
                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </div>
            
    )
}
        // <ListIcon /><ConstructorElement {...ingredient} key={ingredient.id}/>