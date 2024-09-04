import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
import AlertX from '../../../APPViewFiles/Components/Alert/Alert';
import { useAuth } from '../../Data/AuthContext';

const SignUp = () => {
  const { signUP } = useAuth();

  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfimRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfimRef.current.value) {
      return setError("Passwords do not match");

    }
        try {
          setError("");
          setLoading(true)
          await signUP(emailRef.current.value, passwordRef.current.value);
          navigate("/")
        } catch (error) {
          console.log(error);
          setError("Failed to create an account");


        }
  }
  return (
    <>
      <div className="signup-container">
        <div className="signup-wrapper">
          <h2 className="signup-title">Create Account</h2>
          {error !== "" && <AlertX type="error" message={error} />}
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-with-icon">
                <i className="bi bi-envelope-fill"></i>
                <input ref={emailRef} type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <i className="bi bi-lock-fill"></i>
                <input ref={passwordRef} type="password" id="password" name="password" required />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="input-with-icon">
                <i className="bi bi-lock-fill"></i>
                <input ref={passwordConfimRef} type="password" id="confirm-password" name="confirm-password" required />
              </div>
            </div>
            <button type="submit" className="signup-button" disabled={Loading}>Sign Up</button>
            <div className="create-account">
              <p>Already have an account? <Link to="/login"><i className="bi bi-arrow-left-circle-fill"></i> Login here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default SignUp