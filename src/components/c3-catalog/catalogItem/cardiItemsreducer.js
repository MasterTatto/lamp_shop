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
            items: [{
                img: img1r,
                price: '15',
                title: 'Два сердца "Я тебя люблю" (Ваш текст)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img2r,
                price: '55',
                title: 'Панда "Люблю тебя" (Ваш текст)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img3r,
                price: '70',
                title: 'Флэт - портрет (по фото с заливками)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img4r,
                price: '25',
                title: '3Д-светильник "Начало нашего пути" (текст ваш)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img5r,
                price: '35',
                title: 'Фото-светильник + надпись',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img6r, price: '25', title: 'Мишка "Тедди"', id: uuidv4(), like: false, isBuy: false, count: 0
            }, {
                img: img7r,
                price: '37',
                title: 'Сердце с именем (Ваш текст)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img8r,
                price: '25',
                title: 'Лайт - портрет (Прорисовка по контуру фотографии)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img9r,
                price: '5',
                title: 'Море и луна (Ваш текст)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img10r,
                price: '25',
                title: 'Мишка "Люблю тебя" (Ваш текст)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img11r, price: '25', title: 'Птички (Ваш текст)', id: uuidv4(), like: false, isBuy: false, count: 0
            }, {
                img: img12r,
                price: '25',
                title: 'Сердце и цветок (Ваш текст)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            },], cardID: cardID1
        }, [cardID2]: {
            items: [{
                img: img1k,
                price: '45',
                title: '3Д-светильник "Джерри"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img2k,
                price: '25',
                title: '3Д-светильник "Молния Маквин"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img3k,
                price: '25',
                title: '3Д Ночник "Звёздный единорог"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img4k,
                price: '25',
                title: '3Д-Ночник "Динозавр №2"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img5k, price: '25', title: 'Мишка "Тедди"', id: uuidv4(), like: false, isBuy: false, count: 0
            }, {
                img: img6k,
                price: '45',
                title: '3Д-светильник "Little Pony"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img7k,
                price: '25',
                title: 'Ночник "Эльза - Холодное сердце"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img8k,
                price: '25',
                title: 'Ночник "Холодное сердце Эльза и Анна"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img9k,
                price: '25',
                title: '3Д-светильник "Сова"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img10k,
                price: '25',
                title: 'Автомобиль " Porsche Panamera" (Порш панамера)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img11k,
                price: '25',
                title: '3Д-светильник "Стич"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img12k,
                price: '25',
                title: 'Ночник "Маленький единорог"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            },], cardID: cardID2
        }, [cardID3]: {
            items: [{
                img: img1a,
                price: '25',
                title: '3Д-светильник "Слон"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img2a,
                price: '25',
                title: '3Д-светильник "Мишка с сердцем"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img3a,
                price: '25',
                title: '3Д-светильник "Сова"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img4a,
                price: '35',
                title: '3Д-светильник "Фламинго"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img5a,
                price: '25',
                title: '3D-ночник "Два жирафа"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img6a, price: '25', title: '3D-ночник "Павлин"', id: uuidv4(), like: false, isBuy: false, count: 0
            }, {
                img: img7a,
                price: '25',
                title: '3Д-светильник "Колибри и кольцо"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img8a,
                price: '25',
                title: '3Д-светильник "Пони"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img9a,
                price: '25',
                title: 'Ночник "Панда"(Ваш текст)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img10a,
                price: '25',
                title: '3Д-светильник "Джерри"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img11a,
                price: '35',
                title: '3Д-светильник "Тираннозавр Рекс" (Динозавр)',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            }, {
                img: img12a,
                price: '25',
                title: '3Д-светильник "Белая акула"',
                id: uuidv4(),
                like: false,
                isBuy: false,
                count: 1
            },], cardID: cardID3
        }
    }, liked: [], basket: []
}

export const cardItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_LIKE' : {
            state.cards[action.cardID].items = state.cards[action.cardID].items.map((el) => el.id === action.itemID ? {
                ...el, like: !el.like
            } : el)
            return {...state}
        }

        case 'ADDED_TO_LIKED' : {
            const item = state.cards[action.cardID].items.filter((el) => el.id === action.itemID)
            return {...state, liked: [...state.liked, ...item]}
        }

        case 'REMOVED_LIKED_IN_PAGE' : {
            const item = state.liked.filter(f => f.id !== action.itemID)
            return {...state, liked: [...item]}
        }

        case 'TOGGLE_BASKET' : {
            state.cards[action.cardID].items = state.cards[action.cardID].items.map((el) => el.id === action.itemID ? {
                ...el, isBuy: !el.isBuy
            } : el)
            return {...state}
        }

        case 'ADDED_TO_BASKET' : {
            const item = state.cards[action.cardID].items.filter((el) => el.id === action.itemID)

            return {...state, basket: [...state.basket, ...item]}
        }

        case 'REMOVED_BASKET_IN_PAGE' : {
            const item = state.basket.filter(f => f.id !== action.itemID)
            return {...state, basket: [...item]}

        }

        case 'INCREMENT_BASKET_ITEM' : {
            const items = state.basket.map((el) => el.id === action.itemID ? {...el, count: el.count + 1} : el)

            return {...state, basket: [...items]}
        }

        case 'DECREMENT_BASKET_ITEM' : {
            const items = state.basket.map((el) => el.id === action.itemID ? {...el, count: el.count - 1} : el)

            return {...state, basket: [...items]}
        }

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

export const toggleBasketAC = (cardID, itemID) => {
    return {type: 'TOGGLE_BASKET', cardID, itemID}
}

export const addedToBasketAC = (cardID, itemID) => {
    return {type: 'ADDED_TO_BASKET', cardID, itemID}
}

export const removeBasketItemAC = (itemID) => {
    return {type: 'REMOVED_BASKET_IN_PAGE', itemID}
}

export const incrementBasketItemAC = (itemID) => {
    return {type: 'INCREMENT_BASKET_ITEM', itemID}
}

export const decrementBasketItemAC = (itemID) => {
    return {type: 'DECREMENT_BASKET_ITEM', itemID}
}
