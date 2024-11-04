import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { formatDate } from "../utils/formatter";

const PostListItem = ({ post }) => {
  const { id, title, createdAt, desc } = post;

  return (
    <Link to={`/posts/${id}`} className="text-decoration-none nav-link mb-4">
      <div>
        <h3 className="fs-5 text-accent-cstm">{title}</h3>
        <div className="text-secondary fst-italic">
          <Icon variant="calendar3" />{" "}
          <span className="text-secondary fs-6-cstm">
            Updated: {formatDate(createdAt)}
          </span>
        </div>
        <p>{desc}</p>
      </div>
    </Link>
  );
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostListItem;
