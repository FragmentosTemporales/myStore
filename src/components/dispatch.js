const Dispatch = (props) => {
  return (
    <div
      style={{ borderRadius: "5px", minHeight: "10vh" }}
      className="container text-center col-md-12 col-12 shadow "
    >
      <div
        className="row banner"
      >
        <div className="col align-self-center">
        <h1 className="text-center text-white">{props.text}</h1>
        </div>
      </div>
    </div>
  );
};
export default Dispatch;