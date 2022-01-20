import {v4 as uuidv4} from "uuid";
import img1 from "../../assets/img/catrgory/1.jpg";
import img2 from "../../assets/img/catrgory/2.jpg";
import img3 from "../../assets/img/catrgory/3.jpg";
import img4 from "../../assets/img/catrgory/4.jpg";
import img5 from "../../assets/img/catrgory/5.jpg";
import img6 from "../../assets/img/catrgory/6.jpg";
import img7 from "../../assets/img/catrgory/7.jpg";
import img8 from "../../assets/img/catrgory/8.jpg";
import img9 from "../../assets/img/catrgory/9.jpg";
import img10 from "../../assets/img/catrgory/10.jpg";
import img11 from "../../assets/img/catrgory/11.jpg";
import img12 from "../../assets/img/catrgory/12.jpg";

export const cardID1 = uuidv4()
export const cardID2 = uuidv4()
export const cardID3 = uuidv4()
export const cardID4 = uuidv4()
export const cardID5 = uuidv4()
export const cardID6 = uuidv4()
export const cardID7 = uuidv4()
export const cardID8 = uuidv4()
export const cardID9 = uuidv4()
export const cardID10 = uuidv4()
export const cardID11 = uuidv4()
export const cardID12 = uuidv4()
const initialState = [
    {img: img1, title: 'Романтические', id: cardID1},
    {img: img2, title: 'Детские', id: cardID2},
    {img: img3, title: 'Животные', id: cardID3},
    {img: img4, title: 'Фото-светильники', id: cardID4},
    {img: img5, title: 'Техника', id: cardID5},
    {img: img6, title: 'MARVEL & DC', id: cardID6},
    {img: img7, title: 'Герои и персонажи', id: cardID7},
    {img: img8, title: 'Космос', id: cardID8},
    {img: img9, title: 'Спорт', id: cardID9},
    {img: img10, title: 'Эмаблемы команд', id: cardID10},
    {img: img11, title: '3D-фигуры', id: cardID11},
    {img: img12, title: 'Интерьер & Дизайн', id: cardID12},
]

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state
    }
}

