import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1>All Products</h1>
      Search:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="names" />
      <datalist id="names">
        {props.products.map((product) => (
          <option key={product.id} value={product.name}></option>
        ))}
      </datalist>
      <div className="row">
        {props.products
          .filter((post) => post.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="col-sm-4 mb-4">
              <div className="card">
                <img src={product.images[0].url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: {product.price}</p>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary" onClick={() => props.onProductShow(product)}>
                    More info
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
