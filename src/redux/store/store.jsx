import { createStore } from "redux";
import { combineReducers } from "redux";
import { addToCartReducer, productsReducer, selectedProductsReducer, userInfoReducer, userSignUpReducer } from "../reducers/productReducers";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  user: userInfoReducer,
  userSignUp: userSignUpReducer,
  cart: addToCartReducer
});
const store = createStore(reducers);

export default store;