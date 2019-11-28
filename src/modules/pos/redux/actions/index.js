const getGroupProducts = (category) => ({
  type: 'GET_GROUP_PRODUCTS',
  category,
});

const getProductsCategory = (products) => ({
  type: 'GET_PRODUCTS_CATEGORY',
  products,
});

const addCard = (itemCart) => ({
  type: 'ADD_CART',
  itemCart,
});

const updateCard = (itemCart) => ({
  type: 'UPDATE_CART',
  itemCart,
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

