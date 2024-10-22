import { createStore  } from 'redux'

const intialstate=[]


const todoReducer=(state=intialstate,action)=>{

    switch(action.type){
        case 'Add_TODO':
            return [...state,action.payload]
        
        case 'DELETE_TODO':
            return state.filter(item=>item.id!==action.payload)
        case 'UPDATE_TODO':
            return state.map(item=>item.id==action.payload.id?action.payload:item)
        default: 
            return state;
    }
}


const todoStore=createStore(todoReducer)

export default todoStore