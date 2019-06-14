import React from 'react';
import PropTypes from 'prop-types';
import { CONSTANTS } from "../actions/index";
import { type } from 'os';

let listID = 2;
let cardID = 3;
const initialState = [
    {
        title: "last episode",
        id: 9,
        cards: [
            {
                id: 90,
                text: "we created something",
            },
            {
                id: 91,
                text: "we created something 1",
            }
        ]
    },
    {
        title: "this episode",
        id: 1,
        cards: [
            {
                id: 10,
                text: "this episode 0",
            },
            {
                id: 11,
                text: "this episode 1",
            }
        ]
    },
    {
        title: "next episode",
        id: 2,
        cards: [
            {
                id: 20,
                text: "next episode 0",
            },
            {
                id: 21,
                text: "next episode 1",
            },
            {
                id: 22,
                text: "next episode 2",
            },
            {
                id: 23,
                text: "next episode 3",
            }
        ]
    }
];
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SOMETHING':
            return Object.assign({}, state, {});
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID * 3
            }
            listID = listID + 7;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:{
            const newCard = {
                text: action.payload.text,
                cards: [],
                id: cardID * 4
            }
            cardID = cardID + 1;
            console.log(action);
            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards,
                            newCard
                        ]
                    }
                }
                else {
                    return list;
                }
            })
            listID = listID + 1;
            return newState;
        }
        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId } = action.payload;
            const myNewState = [...state];
            // ******************************************
            // AYNI LİSTE İÇİNDE
            // ******************************************
            if (droppableIdStart === droppableIdEnd) {
                const myList = state.find(item => item.id === parseInt(droppableIdStart));
                console.log(myList);
                // aşağıdaki splice metodu şu görevi görüyor.
                // droppableIndexStart'ıncı indexten başla 
                // ve 1 tane elemanı sil
                const card = myList.cards.splice(droppableIndexStart, 1);
                console.log(droppableIndexStart);
                // aşağıdaki splice metodu ise droppableIndexEnd'ıncı indexten başla
                // 0 eleman sil, ve araya geri kalan cardları ekle
                myList.cards.splice(droppableIndexEnd,0,...card);
            }

             // ******************************************
            // LİSTE DEĞİŞİMİ
            // ******************************************
            if(droppableIdEnd !== droppableIdStart){
                // aşağıda state'te ki tüm listelere baktık
                // sürüklemeye başlanan card'ın 
                // sürüklenmeye başlandığı lidteyi bulduk
                const startList = state.find(item => item.id === parseInt(droppableIdStart));
                // aşağıda sürüklenmeye başlanan card'ı o listeden sildik
                const card = startList.cards.splice(droppableIndexStart,1);
                // sürüklenmenin bittiği listeyi bulduk 
                const endList = state.find(item => item.id === parseInt(droppableIdEnd) )
                // sürüklenmenin bittiği listenin
                // hangi index'e geldiğini bulup 0 card silerek
                // geri kalan card'lara dokunmadan ekledik
                endList.cards.splice(droppableIndexEnd,0, ...card);
            }
            return myNewState;
            // ******************************************
        default:
            return state;
    }
};

listReducer.propTypes = {

};

export default listReducer;