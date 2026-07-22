import { Parent } from "./pages/Parent";
import { Counter } from "./Hooks/useState/Counter";
import ParentComponent from "./Hooks/useState/ParentComponent";
import ConditionalRendering from "./conditionalRendering/ConditionalRendering";
import TailNavbar from "./TailwindNavbar/TailwindNavbarTesting";
import BasicRouting from "./BasicRouting1/BasicRouting1.jsx";

const App = () => {

  const dataa = {
    name: "abinsingh",
    place: "guruvayoor",
    age: 20
  };
  return (
    <>
      <Parent dataa={dataa} />
      <Counter />
      <ParentComponent />
      <ConditionalRendering/>
      <TailNavbar/>
      <BasicRouting/>
      
    </>
  );
};

export default App;