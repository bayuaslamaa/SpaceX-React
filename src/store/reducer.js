import * as t from './actions'

const initial = {
    launches: []
}


export default (state = initial, action) => {
    const { type, payload } = action

    switch (type) {


        default:
            return state      
    }
}