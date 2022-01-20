const initialState = {
    liked: []
}

export const likedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDED_TO_LIKED' : {
            return {...state, liked: [...state.liked, action.data]}
        }
        default:
            return state
    }
}

// export const addedToLikedAC = (data) => {
//     return {type: 'ADDED_TO_LIKED', data}
// }
