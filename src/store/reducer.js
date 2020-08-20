const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "PERSON_ADD":
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Flo',
                age: Math.floor( Math.random() * 40 )
            }
            return { 
                persons: state.persons.concat(newPerson)
            };

        case "PERSON_DELETE":
            return { 
                persons: state.persons.filter(person => person.id !== action.personId)
            };

        default:
            return state;
    }
};

export default reducer;