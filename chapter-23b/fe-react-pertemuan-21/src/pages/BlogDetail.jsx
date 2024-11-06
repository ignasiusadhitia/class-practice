import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useNavigate, useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { isLoading, serverError, apiData } = useFetch(`/posts/${id}`);

  useEffect(() => {
    if (apiData) {
      setPost(apiData);
    }
  }, [apiData]);

  if (!post || isLoading) {
    return <Spinner />;
  }

  if (serverError) {
    return <ErrorMessage text={serverError.message} />;
  }

  return (
    <div className="container my-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-arrow-left"></i> Back
      </button>
      <div className="card shadow-sm p-4">
        <img src={post.img} alt="Blog image" className="card-img-top" />
        <h1 className="card-title text-center">{post.title}</h1>
        <p className="card-text text-muted text-center">{post.desc}</p>
        <hr />

        <div className="card-body">{parse(post.content)}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
