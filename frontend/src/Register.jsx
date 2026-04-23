import React from 'react'
import { use } from 'react'
import { useActionState } from 'react'
import { NavLink } from 'react-router-dom'

async function registeraction(_,formData){
  const data = Object.fromEntries(formData)
  console.log(data)
  const res= await fetch("http://127.0.0.1:8000/api/register/",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    const resData = await res.json()
    return resData.message||"Registration failed"
}


export default function Register() {
    const [message,formAction,isPending] = useActionState(registeraction,'',{withPending:true});
  return (
    <>
    
      <main className="container py-5">
        <div className="row g-5 align-items-center">

          <div className="col-md-6 d-none d-md-block">
            <h1 className="fw-bold">Find your dream job now</h1>

            <p className="text-muted mt-3">
              Register with JobPortal and get matched with the right opportunities.
            </p>

            <ul className="mt-4 text-muted">
              <li>✔ Trusted by thousands of recruiters</li>
              <li>✔ Personalized job recommendations</li>
              <li>✔ Easy apply & profile visibility</li>
            </ul>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "400px" }}>
              <h5 className="fw-bold">Create your JobPortal profile</h5>

              <p className="text-muted small">
                Search & apply to jobs from India’s top companies
              </p>

              <form action={formAction} className="mt-3">

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input name='username' type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email ID</label>
                  <input name='email' type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input name='password' type="password" className="form-control" placeholder="Minimum 6 characters" />
                </div>

                <button disabled={isPending} type='submit' className="btn btn-primary w-100">
                  {isPending ? "Registering..." : "Register"}
                </button>

                <p className="text-center mt-3 text-secondary">
                  {message}
                </p>
                <p className="text-center small text-muted mt-3">
                  By registering, you agree to our
                  <a href="#" className="text-primary text-decoration-none"> Terms & Conditions</a>
                </p>

                <p className="text-center mt-2">
                  Already registered?
                  <NavLink to="/login" className="text-primary fw-medium text-decoration-none">
                    {" "}Login here
                  </NavLink>
                </p>

              </form>
            </div>
          </div>

        </div>
      </main>

      
    </>
  )
}