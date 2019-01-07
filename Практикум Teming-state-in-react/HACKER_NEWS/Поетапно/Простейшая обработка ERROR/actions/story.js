import {
  STORIES_ADD,
  STORIES_FETCH,
  STORIES_FETCH_ERROR
} from "../constants/actionTypes";

export const doFetchErrorStories = error => ({
  type: STORIES_FETCH_ERROR,
  error
});

export const doAddStories = stories => ({
  type: STORIES_ADD,
  stories
});

export const doFetchStories = query => ({
  type: STORIES_FETCH,
  query
});
