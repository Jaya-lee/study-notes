import {createStore} from 'redux'

let comments = ['hello1','hello2']

function commentReducer(state = comments, action) {
    console.log(action);
    switch(action.type){
        case 'ADD_COMMENT' : return [...state,action.comment]
        default : return state;
    }
    
}
let store = createStore(commentReducer)

export default store
