import React from "react";
import { useEffect,useState } from 'react'
import { NavLink } from "react-router-dom";

function JoblistPage() {
    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8000/api/jobs/')
        .then(response => response.json())
        .then(setJobs)
        .catch(err => console.error('Error fetching jobs:', err));
        
    }, []);

  return (
    <>
      <main className="container py-4 flex-grow-1">
        <div className="mb-4">
          <h2 className="fw-bold">Recommended Jobs</h2>
          <p className="text-muted small">
            Jobs based on your profile and preferences
          </p>
        </div>

        <div className="d-flex flex-column gap-3">
            {jobs.length === 0 ? (
                <p className="text-muted">No jobs found.</p>
            ) : jobs.map(job => (
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary fw-semibold">
                {job.title}
              </h5>

              <p className="text-muted small mb-2">{job.company}</p>
              <p className="text-muted small mb-2">{new Date(job.posted_date).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}</p>
              <p className="small">{job.description}</p>

              <div className="d-flex flex-wrap gap-2 small text-muted">
                <span className="badge bg-light text-dark">📍 {job.location}</span>
                <span className="badge bg-light text-dark">💰 {job.salary_range}</span>
                <span className="badge bg-light text-dark">🕒 Full Time</span>
              </div>

              <div className="text-end mt-3">
                <NavLink to={`/apply/${job.id}`} className="btn btn-link text-primary p-0">
                  View Details →
                </NavLink>
              </div>
            </div>
          </div>
            ))}
        </div>
      </main>
    </>
  );
}

export default JoblistPage;
