const INIT_STATE = {
  category: [],
};

const Pos = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_GROUP_PRODUCTS':
      return {
        category: action.category,
      };
    default:
      return state;
  }
};

export default Pos;
