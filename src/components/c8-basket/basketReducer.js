const initialState = {
    basket: []
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDED_TO_BASKET' : {
            let card = action.data
            return {...state, basket: [...state.basket, card]}
        }
        case 'REMOVE_ITEM_BASKET' : {
            return {...state, basket: [...state.basket.filter((f) => f.id !== action.id)]}
        }
        case 'DECREMENT_BASKET_ITEM' : {
            const currentItem = state.basket.filter(f => f.id === action.id)
            const otherItem = state.basket.filter(f => f.id !== action.id)
            currentItem.pop()
            const answer = [...currentItem, ...otherItem]
            return {...state, basket: answer}
        }

        default:
            return state
    }
}

export const addedToBasketAC = (data, itemID) => {
    return {type: 'ADDED_TO_BASKET', data, itemID}
}

export const removeItemFromBasket = (id) => {
    return {type: 'REMOVE_ITEM_BASKET', id}
}

export const decrementItemAC = (id) => {
    return {type: 'DECREMENT_BASKET_ITEM', id}
}
