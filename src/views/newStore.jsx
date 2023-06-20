import { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import Card from "../components/card";

function NewStore() {
  const { store } = useContext(Context);
  const { products } = store;
  const [filter, setFilter] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    productFiltered();
  }, [filter]);

  const productFiltered = () => {
    if (filter) {
      const filteredProducts = products.filter(
        (product) => product.category === filter
      );
      setFiltered(filteredProducts);
    } else {
      setFiltered(products);
    }
  };

  return (
    <div className="col-md-12 col-12 p-4 shadow m-2 bg-white">
      <h1 className="text-center">TIENDA</h1>
      <hr />
      <section className="container">
        <div className="row">
          <button
            style={{
              background: "#2b3651",
              color: "white",
              borderRadius: "0",
            }}
            className="shadow btn col-lg-2 col-12 mx-auto my-1 filter"
            onClick={handleFilterChange}
            value=""
          >
            Todo
          </button>
          <button
            style={{
              background: "#2b3651",
              color: "white",
              borderRadius: "0",
            }}
            className="shadow btn col-lg-2 col-12 mx-auto my-1 filter"
            onClick={handleFilterChange}
            value="Intercomunicador"
          >
            Intercomunicador
          </button>
          <button
            style={{
              background: "#2b3651",
              color: "white",
              borderRadius: "0",
            }}
            className="shadow btn col-lg-2 col-12 mx-auto my-1 filter"
            onClick={handleFilterChange}
            value="Repuesto"
          >
            Repuesto
          </button>
          <button
            style={{
              background: "#2b3651",
              color: "white",
              borderRadius: "0",
            }}
            className="shadow btn col-lg-2 col-12 mx-auto my-1 filter"
            onClick={handleFilterChange}
            value="Vestimenta"
          >
            Vestimenta
          </button>
          <button
            style={{
              background: "#2b3651",
              color: "white",
              borderRadius: "0",
            }}
            className="shadow btn col-lg-2 col-12 mx-auto my-1 filter"
            onClick={handleFilterChange}
            value="Accesorio"
          >
            Accesorio
          </button>
        </div>
      </section>
      <hr />
      <div className="row my-4">
        {filtered.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            id={item.id}
            first={item.first}
            brand={item.brand}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

export default NewStore;
