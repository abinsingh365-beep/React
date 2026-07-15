import { Parent } from "./pages/Parent";
import { Counter } from "./Hooks/useState/Counter";
import ParentComponent from "./Hooks/useState/ParentComponent";
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
    </>
  );
};

export default App;