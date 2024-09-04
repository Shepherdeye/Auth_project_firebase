import React, { useRef, useState } from 'react'
import "./login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AlertX from '../../../APPViewFiles/Components/Alert/Alert'
import { useAuth } from '../../Data/AuthContext'
const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const emailRef = useRef();
  const passWordRef = useRef();
  const location = useLocation();
  const redirect = location.state?.path || "/";


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signIn(emailRef.current.value, passWordRef.current.value);
      navigate(redirect, { replace: true });
    } catch (error) {
      setError("Failed To Login");
      setLoading(false);
      console.log(error);

    }
  }

  return (
    <>
      <div className="login-container">
        <div className="login-wrapper">
          <h2 className="login-title">Login</h2>
          {error !== "" && <AlertX type="error" message={error} />}
          <form onSubmit={handleSubmit} className="login-form" >
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
                <input ref={passWordRef} type="password" id="password" name="password" required />
              </div>
            </div>
            <div className="forgot-password">
              <Link to="/forgetpassword"><i className="bi bi-key-fill"></i> Forgot Password?</Link>
            </div>
            <button type="submit" className="login-button" disabled={loading}>Login</button>
            <div className="create-account">
              <p><Link to="/signup"><i className="bi bi-person-plus-fill"></i> Create one!</Link></p>
            </div>
          </form>
        </div>
      </div>

    </>

  )
}

export default Login