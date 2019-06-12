import React from 'react';
import PropTypes from 'prop-types';
const initialState = [
    {
        title: "last episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "we created something",
            },
            {
                id: 1,
                text: "we created something 1",
            }
        ]
    },
    {
        title: "this episode",
        id: 1,
        cards: [
            {
                id: 0,
                text: "this episode 0",
            },
            {
                id: 1,
                text: "this episode 1",
            }
        ]
    },
    {
        title: "next episode",
        id: 1,
        cards: [
            {
                id: 0,
                text: "next episode 0",
            },
            {
                id: 1,
                text: "next episode 1",
            },
            {
                id: 2,
                text: "next episode 2",
            },
            {
                id: 3,
                text: "next episode 3",
            }
        ]
    }
];
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SOMETHING':
            return Object.assign({}, state, {})
        default:
            return state;
    }
};

listReducer.propTypes = {

};

export default listReducer;