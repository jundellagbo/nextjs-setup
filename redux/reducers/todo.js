const initialState = {
    name: ''
}

export default (state = initialState, action ) => {
    switch (action.type) {
        case `TODO/SETNAME`:
            state = {
                ...state,
                name: action.payload
            }
        break;
    }
    return state
}