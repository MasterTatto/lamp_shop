import {cardID1, cardID2, cardID3} from "../cardReduxer";
import img1r from "../../../assets/img/catrgory/romans/1.jpg";
import {v4 as uuidv4} from "uuid";
import img2r from "../../../assets/img/catrgory/romans/2.jpg";
import img3r from "../../../assets/img/catrgory/romans/3.jpg";
import img4r from "../../../assets/img/catrgory/romans/4.jpg";
import img5r from "../../../assets/img/catrgory/romans/5.jpg";
import img6r from "../../../assets/img/catrgory/romans/6.jpg";
import img7r from "../../../assets/img/catrgory/romans/7.jpg";
import img8r from "../../../assets/img/catrgory/romans/8.jpg";
import img9r from "../../../assets/img/catrgory/romans/9.jpg";
import img10r from "../../../assets/img/catrgory/romans/10.jpg";
import img11r from "../../../assets/img/catrgory/romans/11.jpg";
import img12r from "../../../assets/img/catrgory/romans/12.jpg";
import img1k from "../../../assets/img/catrgory/kids/1.jpg";
import img2k from "../../../assets/img/catrgory/kids/2.jpg";
import img3k from "../../../assets/img/catrgory/kids/3.jpg";
import img4k from "../../../assets/img/catrgory/kids/4.jpg";
import img5k from "../../../assets/img/catrgory/kids/5.jpg";
import img6k from "../../../assets/img/catrgory/kids/6.jpg";
import img7k from "../../../assets/img/catrgory/kids/7.jpg";
import img8k from "../../../assets/img/catrgory/kids/8.jpg";
import img9k from "../../../assets/img/catrgory/kids/9.jpg";
import img10k from "../../../assets/img/catrgory/kids/10.jpg";
import img11k from "../../../assets/img/catrgory/kids/11.jpg";
import img12k from "../../../assets/img/catrgory/kids/12.jpg";
import img1a from "../../../assets/img/catrgory/animals/1.jpg";
import img2a from "../../../assets/img/catrgory/animals/2.jpg";
import img3a from "../../../assets/img/catrgory/animals/3.jpg";
import img4a from "../../../assets/img/catrgory/animals/4.jpg";
import img5a from "../../../assets/img/catrgory/animals/5.jpg";
import img6a from "../../../assets/img/catrgory/animals/6.jpg";
import img7a from "../../../assets/img/catrgory/animals/7.jpg";
import img8a from "../../../assets/img/catrgory/animals/8.jpg";
import img9a from "../../../assets/img/catrgory/animals/9.jpg";
import img10a from "../../../assets/img/catrgory/animals/10.jpg";
import img11a from "../../../assets/img/catrgory/animals/11.jpg";
import img12a from "../../../assets/img/catrgory/animals/12.jpg";

const initialState = {
    cards: {
        [cardID1]: {
            items: [
                {img: img1r, price: '15', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img2r, price: '55', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img3r, price: '70', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img4r, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img5r, price: '35', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img6r, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img7r, price: '37', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img8r, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img9r, price: '5', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img10r, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img11r, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img12r, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
            ],
            cardID: cardID1
        },
        [cardID2]: {
            items: [
                {img: img1k, price: '45', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img2k, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img3k, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img4k, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img5k, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img6k, price: '45', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img7k, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img8k, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img9k, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img10k, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img11k, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img12k, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
            ],
            cardID: cardID2
        },
        [cardID3]: {
            items: [
                {img: img1a, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img2a, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img3a, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img4a, price: '35', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img5a, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img6a, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img7a, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img8a, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img9a, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img10a, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img11a, price: '35', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
                {img: img12a, price: '25', title: 'Два сердца "Я тебя люблю" (Ваш текст)', id: uuidv4(), like: false},
            ],
            cardID: cardID3
        }
    },
    liked: []
}

export const cardItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_LIKE' : {

            state.cards[action.cardID].items = state.cards[action.cardID].items.map((el) => el.id === action.itemID ? {
                ...el,
                like: !el.like
            } : el)
            return {...state}
        }

        case 'ADDED_TO_LIKED' : {
            const item = state.cards[action.cardID].items.filter((el) => el.like && el.id === action.itemID)
            const count = state.liked.filter(f => f.id === action.itemID)
            if (count >= 1) return
            return {...state, liked: [...state.liked, ...item]}
        }

        case 'REMOVED_LIKED_IN_PAGE' : {
            return {...state, liked: [...state.liked.filter((f) => f.id !== action.itemID)]}
        }

        // case 'REMOVE_LIKED_IN_CATEGORY' : {
        //     const item = state.cards[action.cardID].items.filter((el) => el.id !== action.itemID)
        //     debugger
        //     return {...state, liked: [...state.liked, delete item[action.cardID]]}
        // }
        default:
            return state
    }
}

export const toggleLikeAC = (cardID, itemID) => {
    return {type: 'TOGGLE_LIKE', cardID, itemID}
}

export const removeLikeItemAC = (itemID) => {
    return {type: 'REMOVED_LIKED_IN_PAGE', itemID}
}

export const addedToLikedAC = (cardID, itemID) => {
    return {type: 'ADDED_TO_LIKED', cardID, itemID}
}
//
// export const removeLikedInCategory = (cardID, itemID) => {
//     return {type: 'REMOVE_LIKED_IN_CATEGORY', cardID, itemID}
// }
