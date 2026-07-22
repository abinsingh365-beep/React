import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Home";
import About from "./About"
import Nav from "./nav";
import UseEffectComponent from "../Hooks/useState/UseEffect/UseEffectComponent";
const BasicRouting = ()=>{
return(
    <>
    <Router>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/nav" element={<Nav/>}/>
            <Route path="/UseEffectComponent" element={<UseEffectComponent/>}/>
            

        </Routes>
    </Router>


    </>
)
}; export default BasicRouting;