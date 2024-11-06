import React from "react";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="post/:id" element={<BlogDetail />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
