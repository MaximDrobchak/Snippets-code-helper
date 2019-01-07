import { STORY_ARCHIVE } from "./../constants/index";

const INITIAL_STATE = [];

const applyArchiveStory = (state, action) => [...state, action.id];

export default function archiveReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORY_ARCHIVE: {
      return applyArchiveStory(state, action);
    }
    default:
      return state;
  }
}
