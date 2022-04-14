export const addUser = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_USER',
            payload,
        })
    }
}

/*
export const addUser = ( payload ) => {
    return {
        type: 'ADD_USER',
        payload,
    }
}
*/