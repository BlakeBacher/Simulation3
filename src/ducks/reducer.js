// import axios from 'axios'

const initialState = {
    username:'',
    profile:'',
    userid:0,
    num:0
};

const TEST = 'TEST'

export default function reducer(state = initialState, action){
    switch (action.type) {
        case TEST:
            return Object.assign({}, state, {num: ++state.num})
        default:
            return state;
    }
}


function increase(num){
    return{
        type:TEST,
        payload: num
    }
}