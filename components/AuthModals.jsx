"use client"

import { useState } from "react"
import { useAppContext } from "../app/providers"
import { X } from "lucide-react"

export default function AuthModals({ showModal, onClose, onSwitch }) {
  const { dispatch } = useAppContext()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  })
  const [resetEmail, setResetEmail] = useState("")

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (showModal === "signup") {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!")
        return
      }
      
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
      if (existingUsers.find(user => user.email === formData.email)) {
        alert("User with this email already exists!")
        return
      }
      
      // Register user
      const userData = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password, // In real app, this would be hashed
      }
      
      // Save to registered users
      existingUsers.push(userData)
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers))
      
      // Login the user
      const loginData = { id: userData.id, name: userData.name, email: userData.email }
      dispatch({ type: "LOGIN", payload: loginData })
      localStorage.setItem('user', JSON.stringify(loginData))
      
    } else if (showModal === "signin") {
      // Validate login
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
      const user = existingUsers.find(u => u.email === formData.email && u.password === formData.password)
      
      if (!user) {
        alert("Invalid email or password!")
        return
      }
      
      // Login user
      const loginData = { id: user.id, name: user.name, email: user.email }
      dispatch({ type: "LOGIN", payload: loginData })
      localStorage.setItem('user', JSON.stringify(loginData))
    }
    
    onClose()
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()
    
    if (!resetEmail) {
      alert("Please enter your email address!")
      return
    }
    
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
    const user = existingUsers.find(u => u.email === resetEmail)
    
    if (!user) {
      alert("No account found with this email address!")
      return
    }
    
    // In a real app, this would send an email
    alert(`Password reset link sent to ${resetEmail}! (Demo: Your password is "${user.password}")`)
    setResetEmail("")
    onSwitch("signin")
  }

  if (!showModal) return null

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <div className="auth-modal-header">
          <h2>
            {showModal === "signin" ? "Sign In" : 
             showModal === "signup" ? "Register" : 
             "Reset Password"}
          </h2>
          <button className="close-btn" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {showModal === "forgot" ? (
          <form onSubmit={handleForgotPassword} className="auth-form">
            <p className="forgot-description">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth-submit-btn">
              Send Reset Link
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            {showModal === "signup" && (
              <div className="form-field">
                <label>Full Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
            
            <div className="form-field">
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-field">
              <label>Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            
            {showModal === "signup" && (
              <div className="form-field">
                <label>Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
            
            <button type="submit" className="auth-submit-btn">
              {showModal === "signin" ? "Sign In" : "Register"}
            </button>
          </form>
        )}
        
        <div className="auth-switch">
          {showModal === "signin" ? (
            <>
              <button type="button" className="forgot-password" onClick={() => onSwitch("forgot")}>
                Forgot Password?
              </button>
              <p>
                Don't have an account? <button type="button" onClick={() => onSwitch("signup")}>Register</button>
              </p>
            </>
          ) : showModal === "signup" ? (
            <p>
              Already have an account? <button type="button" onClick={() => onSwitch("signin")}>Sign In</button>
            </p>
          ) : (
            <p>
              Remember your password? <button type="button" onClick={() => onSwitch("signin")}>Sign In</button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
