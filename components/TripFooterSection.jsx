"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useAppContext } from "../app/providers"
import AuthModals from "./AuthModals"

export default function TripFooterSection() {
  const router = useRouter()
  const { state } = useAppContext()
  const [showAuthModal, setShowAuthModal] = useState(null)

  const handleSignup = () => {
    setShowAuthModal("signup")
  }

  return (
    <section className="trip-footer-section">
      <div className="container">
        <div className="trip-footer-content">
          <div className="trip-footer-image">
            <Image 
              src="/images/trip.jpg" 
              alt="Explore Cambodia - Beautiful Travel Destination" 
              width={400}
              height={300}
              className="trip-footer-img"
              style={{ 
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)"
              }}
              onError={(e) => {
                // Fallback to a placeholder if image doesn't exist
                e.target.src = "/placeholder.svg?height=300&width=400"
              }}
            />
          </div>
          <div className="trip-footer-text">
            <h3>Ready to Explore Cambodia?</h3>
            <p>Join thousands of travelers who have discovered the wonders of Cambodia. Start your journey today!</p>
            <div className="trip-footer-actions">
              <button 
                className="btn-secondary" 
                onClick={() => router.push("/trip-planner")}
              >
                Plan Your Trip
              </button>
              {!state.user && (
                <button 
                  className="btn-secondary" 
                  onClick={handleSignup}
                >
                  Register Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <AuthModals
        showModal={showAuthModal}
        onClose={() => setShowAuthModal(null)}
        onSwitch={(type) => setShowAuthModal(type)}
      />
    </section>
  )
}
