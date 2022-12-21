const Box = (props) => {
  //  Write your code here.
  const { first, message } = props;
  return <div className={first}>{message}</div>;
};

const element = (
  //  Write your code here.
  <div>
    <h1>Boxes</h1>
    <div className="container">
      <Box first="small" message="small" />
      <Box first="medium" message="medium" />
      <Box first="large" message="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
