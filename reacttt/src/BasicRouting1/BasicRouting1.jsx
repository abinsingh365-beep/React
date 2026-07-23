import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Home";
import About from "./About"
import Nav from "./nav";
import UseEffectComponent from "../Hooks/UseEffect/UseEffectComponent";
import FetchUserData from "../Hooks/UseEffect/UseEffectFetching";
const BasicRouting = ()=>{
return(
    <>
    <Router>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/nav" element={<Nav/>}/>
            <Route path="/UseEffectComponent" element={<UseEffectComponent/>}/>
            <Route path="/fetchedUsers" element={<FetchUserData/>}/>

            

        </Routes>
    </Router>


    </>
)
}; export default BasicRouting;