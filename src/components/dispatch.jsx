const Dispatch = (props) => {
  return (
    <div
        className="container-fluid banner"
      >
        <div className="col align-self-center">
        <h1 className="text-center text-white">{props.text}</h1>
        </div>
      </div>
  );
};
export default Dispatch;