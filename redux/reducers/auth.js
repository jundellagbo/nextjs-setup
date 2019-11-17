const initialState = {
    user: null
}

export default (state = initialState, action ) => {
    switch (action.type) {
        case `AUTH/SET_USER`:
            state = {
                ...state,
                name: action.payload
            }
        break;
    }
    return state
}