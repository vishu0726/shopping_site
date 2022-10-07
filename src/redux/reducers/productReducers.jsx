const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  if (type === "SET_PRODUCTS") {
    return {...state, products: payload}
  }
  return state;
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  if (type === "SELECTED_PRODUCT") {
    return {...state, ...payload}
  }
  else if (type === "REMOVE_SELECTED_PRODUCT") {
    return {}
  }
  return state;
};

// const initialValue = {
//   users:[]
// }
export const userInfoReducer = (state={}, {type, payload}) => {
  if (type === 'user-logged-in') {
    return {...state, ...payload}
  }
  // else if (type === 'user-sign-up') {
  //   return {...state, user:state.users.push(payload)}
  // }
  return state
}
const initialValue1 = {
  users:[]
}
export const userSignUpReducer = (state=initialValue1, {type, payload}) => {
  if (type === 'user-sign-up') {
    return {...state, user:state.users.push(payload)}
  }
  return state
}
const initialCart = {
  product:[]
}
export const addToCartReducer = (state=initialCart, {type, payload}) => {
  if (type === 'add-to-cart') {
    return {...state, product:state.product.push(payload)}
  }
  return state;
}

export const maintainCounterReducer = (state=0,{type,payload}) => {
  if (type === 'maintain-counter') {
    return state = payload;
  }
  return state;
}