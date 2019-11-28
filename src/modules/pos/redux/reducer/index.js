const INIT_STATE = {
  category: [],
  products: [],
  cart: [],
  subtotal: 0,
  tax: 0,
};

const Pos = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_GROUP_PRODUCTS':
      return {
        ...state,
        category: action.category,
      };
    case 'GET_PRODUCTS_CATEGORY':
      return {
        ...state,
        products: action.products,
      };
    case 'ADD_CART':
      return {
        ...state,
        cart: [...state.cart, action.itemCart],
        subtotal: state.subtotal + action.itemCart.price,
        tax: state.tax + (action.itemCart.price * action.itemCart.tax),
      };
    case 'UPDATE_CART':
      return {
        ...state,
        cart: [...state.cart],
        subtotal: state.subtotal + action.itemCart.price,
        tax: state.tax + (action.itemCart.price * action.itemCart.tax),
      };
    case 'CANCEL_CART':
      return {
        ...state,
        cart: [],
        subtotal: 0,
        tax: 0,
      };
    default:
      return state;
  }
};

export default Pos;
