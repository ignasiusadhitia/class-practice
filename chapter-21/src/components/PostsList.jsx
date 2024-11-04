import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import PostListItem from "./PostListItem";

const PostsList = () => {
  const { posts, loading, error } = useContext(PostContext);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;

  return (
    <div className="min-vh-75-cstm">
      {posts?.map((item) => (
        <PostListItem key={item.id} post={item} />
      ))}
    </div>
  );
};

export default PostsList;
