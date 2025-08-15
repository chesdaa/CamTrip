"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function TripFooterSection() {
  const router = useRouter()

  const handleSignup = () => {
    // This would typically open a signup modal
    console.log("Open signup modal")
  }

  return (
    <section className="trip-footer-section">
      <div className="container">
        <div className="trip-footer-content">
          <div className="trip-footer-image">
            <Image 
              src="/images/Siem Reap.jpg" 
              alt="Siem Reap - Angkor Wat" 
              width={400}
              height={300}
              style={{ objectFit: "cover" }}
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
              <button 
                className="btn-secondary" 
                onClick={handleSignup}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
