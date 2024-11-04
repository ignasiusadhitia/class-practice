import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import MainLayout from "./Layouts/MainLayout";
import { About, Home, NotFound, PostDetail, Posts, Tags } from "./pages";
import { tagsList } from "./data/tags";

function App() {
  return (
    <Router>
      <PostProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/tags" element={<Tags tags={tagsList} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </PostProvider>
    </Router>
  );
}

export default App;
