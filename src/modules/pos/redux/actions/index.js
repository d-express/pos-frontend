const getGroupProducts = (category) => ({
  type: 'GET_GROUP_PRODUCTS',
  category,
});

const getProductsCategory = (products) => ({
  type: 'GET_PRODUCTS_CATEGORY',
  products,
});

const addCard = (product) => ({
  type: 'ADD_CART',
  product,
});

const updateCard = (product) => ({
  type: 'UPDATE_CART',
  product,
});

const payCard = (cart) => ({
  type: 'PAY_CART',
  cart,
});

const cancelCard = (payload) => ({
  type: 'CANCEL_CART',
  payload,
});

export {
  getGroupProducts,
  getProductsCategory,
  addCard,
  updateCard,
  payCard,
  cancelCard,
};

