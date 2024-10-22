import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
const Counter = () => {
    const count=useSelector((state)=>state.count)
    // const multiplycount=useSelector((state)=>state.multiplycount)
    const dispatch=useDispatch()
    const increment=()=>{
        dispatch({type:"INCREMENT"})
    }
    const decrement=()=>{
        dispatch({type:"DECREMENT"})
    }
    const multiply=()=>{
        dispatch({type:"MULTIPLY"})
    }
    console.log(count)
    return (
        <div>

            <h2 style={{color:"black"}}>Count: {count}</h2>
             <button  style={{backgroundColor:"green" ,marginRight:7}} onClick={increment}>Increment</button>

<button  style={{marginLeft:7,backgroundColor:"white",color:"black"}} onClick={decrement}>Decrement</button>
        
<button  style={{marginLeft:7,backgroundColor:"blue",color:"white"}} onClick={multiply}>Multiply</button>
{/* <h2>Count: {multiplycount}</h2> */}

        </div>
    );
}

export default Counter;
