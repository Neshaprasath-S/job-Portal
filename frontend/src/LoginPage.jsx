import React,{ use }  from 'react'
import { NavLink } from 'react-router-dom'
import { useActionState } from 'react'

async function loginaction(_,formData){
  const data = Object.fromEntries(formData)
  console.log(data)
  const res= await fetch("http://127.0.0.1:8000/api/login/",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
    const resData = await res.json()
    if(res.ok){
      localStorage.setItem("userId",resData.user_id)
      localStorage.setItem("username",resData.username)
    }

    return resData.message||resData.error
}



function LoginPage() {
 const [message,formAction,isPending] = useActionState(loginaction,'',{withPending:true});


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

              <h5 className="fw-bold text-center text-primary">JobPortal</h5>

              <p className="text-muted small text-center">
                Login to your account
              </p>

             
              <form action={formAction} className="mt-3" >

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter username"
                   
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                   
                  />
                </div>

                <div className="text-end mb-3">
                  <a href="#" className="small text-primary text-decoration-none">
                    Forgot Password?
                  </a>
                </div>

                <button disabled={isPending} type='submit' className="btn btn-primary w-100">
                {isPending ? "Logging in..." : "Login"}
                </button>
                <p className="text-center mt-3 text-secondary">
                  {message}
                </p>

                <p className="text-center mt-3">
                  New to JobPortal?
                  <NavLink to="/register" className="text-primary fw-medium text-decoration-none">
                    Register here
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

export default LoginPage