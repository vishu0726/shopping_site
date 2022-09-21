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
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="product-container">{renderList}</div>;
};

export default ProductComponent;