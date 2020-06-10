import * as actionTypes from '../constants/actionTypes';

let initialState = {
        user: []
}

const details = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCHDETAILS: return {
            ...state,
            user: action.data
        }
        default: return state;
    }
}

export default details;