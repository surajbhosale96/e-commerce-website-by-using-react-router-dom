import React, { useState, useEffect } from "react";
import "./Productdetails.css";
function Productdetail(props) {
  const [productdetails, setProductdetails] = useState([]);
  // console.log(props.match.params.id);
  console.log(props);
  let prodDetails = () => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((res) => {
        return res.json();
      })
      .then((res2) => {
        setProductdetails(res2);
        console.log(res2);
      });
  };
  useEffect(() => {
    prodDetails();
  }, []);
  let prodId = props.match.params.id;
  return (
    <div className="product-detail-section">
      <h3 className="desc-heading">Description</h3>
      {productdetails
        .filter((item) => {
          return prodId == item.id;
        })
        .map((item) => {
          return (
            <div className="desc-container">
              <p className="desc-content">{item.description}</p>
              <hr />
              <div className="price-div">
                <h3 className="">Product type-{item.product_type}</h3>
                <h3>
                  Price- <span>${item.price}</span>
                </h3>
                <button className="buy-btn">
                  <a href={item.product_link} target="_blank">
                    Click here to buy the product
                  </a>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Productdetail;
