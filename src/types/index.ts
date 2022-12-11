type IIngredientType = 'bun' | 'sauce' | 'main'

export interface IIngredient {
    _id: string
    name: string
    type: IIngredientType
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
}

export interface IIngredientTab {
    type: IIngredientType
    name: string
    active: boolean
}



