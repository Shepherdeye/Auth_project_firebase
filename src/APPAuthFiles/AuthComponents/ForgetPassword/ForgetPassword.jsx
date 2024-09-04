import React, { useRef, useState } from 'react'
import "./ForgetPass.css"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Data/AuthContext';
import AlertX from '../../../APPViewFiles/Components/Alert/Alert';
const ForgetPassword = () => {
  const { resetPassword } = useAuth();

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value)
      setMessage("Check your Email Inbox")
    } catch (error) {
      setError('Failed to reset password');
      console.log(error);
      setLoading(false);

    }

  }
  return (
    <>
      <div className="forgot-password-container">
        <div className="forgot-password-wrapper">
          <h2 className="forgot-password-title">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="forgot-password-form">
            {error !== "" && <AlertX type={"error"} message={error} />}
            {message !== "" && <AlertX type={"success"} message={message} />}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-with-icon">
                <i className="bi bi-envelope-fill"></i>
                <input ref={emailRef} type="email" id="email" name="email" required />
              </div>
            </div>
            <button type="submit" className="submit-button" disabled={Loading}>Reset Password</button>
            <div className="back-to-login">
              <p>Remembered your password? <Link to="/login"><i className="bi bi-arrow-left-circle-fill"></i> Log In</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword