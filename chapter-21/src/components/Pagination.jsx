import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import Icon from "./Icon";

const Pagination = () => {
  const { pagination, fetchPage } = useContext(PostContext);
  return (
    <div className="pt-5 my-5 d-flex justify-content-center gap-3">
      <button
        onClick={() => fetchPage(pagination.prev)}
        className={`btn-accent-cstm ${
          !pagination.prev ? "text-secondary" : ""
        }`}
        disabled={!pagination.prev}
      >
        <Icon variant="arrow-left" className="me-3" />
        Prev
      </button>
      <span>
        {" "}
        {pagination.prev ? pagination.prev + 1 : pagination.first} /{" "}
        {pagination.pages}{" "}
      </span>

      <button
        onClick={() => fetchPage(pagination.next)}
        className={`btn-accent-cstm ${
          !pagination.next ? "text-secondary" : ""
        }`}
        disabled={!pagination.next}
      >
        Next <Icon variant="arrow-right" />
      </button>
    </div>
  );
};

export default Pagination;
