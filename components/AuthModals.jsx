"use client"

import { useState } from "react"
import { useAppContext } from "../app/providers"
import { X, Eye, EyeOff } from "lucide-react"
import { generateToken, setAuthCookie } from "../lib/auth"

export default function AuthModals({ showModal, onClose, onSwitch }) {
  const { dispatch } = useAppContext()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  })
  const [resetEmail, setResetEmail] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showNewConfirmPassword, setShowNewConfirmPassword] = useState(false)
  const [passwordErrors, setPasswordErrors] = useState([])
  const [verificationCode, setVerificationCode] = useState("")
  const [sentCode, setSentCode] = useState("")
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [isCodeVerified, setIsCodeVerified] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [newConfirmPassword, setNewConfirmPassword] = useState("")

  const validatePassword = (password) => {
    const errors = []
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long")
    }
    if (!/[a-zA-Z]/.test(password)) {
      errors.push("Password must contain at least one letter")
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number")
    }
    return errors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Validate password in real-time
    if (name === "password") {
      setPasswordErrors(validatePassword(value))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (showModal === "signup") {
      // Validate password
      const errors = validatePassword(formData.password)
      if (errors.length > 0) {
        alert("Password validation failed:\n" + errors.join("\n"))
        return
      }
      
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
      
      // Generate JWT token and set cookie
      const token = generateToken(userData)
      setAuthCookie(token)
      
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
      
      // Generate JWT token and set cookie
      const token = generateToken(user)
      setAuthCookie(token)
      
      // Login user
      const loginData = { id: user.id, name: user.name, email: user.email }
      dispatch({ type: "LOGIN", payload: loginData })
      localStorage.setItem('user', JSON.stringify(loginData))
    }
    
    onClose()
  }

  const handleSendCode = (e) => {
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
    
    // Generate random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    setSentCode(code)
    setIsCodeSent(true)
    
    // In a real app, this would send an email
    alert(`Verification code sent to ${resetEmail}! (Demo code: ${code})`)
  }

  const handleVerifyCode = (e) => {
    e.preventDefault()
    
    if (verificationCode !== sentCode) {
      alert("Invalid verification code!")
      return
    }
    
    setIsCodeVerified(true)
    alert("Code verified! Please set your new password.")
  }

  const handleResetPassword = (e) => {
    e.preventDefault()
    
    // Validate new password
    const errors = validatePassword(newPassword)
    if (errors.length > 0) {
      alert("Password validation failed:\n" + errors.join("\n"))
      return
    }
    
    if (newPassword !== newConfirmPassword) {
      alert("Passwords don't match!")
      return
    }
    
    // Update password in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
    const userIndex = existingUsers.findIndex(u => u.email === resetEmail)
    
    if (userIndex !== -1) {
      existingUsers[userIndex].password = newPassword
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers))
      
      alert("Password reset successfully!")
      
      // Reset all states
      setResetEmail("")
      setVerificationCode("")
      setSentCode("")
      setIsCodeSent(false)
      setIsCodeVerified(false)
      setNewPassword("")
      setNewConfirmPassword("")
      
      onSwitch("signin")
    }
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
          <>
            {!isCodeSent ? (
              <form onSubmit={handleSendCode} className="auth-form">
                <p className="forgot-description">
                  Enter your email address and we'll send you a verification code to reset your password.
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
                  Send Verification Code
                </button>
              </form>
            ) : !isCodeVerified ? (
              <form onSubmit={handleVerifyCode} className="auth-form">
                <p className="forgot-description">
                  Enter the 6-digit verification code sent to {resetEmail}
                </p>
                <div className="form-field">
                  <label>Verification Code</label>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    maxLength="6"
                    placeholder="Enter 6-digit code"
                    required
                  />
                </div>
                <button type="submit" className="auth-submit-btn">
                  Verify Code
                </button>
                <button 
                  type="button" 
                  className="forgot-password" 
                  onClick={() => {
                    setIsCodeSent(false)
                    setVerificationCode("")
                  }}
                >
                  Back to Email
                </button>
              </form>
            ) : (
              <form onSubmit={handleResetPassword} className="auth-form">
                <p className="forgot-description">
                  Create your new password
                </p>
                <div className="form-field">
                  <label>New Password</label>
                  <div className="password-input-container">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {newPassword && (
                    <div className="password-validation">
                      {validatePassword(newPassword).map((error, index) => (
                        <div key={index} className="validation-error">
                          {error}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="form-field">
                  <label>Confirm New Password</label>
                  <div className="password-input-container">
                    <input
                      type={showNewConfirmPassword ? "text" : "password"}
                      value={newConfirmPassword}
                      onChange={(e) => setNewConfirmPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowNewConfirmPassword(!showNewConfirmPassword)}
                    >
                      {showNewConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <button type="submit" className="auth-submit-btn">
                  Reset Password
                </button>
              </form>
            )}
          </>
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
              <div className="password-input-container">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {showModal === "signup" && formData.password && passwordErrors.length > 0 && (
                <div className="password-validation">
                  {passwordErrors.map((error, index) => (
                    <div key={index} className="validation-error">
                      {error}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {showModal === "signup" && (
              <div className="form-field">
                <label>Confirm Password</label>
                <div className="password-input-container">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
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
