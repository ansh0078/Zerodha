import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center mt-5 p-5">
      <h1 className="mt-5">404 Not Found</h1>
      <h3 className="mt-5">Kiaan couldn’t find that page</h3>
      <p className="mt-3">
        We couldn’t find the page you were looking for.
        <br /> <Link to="/"> Visit Zerodha’s home page</Link>
      </p>
    </div>
  );
}

export default NotFound;
