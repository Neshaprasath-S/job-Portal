import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    const username = localStorage.getItem("username"); 
  return (
    <>
      <header className="bg-white border-bottom">
        <div className="container py-3 d-flex justify-content-between align-items-center">
          <div className="fs-4 fw-bold text-primary">
            JobPortal
          </div>

          <nav className="d-none d-md-flex gap-4 small fw-medium">
            <Link to="/" className="text-decoration-none text-dark">
              Jobs
            </Link>
            {username ? (
              <span className="text-dark fw-semibold">
                Welcome, {username}!
              </span>
            ) : (
              <Link to="/login" className="text-decoration-none text-dark">
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

    </>
  )
}

export default Header