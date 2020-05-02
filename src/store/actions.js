import axios from 'axios'

export const SET_LAUNCHES = 'SET_LAUNCHES'

export const setLaunches = (data) => {
    return { type: SET_LAUNCHES, payload: data }
}

function fetchLaunches() {
    return axios.get('https://api.spacexdata.com/v3/launches')
}


export const getLaunches = () => {
    return dispatch => {
        fetchLaunches()
            .then(({ data }) => dispatch(setLaunches(data)))
            .catch(console.log)
    }
}