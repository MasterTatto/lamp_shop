const initialState = {
    basket: []
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDED_TO_BASKET' : {
            return {...state, basket: [...state.basket, action.data]}
        }
        case 'REMOVE_ITEM_BASKET' : {
            return {...state, basket: [...state.basket.filter((f) => f.id !== action.id)]}
        }
        default:
            return state
    }
}

export const addedToBasketAC = (data) => {
    return {type: 'ADDED_TO_BASKET', data}
}

export const removeItemFromBasket = (id) => {
    return {type: 'REMOVE_ITEM_BASKET', id}
}