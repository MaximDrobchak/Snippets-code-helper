import { STORIES_ADD } from "../constants/actionTypes";

const INITIAL_STATE = [];

const apllyAddStories = (state, action) => action.stories;

export default function storyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORIES_ADD: {
      return apllyAddStories(state, action);
    }
    default:
      return state;
  }
}
