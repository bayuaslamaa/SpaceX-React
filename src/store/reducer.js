import * as t from './actions'

const initial = {
    launches: []
}


export default (state = initial, action) => {
    const { type, payload } = action
    switch (type) {
        case t.SET_LAUNCHES:
            return { ...state, launches: payload }
        default:
            return state
    }
}