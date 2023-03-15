import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsCreate } from "./ProductsCreate";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleProductsIndex = () => {
    console.log("handleProductsIndex");
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleProductsIndex, []);

  const handleProductCreate = (params, successCallback) => {
    console.log("handleProductsCreate", params);
    axios.get("/products.json", params).then((response) => {
      console.log([...products, response.data]);
      successCallback();
    });
  };

  const handleProductShow = (product) => {
    console.log("handleProductsShow", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductsIndex products={products} onShowProduct={handleProductShow} />} />
        <Route path="/products/new" element={<ProductsCreate onCreateProduct={handleProductCreate} />} />
      </Routes>
      <Modal show={isProductShowVisible} onClose={handleClose}>
        <ProductsShow products={currentProduct} />
      </Modal>
    </div>
  );
}
