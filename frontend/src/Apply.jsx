import React , { useEffect, useState } from "react";
import { useActionState } from "react";
import { NavLink, useParams } from "react-router-dom";

function Apply() {
  const {jobId} = useParams() 
  const userId = localStorage.getItem("userId");
  const [jobdata, setJobdata] = useState(null);
  const [result, formAction, isPending] =
    useActionState(applyJobAction, null);


  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/jobdetail/${jobId}/`)
      .then(response => response.json())
      .then(data => setJobdata(data))
      .catch(err => console.error("Error:", err));
  }, [jobId]);


  async function applyJobAction(prevState, formData) {

    const res = await fetch("http://127.0.0.1:8000/api/apply/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        job: jobId,
        applicant: userId
      })
    });

    const data = await res.json();
   


  if (res.ok) {
    return { message: data.message, success: true };
  } else {
    return { message: data.message, success: false };
  }
}


  return (
    <main className="flex-grow-1">
      <div className="container pt-4">
        <NavLink to="/jobs" className="text-primary small text-decoration-none">
          ← Back to Jobs
        </NavLink>
      </div>

      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="card shadow-sm p-4"
          style={{ maxWidth: "400px", width: "100%" }}>

          <h5 className="fw-semibold">Apply for this job</h5>

          <p className="text-muted small">
            Your profile will be shared with the recruiter
          </p>
             {jobdata && (
            <>
              <h2>{jobdata.title}</h2>
              <p><strong>Company:</strong> {jobdata.company}</p>
              <p><strong>Location:</strong> {jobdata.location}</p>
              <p><strong>Salary:</strong> {jobdata.salary_range}</p>
              <p><strong>Description:</strong> {jobdata.description}</p>
            </>
          )}

          <form action={formAction} className="mt-3">
            <button type="submit" className="btn btn-primary w-100">
              {isPending ? "Applying..." : "Apply Now"}
            </button>

            {result && (
              <p className={`text-center ${result.success ? "text-success" : "text-danger"} small mt-3`}>
                {result.message}
              </p>
            )}
          </form>

        </div>
      </div>
    </main>
  );
}

export default Apply;