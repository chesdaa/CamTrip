"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { cambodiaData, quickRecommendationAttractions } from "../../../lib/data"
import { useAppContext } from "../../providers"
import { Heart, Star, MapPin, Clock, DollarSign, Calendar, Users, MessageCircle } from "lucide-react"
import Toast from "../../../components/Toast"
import AuthModals from "../../../components/AuthModals"

export default function AttractionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { state, dispatch } = useAppContext()
  const [toast, setToast] = useState(null)
  const [newTip, setNewTip] = useState("")
  const [userName, setUserName] = useState("")
  const [showAuthModal, setShowAuthModal] = useState(null)

  // Check if coming from wishlist
  const fromWishlist = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('from') === 'wishlist'

  const handleBackClick = () => {
    if (fromWishlist) {
      router.push('/wishlist')
    } else {
      router.back()
    }
  }

  const attractionId = Number.parseInt(params.id)

  // Find attraction across all provinces and Quick Recommendations
  let attraction = null
  let parentProvince = null

  // First check provinces
  for (const province of cambodiaData.provinces) {
    if (province.attractions) {
      const found = province.attractions.find((a) => a.id === attractionId)
      if (found) {
        attraction = found
        parentProvince = province
        break
      }
    }
  }

  // If not found in provinces, check Quick Recommendations attractions
  if (!attraction) {
    attraction = quickRecommendationAttractions.find((a) => a.id === attractionId)
    if (attraction) {
      // Create a mock province object for Quick Recommendation attractions
      parentProvince = {
        name: attraction.province || "Cambodia",
        description: `Province where ${attraction.name} is located`
      }
    }
  }

  if (!attraction) {
    return (
      <main className="main-content non-homepage">
        <div className="container">
          <div className="empty-state">
            <h3>Attraction not found</h3>
            <p>The attraction you're looking for doesn't exist.</p>
            <button className="btn-primary" onClick={() => router.push("/provinces")}>
              Back to Provinces
            </button>
          </div>
        </div>
      </main>
    )
  }

  const handleAddToWishlist = () => {
    if (!state.user) {
      setShowAuthModal("signin")
      return
    }
    
    dispatch({ type: "ADD_TO_WISHLIST", payload: attraction })
    setToast({
      type: "success",
      message: "Added to wishlist!",
    })
  }

  const handleAddToTripPlan = () => {
    if (!state.user) {
      setShowAuthModal("signin")
      return
    }

    // Add attraction to trip plan
    const newDay = {
      day: state.tripPlan.length + 1,
      date: new Date(Date.now() + (state.tripPlan.length * 24 * 60 * 60 * 1000)).toLocaleDateString(),
      activities: [{
        time: "10:00 AM",
        name: attraction.name,
        description: attraction.description,
        estimatedCost: attraction.estimatedCost || 25,
        category: attraction.category
      }],
      totalCost: attraction.estimatedCost || 25
    }

    dispatch({ type: "UPDATE_TRIP_PLAN", payload: [...state.tripPlan, newDay] })
    setToast({
      type: "success",
      message: "Added to trip plan!",
    })
  }

  const handleAddTip = () => {
    if (newTip.trim() && userName.trim()) {
      const tip = {
        id: Date.now(),
        text: newTip,
        author: userName,
        date: new Date().toLocaleDateString(),
      }
      dispatch({
        type: "ADD_TIP",
        payload: { attractionId: attractionId.toString(), tip },
      })
      setNewTip("")
      setToast({
        type: "success",
        title: "Tip Added",
        message: "Thank you for sharing your tip!",
      })
    }
  }

  const isInWishlist = state.wishlist.some((item) => item.id === attraction.id)
  const attractionTips = state.userTips[attractionId.toString()] || []

  return (
    <>
      <main className="main-content non-homepage">
        <div className="container">
          <div className="attraction-header">
            <div className="header-top">
              <button className="back-btn" onClick={handleBackClick}>
                <i className="fas fa-arrow-left"></i> Back
              </button>
            </div>

            <div className="attraction-title-section">
              <h1>{attraction.name}</h1>
              <div className="attraction-meta">
                <span className="category-badge">{attraction.category}</span>
                <span className="location-info">
                  <MapPin className="w-4 h-4" />
                  <span>{parentProvince?.name}</span>
                </span>
              </div>
            </div>

            <div className="attraction-actions">
              <button 
                className={`btn-wishlist ${isInWishlist ? "active" : ""}`}
                onClick={handleAddToWishlist}
                disabled={isInWishlist}
              >
                <Heart className="w-4 h-4" />
                <span>{isInWishlist ? "In Wishlist" : "Add to Wishlist"}</span>
              </button>
              <button className="btn-trip-plan" onClick={handleAddToTripPlan}>
                <i className="fas fa-plus"></i>
                <span>Add to Trip Plan</span>
              </button>
            </div>
          </div>

          <div className="attraction-content">
            <div className="attraction-layout">
              <div className="attraction-gallery">
                <div className="main-image">
                  <Image
                    src={attraction.image || "/placeholder.svg?height=400&width=800"}
                    alt={attraction.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              <div className="attraction-details">
                <div className="detail-section">
                  <h3>About This Place</h3>
                  <p>{attraction.description}</p>
                </div>
                {attraction.culturalInfo && (
                  <div className="detail-section">
                    <h3>Cultural Information</h3>
                    <div>{attraction.culturalInfo}</div>
                  </div>
                )}

                {attraction.visitorInfo && (
                  <div className="detail-section">
                    <h3>Visitor Information</h3>
                    <div>
                      <p><strong>Opening Hours:</strong> {attraction.visitorInfo.openingHours}</p>
                      <p><strong>Entry Fee:</strong> {attraction.visitorInfo.entryFee}</p>
                      <p><strong>Best Time:</strong> {attraction.visitorInfo.bestTime}</p>
                      <p><strong>Duration:</strong> {attraction.visitorInfo.duration}</p>
                    </div>
                  </div>
                )}

                {attraction.coordinates && (
                  <div className="detail-section">
                    <h3>Location</h3>
                    <div className="map-container">
                      <p>Lat: {attraction.coordinates.lat}, Lng: {attraction.coordinates.lng}</p>
                      <a 
                        href="https://maps.app.goo.gl/FvWTfMakCivDLTBq7?g_st=ipc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="google-maps-btn"
                      >
                        <MapPin className="w-4 h-4" />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                )}

                <div className="detail-section">
                  <h3>Share This Place</h3>
                  <div className="social-sharing">
                    <button className="social-btn facebook">
                      <i className="fab fa-facebook"></i> Facebook
                    </button>
                    <button className="social-btn twitter">
                      <i className="fab fa-twitter"></i> Twitter
                    </button>
                    <button className="social-btn telegram">
                      <i className="fab fa-telegram"></i> Telegram
                    </button>
                    <button className="social-btn copy-link">
                      <i className="fas fa-link"></i> Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {toast && <Toast type={toast.type} title={toast.title} message={toast.message} onClose={() => setToast(null)} />}
      
      <AuthModals
        showModal={showAuthModal}
        onClose={() => setShowAuthModal(null)}
        onSwitch={(type) => setShowAuthModal(type)}
      />
    </>
  )
}
