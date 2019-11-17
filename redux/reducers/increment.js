const initialState = {
    increment: 0,
    test: 'weak'
}

export default (state = initialState, action ) => {
    switch (action.type) {
        case `INCREMENT/INCREMENT`:
            state = {
                ...state,
                increment: state.increment+=1
            }
        break;
    }
    return state
}