import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageHeader } from "../components";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { PostContext } from "../context/PostContext";
import { formatDate } from "../utils/formatter";
import Icon from "../components/Icon";

const PostDetail = () => {
  const { post, loading, error, getPostById } = useContext(PostContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  if (!post) return <p>Post not found.</p>;

  return (
    <>
      <button onClick={() => navigate(-1)} className="btn-accent-cstm mb-4">
        <Icon variant="chevron-left" /> Back
      </button>
      <PageHeader text={post.title} className="text-accent-cstm">
        <span className="text-secondary">
          <Icon variant="calendar3" /> Updated: ${formatDate(post.createdAt)} |{" "}
          {""}
          <Icon variant="pencil-square" /> Suggest Changes
        </span>
      </PageHeader>

      <div className="min-vh-75-cstm">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </>
  );
};

PostDetail.propTypes = {
  posts: PropTypes.array,
};

export default PostDetail;
