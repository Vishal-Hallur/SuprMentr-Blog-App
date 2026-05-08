import React from "react";

import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import CreateBlog from "./pages/CreateBlog";

import Dashboard from "./pages/Dashboard";

import BlogDetails from "./pages/BlogDetails";

import Profile from "./pages/Profile";

import EditBlog from "./pages/EditBlog";

const App = () => {

  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/create-blog"
        element={<CreateBlog />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/blog/:id"
        element={<BlogDetails />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/edit-blog/:id"
        element={<EditBlog />}
      />

    </Routes>
  );
};

export default App;