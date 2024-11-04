import React from "react";

import PropTypes from "prop-types";
import TagItem from "./TagItem";

const TagsList = ({ tags }) => {
  return (
    <div className="min-vh-75-cstm">
      {tags.map((item) => (
        <TagItem key={item.id} text={item.name} />
      ))}
    </div>
  );
};

TagsList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TagsList;
