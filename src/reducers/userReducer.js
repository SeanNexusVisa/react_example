const initialState = {
    list: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        default:
            return state

    }
}

export default reducer;