import {
    createStore, applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

const initialState = {
    characters: []
}

function MainReducer(state = initialState, action) {
    switch (action.type) {
        case 'IS_CHARACTERS':
            return {...state, characters: action.payload}
        case 'IS_FIRST_EPISODE_NAME':
            return {...state, firstEpisodeName: action.payload}
        default:
            return state
    }
}

let store = createStore(MainReducer, applyMiddleware(thunk));


export default store;