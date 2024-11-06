import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

const BlogList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the current page from the query parameter or default to 1
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page")) || 1;

  // Get the posts from the JSON server
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pagination, setPagination] = useState({});

  const { isLoading, serverError, apiData } = useFetch(
    `/posts?_page=${initialPage}&_per_page=5`
  );

  useEffect(() => {
    if (apiData) {
      setPosts(apiData.data);
      setPagination({
        prev: apiData.prev,
        next: apiData.next,
      });
    }
  }, [apiData]);

  if (!posts || isLoading) {
    return <Spinner />;
  }

  if (serverError) {
    return <ErrorMessage text={serverError.message} />;
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    navigate(`?page=${currentPage + 1}`);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    navigate(`?page=${currentPage - 1}`);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Blog Posts</h1>
      <section className="row">
        {posts.map((post) => (
          <div className="col-md-6 col-lg-4 mb-4" key={post.id}>
            <Link to={`/post/${post.id}`} className="text-decoration-none">
              <div className="card h-100 shadow-sm">
                <img
                  src={post.img}
                  className="card-img-top img-cstm"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.desc}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-primary me-2"
          onClick={handlePrevPage}
          disabled={!pagination.prev}
        >
          <i className="bi bi-arrow-left"></i> Previous
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={handleNextPage}
          disabled={!pagination.next}
        >
          Next <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default BlogList;
