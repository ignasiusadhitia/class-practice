import PropTypes from "prop-types";
import React from "react";
import { PageHeader, TagsList } from "../components";

const Tags = ({ tags }) => {
  return (
    <>
      <PageHeader text="Tags" subtitle="All the tags used in posts." />
      <TagsList tags={tags} />
    </>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Tags;
