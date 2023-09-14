export const Category = ({ amount, children }) => {
  console.log("Category");
  return (
    <>
      <h3>Programming books: {amount}</h3>
      {children}
    </>
  );
};
