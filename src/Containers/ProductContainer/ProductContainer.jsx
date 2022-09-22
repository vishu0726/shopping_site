import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './productContainer.css'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div  key={id}>
        <Link to={`/product/${id}`}>
          <div className="product-container">
            <div className="card">
              <div >
                <img className="product-image" src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header-product">{title}</div>
                <div className="price">${price}</div>
                <div className="category">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <div className="product-container">{renderList}</div>
      {/* <footer>hello guys</footer> */}
    </>
  );
};

export default ProductComponent;