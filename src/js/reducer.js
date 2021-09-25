export const types = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  USER_SIGNED_IN: "USER_SIGNED_IN",
  SIGN_OUT: "SIGN_OUT",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
};

const removeFirstElementWithId = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return [...array.slice(0, i), ...array.slice(i + 1)];
    }
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TO_BASKET: {
      return { basket: [action.item, ...state.basket], user: state.user };
    }
    case types.USER_SIGNED_IN: {
      return { basket: state.basket, user: action.email };
    }
    case types.SIGN_OUT: {
      return { basket: state.basket, user: null };
    }
    case types.REMOVE_FROM_BASKET: {
      return {
        basket: removeFirstElementWithId(state.basket, action.itemId),
        user: state.user,
      };
    }
    default: {
      throw new Error();
    }
  }
};

export const initialState = {
  basket: [],
  user: null,
};
