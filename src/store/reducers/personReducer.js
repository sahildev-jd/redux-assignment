import { ADD_PERSON, DELETE_PERSON } from '../actions-constant';

const initialState = {
    persons: []
};

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return {
                ...state,
                persons: state.persons.concat(action.value),
            };

        case DELETE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.value)
            };
        default:
            return state;
    }
}

export default personReducer;