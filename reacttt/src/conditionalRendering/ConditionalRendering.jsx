import { useState} from "react";


    const ConditionalRendering = ()=>{
        const[isLoggedIn,setIsLoggedIn] = useState(false);

        return(
            <>
            {isLoggedIn ? <h1>login sucessfull</h1> : <h1>pls login to continue</h1>}
         <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>click</button>
            <hr />
            </>
            
        )

}

export default ConditionalRendering;
 