import { createStore } from "redux";
import { combineReducers } from "redux";
import { addToCartReducer, productsReducer, selectedProductsReducer, userInfoReducer, userSignUpReducer, maintainCounterReducer } from "../reducers/productReducers";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  user: userInfoReducer,
  userSignUp: userSignUpReducer,
  cart: addToCartReducer,
  counter: maintainCounterReducer
});
const store = createStore(reducers);

export default store;