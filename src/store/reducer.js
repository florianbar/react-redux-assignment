import * as actionTypes from './actions'; 

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.PERSON_ADD:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.person.name,
                age: action.person.age
            }
            return { 
                persons: state.persons.concat(newPerson)
            };

        case actionTypes.PERSON_DELETE:
            return { 
                persons: state.persons.filter(person => person.id !== action.personId)
            };

        default:
            return state;
    }
};

export default reducer;