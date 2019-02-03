import { FETCH_WHISKIES, FETCH_WHISKIES_FAILURE, FETCH_WHISKIES_SUCCESS } from './constants';

export const fetchWhiskies = () => ({
  type: FETCH_WHISKIES,
});

export const fetchWhiskiesSuccess = whiskies => ({
  type: FETCH_WHISKIES_SUCCESS,
  payload: whiskies,
});

export const fetchWhiskiesFailure = message => ({
  type: FETCH_WHISKIES_FAILURE,
  payload: message,
});
