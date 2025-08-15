"use client"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="main-content non-homepage">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with our travel experts</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3><i className="fas fa-map-marker-alt"></i> Address</h3>
              <p>123 Riverside Boulevard<br />Phnom Penh, Cambodia</p>
            </div>

            <div className="contact-item">
              <h3><i className="fas fa-phone"></i> Phone</h3>
              <p>+855 23 123 4567</p>
            </div>

            <div className="contact-item">
              <h3><i className="fas fa-envelope"></i> Email</h3>
              <p>info@cambodiatravel.com</p>
            </div>

            <div className="contact-item">
              <h3><i className="fas fa-clock"></i> Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
