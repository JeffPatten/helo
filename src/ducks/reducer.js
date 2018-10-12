const initialState = {
    id: 0,
    username: '',
    profilePicture: ''
}

const AUTH_USER = 'AUTH_USER';

export function authUser(user){
    return {
        type: AUTH_USER,
        payload: user
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_USER:
            return Object.assign({}, state, {id: action.payload, username: action.payload, profilePicture: action.payload})
        default:
            return state
    }
}