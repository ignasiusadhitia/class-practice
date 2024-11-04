import React from "react";
import { PageHeader, Pagination, PostsList } from "../components";

const Posts = () => {
  return (
    <main>
      <PageHeader text="Posts" subtitle="All the articles I've posted." />
      <PostsList />
      <Pagination />
    </main>
  );
};

export default Posts;
