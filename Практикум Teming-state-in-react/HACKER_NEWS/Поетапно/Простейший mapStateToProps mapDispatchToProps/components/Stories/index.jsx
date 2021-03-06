import React from "react";

import { connect } from "react-redux";
import { doArchiveStory } from "../../actions/archive";
import { getReadableStories } from "../../selectors/story";

import Story from "../Story";
import "./Stories.css";

const COLUMNS = {
  title: {
    label: "Title",
    width: "40%"
  },
  author: {
    label: "Author",
    width: "30%"
  },
  comments: {
    label: "Comments",
    width: "10%"
  },
  points: {
    label: "Points",
    width: "10%"
  },
  archive: {
    width: "10%"
  }
};

const Stories = ({ stories, onArchive }) => (
  <div className="stories">
    <StoriesHeader columns={COLUMNS} />

    {(stories || []).map(story => (
      <Story
        onArchive={onArchive}
        key={story.objectID}
        story={story}
        columns={COLUMNS}
      />
    ))}
  </div>
);

const StoriesHeader = ({ columns }) => (
  <div className="stories-header">
    {Object.keys(columns).map(key => (
      <span key={key} style={{ width: columns[key].width }}>
        {columns[key].label}
      </span>
    ))}
  </div>
);

const mapStateToProps = state => ({ stories: getReadableStories(state) });

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
