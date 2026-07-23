import { useState, useEffect } from "react";
import { data } from "react-router-dom";
import axios from "axios";

// const FetchUserData = () => {

//     const [userData, setUserData] = useState([]);
//     useEffect(() => {
//         console.log("UseData Rendering", userData);

//         const fetchData = () => {
//             fetch("https://jsonplaceholder.typicode.com/users")
//                 .then((response) => response.json())
//                 .then((data) => {
//                     setUserData(data)
//                 })
//                 .catch((error) => {
//                     console.log("server err", error);

//                 });


//         }

//         fetchData()

//     }, []);

//     return (
//         <>
//             {
//                 userData.length > 0 ?
//                     <table className="bg-blue-500 text-black border-black border-2">
//                         <thead className="border-2 border-black text-red-500">
//                             <tr>
//                                 <th>name</th>
//                                 <th>email</th>
//                                 <th>phone</th>
//                             </tr>

//                         </thead>
//                         <tbody >
//                             {userData.map((user) => {
//                                 return (
//                                     <tr key={user.id} className="border-2 border-black" >
//                                         <td>{user.name}</td>
//                                         <td>{user.email}</td>
//                                         <td>{user.phone}</td>

//                                     </tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                     :
//                     <h1>Loding Data.....</h1>
//             }
//         </>
//     )
// };
// export default FetchUserData;

const FetchUserData = asing()=>{
    try{
const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    }catch(){

    }
}