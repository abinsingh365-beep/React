import { useState } from "react";

export const Counter = ()=>{
    const [count,setCount] = useState(0);

    return(
        <>
        <h1 className="text-red-700">{count}</h1>
        <button onClick={() => setCount(count + 1)}> Num Increase</button><br /><br />

        <button onClick={() => setCount(count - 1)}> Num Decrease</button><br /><br />

        <button onClick={() => setCount(0)}> Num Reset</button>
        <hr/>
        </>
    );

};

// export const Counterr = () => {
//     // const [count1, setCount] = useState(0);
//     // let count1 = 0
//     // const HandleClick = () => {
//     //     count1 = count1 + 1;
//     //     console.log("count1: ", count1);

//         // setCount((count) => count + 1);
//         // setCount((count) => count + 1);
//         // setCount((count) => count + 1);
//         // this working format 
//         // 0+1=1
//         // 1+1=2

//         // (
//         // setCount( count + 1);
//         // setCount( count + 1);
//         // setCount( count + 1);
//         // is not working so try setCount((count) => count + 1) this is working because it is using the previous value of count and updating it correctly.
//         //     this working format
//         //     0+1
//         //     0+1
//         // repeate this so not showing is ui )
//     // };

//     // return (
//     //     <>
//     //         <h1>{count}</h1>
//     //         <button onClick={HandleClick}> Num Increase</button>

//     //     </>
//     // );

// };