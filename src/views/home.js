const Home = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url('https://th.bing.com/th/id/R.8b4c203c4b21d375be6341e6e82ac7e2?rik=uhtjFR%2bEUNdlog&pid=ImgRaw&r=0')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container d-flex justify-content-center">
        <div
          style={{ borderRadius: "5px", minHeight: "60vh" }}
          className="col-md-10 col-10 p-4 border shadow m-2 bg-light"
        >
          <h1 className="text-center">HOME</h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
