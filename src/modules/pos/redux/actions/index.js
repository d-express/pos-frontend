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

export { getGroupProducts, getProductsCategory, addCard, updateCard };

