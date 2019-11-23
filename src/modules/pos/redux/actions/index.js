const getGroupProducts = (category) => ({
  type: 'GET_GROUP_PRODUCTS',
  category,
});

const getProductsCategory = (products) => ({
  type: 'GET_PRODUCTS_CATEGORY',
  products,
});

export { getGroupProducts, getProductsCategory };

