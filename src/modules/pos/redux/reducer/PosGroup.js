const _state = {
  _id: 1234,
  name: 'Pizza',
};

const PosGroup = (state = _state, action) => {
  switch (action.type) {
    case 'GET_GROUP_PRODUCTS':
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default PosGroup;
