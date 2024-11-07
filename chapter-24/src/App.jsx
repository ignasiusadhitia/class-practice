import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ActivityDetail from "./pages/ActivityDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <DataProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity/:id" element={<ActivityDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </DataProvider>
  );
};

export default App;
