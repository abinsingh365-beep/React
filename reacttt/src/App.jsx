import { Parent } from "./pages/Parent";
import { Counter } from "./Hooks/useState/Counter";
import { Name } from "./Hooks/useState/Name";

const App = () => {

  const dataa={
    name:"abinsingh",
    place:"guruvayoor",
    age:20
  };
  return (
    <>
      <Parent dataa={dataa} />
      <Counter/>
      <Name/>
    </>
  );
};

export default App;