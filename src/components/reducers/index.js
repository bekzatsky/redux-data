const initialState = {
    surname: 'Minazhatov',
    name: 'Bekzat',
    age: 26
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
};

export default reducer;