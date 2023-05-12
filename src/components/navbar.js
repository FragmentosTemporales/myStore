function NavBar() {
  return (
    <div className="row sticky-top" id="navbar">
      <nav
        className="navbar navbar-expand-lg  d-flex justify-content-center shadow"
        style={{ backgroundColor: "#393939" }}
      >
        <section className="container">
          <div><h1 className="text-white">MiStore</h1></div>
          <div><button className="btn btn-info"><i class="bi bi-cart-fill"></i></button></div>
        </section>
  
      </nav>
    </div>
  );
}

export default NavBar;
