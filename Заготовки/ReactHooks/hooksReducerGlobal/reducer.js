export const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};
