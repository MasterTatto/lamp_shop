const initialState = {
    basket: []
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDED_TO_BASKET' : {
            let card = action.data
            // const idx = card.indexOf(c => c.id === action.itemID)

            // const condidate = card[idx]
            // if (condidate) {
            //     condidate.count++
            //     card[idx] = condidate
            // } else {
            //     card.count = 1
            // }
            return {...state, basket: [...state.basket, card]}
        }
        case 'REMOVE_ITEM_BASKET' : {
            return {...state, basket: [...state.basket.filter((f) => f.id !== action.id)]}
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
