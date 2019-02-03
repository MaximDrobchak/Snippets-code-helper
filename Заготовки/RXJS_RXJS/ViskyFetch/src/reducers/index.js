import { FETCH_WHISKIES, FETCH_WHISKIES_FAILURE, FETCH_WHISKIES_SUCCESS } from '../constants';

const initialState = {
  whiskies: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WHISKIES:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_WHISKIES_SUCCESS:
      return {
        whiskies: [ ...action.payload ],
        isLoading: false,
        error: null,
      };
    case FETCH_WHISKIES_FAILURE:
      return {
        whiskies: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
