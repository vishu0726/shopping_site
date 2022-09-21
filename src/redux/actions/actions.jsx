
export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: "SELECTED_PRODUCT",
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: "REMOVE_SELECTED_PRODUCT",
  };
};
export const userLoggedIn = (product) => {
  return {
    type: 'user-logged-in',
    payload: product
  }
}
export const userSignUp = (product) => {
  return {
    type: 'user-sign-up',
    payload: product
  }
}
export const addingToCartAction = (product) => {
  return {
    type: 'add-to-cart',
    payload: product
  }
}