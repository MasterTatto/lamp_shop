import {combineReducers, createStore} from "redux";
import {cardItemsReducer} from "../components/c3-catalog/catalogItem/cardiItemsreducer";
import {cardReducer} from "../components/c3-catalog/cardReduxer";
import {basketReducer} from "../components/c8-basket/basketReducer";
import {likedReducer} from "../components/c8-liked/likedReducer";


const combineReducer = combineReducers({
    card: cardReducer,
    cardItems: cardItemsReducer,
    basket: basketReducer,
    liked: likedReducer
})

export const store = createStore(combineReducer);

window.store = store