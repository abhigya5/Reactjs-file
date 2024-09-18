import { useState } from "react";
const Counter=()=>{
    const [count ,setCount]=useState(0)
    function inc(){
        setCount(count+1)
    }
    function dec(){
// setCount (count+1)
return count>0 ? setCount(count-1):count;
//return count >0 ? setCount (count-1):0;

    }
    return (
        <>
        <div className="col-4 mx-auto shadow p-5 my-5 text-white bg-dark rounded-pill">
            <h1>{count}</h1>
            <button onClick={inc} className="btn btn-success mx-5">+</button>
            <button onClick={dec} className="btn btn-danger mx-5">-</button>
        </div>
        </>
    )
    
}
export default Counter