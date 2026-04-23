import React from 'react'

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
            <a href="/jobs" className="text-decoration-none text-dark">Jobs</a>
             {username ? (
            <span className="text-dark fw-semibold">
              Welcome, {username}!
            </span>
          ) : (
            <a href="/login" className="text-decoration-none text-dark">
              Login
            </a>
          )}
           
          
          </nav>
        </div>
      </header>

    </>
  )
}

export default Header