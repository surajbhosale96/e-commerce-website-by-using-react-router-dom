import React from "react";
import "./Products.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Products() {
  const [productlist, setProductlist] = useState([]);
  const products = () => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    ).then((res) => {
      return res.json().then((res2) => {
        setProductlist(res2);
        console.log(res2);
      });
    });
  };
  useEffect(() => {
    products();
  }, []);
  return (
    <div className="product-container">
      <div className="card-container">
        {productlist.map((item) => {
          return (
            <div key={item.id} className="card">
              <p>{item.name}</p>
              <hr />
              <Link to={`/products/${item.id}/`}>
                <img
                  src={item.image_link}
                  alt="productimage"
                  className="product-image"
                />
              </Link>
              <h3 className="buy-prod">
                Buy it NOW!! for <span>${item.price}</span>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
