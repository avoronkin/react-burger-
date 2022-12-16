import {
    ConstructorElement,
    DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import {  moveBurgerIngredient, removeBurgerIngredient } from '../../services/store/burger-constructor/actions'
import { useDrag, useDrop } from 'react-dnd'
import { DND_TYPES } from '../../constants'
import { IIngredient } from '../../types'
import type { XYCoord } from 'dnd-core'
import styles from './internal-ingredient.module.css'
import { useAppDispatch } from '../../hooks'
import { useRef } from 'react'

interface DragItem {
    index: number
}

export const InternalIngredient = ({ ingredient, index }: { ingredient: IIngredient, index: number }) => {
    const dispatch = useAppDispatch()
    const deleteHandler = () => dispatch(removeBurgerIngredient(ingredient))

    const ref = useRef<HTMLDivElement>(null)

    const [, drop] = useDrop<DragItem>({
        accept: DND_TYPES.INTERNAL,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            dispatch(moveBurgerIngredient(hoverIndex, dragIndex))

            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: DND_TYPES.INTERNAL,
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1

    drag(drop(ref))

    return (
        <div
            style={{ opacity }}
            ref={ref}
            className={styles.ingridient}
        >
            <DragIcon type='primary' />
            <ConstructorElement
                text={ingredient.name}
                thumbnail={ingredient.image}
                price={ingredient.price}
                isLocked={false}
                extraClass={'ml-2'}
                handleClose={deleteHandler}
            />
        </div>
    )
}
