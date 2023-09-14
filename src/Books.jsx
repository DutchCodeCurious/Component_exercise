export const Books = ({ amount, Children }) => {
  console.log("Books");
  return (
    <>
      <h2>Books: {amount}</h2>
      {Children}
    </>
  );
};
