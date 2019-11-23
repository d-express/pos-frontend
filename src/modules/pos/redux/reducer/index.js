const INIT_STATE = {
  category: [],
  products: [],
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
    default:
      return state;
  }
};

export default Pos;
