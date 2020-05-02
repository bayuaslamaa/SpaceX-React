import axios from 'axios'

export const SET_LAUNCHES = 'SET_LAUNCHES'

export const setLaunches = (data) => {
    return { type: SET_LAUNCHES, payload: data }
}

function fetchLaunches() {
    
}