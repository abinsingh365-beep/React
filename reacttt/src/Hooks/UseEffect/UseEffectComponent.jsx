import { useState, useEffect } from "react"


const UseEffectComponent = () => {
    console.log("UseEffectComponent rendering");
    
    const [count1, setCount1] = useState(6);
    const [count, setCount] = useState(0);


    useEffect(()=>{
        console.log("useEffect Rendering");
        
    },[count1]);
    return (
        <>
            <h1 >{count}</h1>

            <button onClick={() => setCount(count + 1)}> Num Increase</button>

        </>
    )
};
export default UseEffectComponent;