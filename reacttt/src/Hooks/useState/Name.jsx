import { useState } from "react";

export const Name = () => {
  const [name, setName] = useState("sonoooooooo");

  return (
    <>
      <h1>{name}</h1>

      <button onClick={() => setName("Singheeeeee")}>
        Change Name
      </button>
      <hr/>
    </>
  );
};