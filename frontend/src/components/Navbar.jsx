import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem("token");

    setIsLoggedIn(!!token);

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    localStorage.removeItem("profileImage");

    setIsLoggedIn(false);

    navigate("/login");

  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold"
        >
          Blogger
        </Link>

        <div className="flex gap-6 items-center">

          <Link to="/">Home</Link>

          <Link to="/create-blog">Create</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/profile">Profile</Link>

          {
            isLoggedIn ? (

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>

            ) : (

              <Link
                to="/login"
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Login
              </Link>

            )
          }

        </div>

      </div>

    </nav>
  );
};

export default Navbar;