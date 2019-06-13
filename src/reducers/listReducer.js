import React from 'react';
import PropTypes from 'prop-types';
import { CONSTANTS } from "../actions/index";

let listID = 2;
let cardID = 3;
const initialState = [
    {
        title: "last episode",
        id:9,
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
                title : action.payload,
                cards : [],
                id : listID*3
            }
            listID= listID +7;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text : action.payload.text,
                cards : [],
                id : cardID*4
            }
            cardID = cardID + 1;
            console.log(action);
            const newState = state.map(list => {
                if(list.id === action.payload.listID){
                    return {
                        ...list,
                        cards: [...list.cards,
                            newCard
                        ]
                    }
                }
                else{
                    return list;
                }
            })
            listID= listID +1;
            return newState;
        default:
            return state;
    }
};

listReducer.propTypes = {

};

export default listReducer;