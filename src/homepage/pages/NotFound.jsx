// NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-green-500 mb-4">404</h1>
      <p className="text-xl text-gray-600 font-khmermont tracking-wide mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="text-green-100 rounded p-2  bg-green-400 hover:bg-green-600 hover:scale-110"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
