const Box = (props) => {
  const { className, message } = props;
  return <div className={className}>{message}</div>;
};

const element = (
  <div className="bg_color">
    <h1>Boxes</h1>
    <div className="box-stages">
      <Box className="button1" message="Small" />
      <Box className="button2" message="Medium" />
      <Box className="button3" message="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
