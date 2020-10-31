import { ADD_PERSON, DELETE_PERSON } from '../actions-constant';

const initialState = {
    persons: []
};

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return {
                ...state
            };

        case DELETE_PERSON:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default personReducer;