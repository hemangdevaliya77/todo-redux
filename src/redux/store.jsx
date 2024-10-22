import { createStore  } from 'redux'

const intialstate={
    count:0
}


const countReducer=(state=intialstate,action)=>{

    switch(action.type){
        case 'INCREMENT':
            return {...state,count:state.count+1}
        
        case 'DECREMENT':
            return {...state,count:state.count-1}
        case 'MULTIPLY':
            return {...state,count:state.count*2}
        default:
            return state;
    }
}


const store=createStore(countReducer)

export default store