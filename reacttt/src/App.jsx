import { Parent } from "./pages/Parent";

const App = () => {

  const dataa={
    name:"abinsingh",
    place:"guruvayoor",
    age:20
  };
  return (
    <>
      <Parent dataa={dataa} />
    </>
  );
};

export default App;