import React, { useEffect } from "react";
import './productDetails.css'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct,removeSelectedProduct, addingToCartAction} from "../../redux/actions/actions";
import {FaCartPlus } from 'react-icons/fa'

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;

  const dispatch = useDispatch();
  
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
    // console.log(response.data);
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const AddingToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push({header:title,rate:price});
    console.log(title,price);
    localStorage.setItem('cart',JSON.stringify(cart));
    console.log("adding to cart");
    dispatch(addingToCartAction(product));
    // navigate('/cart');
  }
  return (
    <div className="container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
            <div className="details">
              <div className="img-tag"><img src={image}/></div>
              <div className="description">
                <h1 className="productTitle">{title}</h1>
                <h2 className="productPrice"><a >Price: ${price}</a></h2>
                <h3 className="sub-name">{category}</h3>
                <p>{description}</p>
                <div>
                  <button className="details-cart" onClick={AddingToCart}><div className="button-content">ADD TO CART</div></button>   
                </div>
              </div>
            </div>
      )}
    </div>
  );
};

export default ProductDetails;