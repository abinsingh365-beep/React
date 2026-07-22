export const Child = ({ dataa }) => {
  return (
    <>
      <h3 className="text-red-700 text-4xl">Name: {dataa.name}</h3>
      <h3>Your place is: {dataa.place}</h3>
      <h3>Your age is: {dataa.age}</h3>
      <hr/>
    </>
  );
};