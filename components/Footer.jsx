"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Image 
                src="/images/logo.png" 
                alt="Cambodia Trip Logo" 
                width={40}
                height={40}
                className="footer-logo-image"
              />
              <div className="footer-logo-text">
                <span className="footer-logo-main">CAMBODIA</span>
                <span className="footer-logo-sub">TRIP</span>
              </div>
            </div>
            <p>Your trusted guide to exploring the Kingdom of Wonder. Discover Cambodia's rich culture, stunning temples, and natural beauty.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Information</h4>
            <ul>
              <li><a href="#" onClick={() => router.push("/about")}>About Us</a></li>
              <li><a href="#" onClick={() => router.push("/contact")}>Contact</a></li>
              <li><a href="#" onClick={() => router.push("/privacy")}>Privacy Policy</a></li>
              <li><a href="#" onClick={() => router.push("/terms")}>Terms of Service</a></li>
              <li><a href="#" onClick={() => router.push("/sitemap")}>Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> Phnom Penh, Cambodia</p>
              <p><i className="fas fa-phone"></i> +855 23 123 4567</p>
              <p><i className="fas fa-envelope"></i> info@cambodiatravel.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Cambodia Trip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
