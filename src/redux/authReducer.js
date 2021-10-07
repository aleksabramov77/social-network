import { authAPI } from '../api/api'

const SET_USER = 'SET_USER'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
}

const authReducer = (state = initialState, action) => {
    // debugger

    switch (action.type) {

        case SET_USER:
            return {
                ...state,
                ...action.payload,
                // isAuth: true,
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state

    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER, payload: { id, email, login, isAuth } })
export const toggleFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching })

export const getAuthUserData = () => dispatch => {
    dispatch(toggleFetching(true))
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
            dispatch(toggleFetching(false))
        })
}

export const logIn = (email, password, rememberMe) => dispatch => {
    dispatch(toggleFetching(true))

    authAPI.logIn(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            dispatch(toggleFetching(false))
        })
}

export const logOut = () => dispatch => {
    dispatch(toggleFetching(true))

    authAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
            dispatch(toggleFetching(false))
        })
}

export default authReducer