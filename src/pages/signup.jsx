/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const Signup = () => {
  const [name , SetName] =useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 const handleSubmit=(e)=>{
  e.preventDefult();
  axios.post('http://localhost:3001/register',{name,email,password})
  .then(result =>console.log(result))
  .catch(err => console.log(err))
 }
  

  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-center">Sign Up</h2>
                  <p className="text-center mb-3">Join us in shopping!!</p>
                  <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label
                        htmlFor="name"
                        className="form-label mb-3"
                      >
                       Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                        autoComplete='off'
                        onChange={(e)=>SetName(e.target.value)}
                
                        
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label mb-3">
                        Enter Your Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="enter email here ..."
                        autoComplete='off'
                        onChange={(e) => setEmail(e.target.value)}
                        
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label mb-3">
                        Enter Your password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="enter password here..."
                        autoComplete='off'
                        onChange={(e) => setPassword(e.target.value)}

                      />
                    </div>
                   
                    
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p>
                        Have an account?
                      </p>
                      <Link to="/login" className="form-link">
                        Log In
                      </Link>
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;