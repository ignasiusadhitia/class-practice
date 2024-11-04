import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPage(1);
  }, []);

  const fetchPage = async (pageNumber) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:3000/posts?_page=${pageNumber}&_per_page=5`
      );

      setPosts(response.data.data);
      setPagination({
        first: response.data.first,
        prev: response.data.prev,
        next: response.data.next,
        last: response.data.last,
        pages: response.data.pages,
        items: response.data.items,
      });

      setError(null);
    } catch (error) {
      setError(error.message);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const getPostById = async (postId) => {
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:3000/posts/${postId}`);
      setPost(response.data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setPost(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        pagination,
        loading,
        error,
        post,
        getPostById,
        fetchPage,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PostContext, PostProvider };
