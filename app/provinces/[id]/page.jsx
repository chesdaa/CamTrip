"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { cambodiaData } from "../../../lib/data"
import { useAppContext } from "../../providers"
import { Heart, Star, Phone, Car, Hotel, ArrowLeft } from "lucide-react"
import Toast from "../../../components/Toast"

export default function ProvinceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { state, dispatch } = useAppContext()
  const [toast, setToast] = useState(null)
  const [activeTab, setActiveTab] = useState('highlights')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const provinceId = Number.parseInt(params.id)
  const province = cambodiaData.provinces.find((p) => p.id === provinceId)

  if (!province) {
    return (
      <main className="main-content non-homepage">
        <div className="container">
          <div className="empty-state">
            <h3>Province not found</h3>
            <p>The province you're looking for doesn't exist.</p>
            <button className="btn-primary" onClick={() => router.push("/provinces")}>
              Back to Provinces
            </button>
          </div>
        </div>
      </main>
    )
  }

  const getProvinceImageName = (provinceName) => {
    const nameMap = {
      "Phnom Penh": "Phnom-Penh",
      "Banteay Meanchey": "Banteay Meanchey",
      "Koh Kong": "Koh Kong",
      "Oddar Meanchey": "Oddar Meanchey",
      "Preah Vihear": "Preah Vihear",
      "Prey Veng": "Prey Veng",
      "Svay Rieng": "Svay Rieng",
      "Kampong Cham": "Kampong Cham",
      "Kampong Chhnang": "Kampong Chhnang",
      "Kampong Speu": "Kampong Speu",
      "Kampong Thom": "Kampong Thom",
      "Tbong Khmum": "Tbong Khmum",
    }
    return nameMap[provinceName] || provinceName
  }

  const handleAddToWishlist = (attraction) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: attraction })
    setToast({
      type: "success",
      title: "Added to Wishlist",
      message: `${attraction.name} has been added to your wishlist`,
    })
  }

  const isInWishlist = (attractionId) => {
    return state.wishlist.some((item) => item.id === attractionId)
  }

  const filterAttractions = (attractions) => {
    if (selectedFilter === 'all') return attractions
    return attractions.filter(attraction => 
      attraction.category?.toLowerCase() === selectedFilter.toLowerCase()
    )
  }

  const getTransportOptions = (provinceName) => {
    const transportData = {
      "Siem Reap": [
        { name: "Tuk-tuk", price: "$15-20/day" },
        { name: "Bicycle rental", price: "$2-3/day" },
        { name: "Motorbike rental", price: "$7-10/day" },
        { name: "Private taxi", price: "$25-40/day" },
        { name: "Airport shuttle", price: "$8-12/trip" }
      ],
      "Phnom Penh": [
        { name: "Tuk-tuk", price: "$10-15/day" },
        { name: "Motorbike taxi", price: "$1-3/trip" },
        { name: "Private car", price: "$30-50/day" },
        { name: "City bus", price: "$0.50/trip" },
        { name: "Grab taxi", price: "$3-8/trip" }
      ],
      "Battambang": [
        { name: "Bamboo train", price: "$5/trip" },
        { name: "Tuk-tuk", price: "$12-18/day" },
        { name: "Bicycle rental", price: "$2-4/day" },
        { name: "Motorbike rental", price: "$6-9/day" },
        { name: "Local bus", price: "$2-5/trip" }
      ]
    }
    return transportData[provinceName] || [
      { name: "Tuk-tuk", price: "$12-18/day" },
      { name: "Bicycle rental", price: "$2-4/day" },
      { name: "Motorbike rental", price: "$6-10/day" },
      { name: "Local transport", price: "$3-8/trip" }
    ]
  }

  const getAccommodationOptions = (provinceName) => {
    const accommodationData = {
      "Siem Reap": [
        { name: "Raffles Grand Hotel d'Angkor", price: "$200-400/night" },
        { name: "Shinta Mani Angkor", price: "$150-250/night" },
        { name: "Mad Monkey Hostel", price: "$8-15/night" },
        { name: "Boutique hotels", price: "$50-120/night" },
        { name: "Guesthouses", price: "$10-25/night" }
      ],
      "Phnom Penh": [
        { name: "Rosewood Phnom Penh", price: "$300-600/night" },
        { name: "Raffles Hotel Le Royal", price: "$200-400/night" },
        { name: "Mad Monkey Hostel", price: "$10-18/night" },
        { name: "Business hotels", price: "$60-150/night" },
        { name: "Budget hotels", price: "$15-40/night" }
      ],
      "Battambang": [
        { name: "Maisons Wat Kor", price: "$80-150/night" },
        { name: "Bambu Hotel", price: "$40-80/night" },
        { name: "Here Be Dragons", price: "$12-20/night" },
        { name: "Local guesthouses", price: "$8-15/night" },
        { name: "Homestays", price: "$15-30/night" }
      ]
    }
    return accommodationData[provinceName] || [
      { name: "Mid-range hotels", price: "$40-100/night" },
      { name: "Budget hotels", price: "$15-35/night" },
      { name: "Hostels", price: "$8-18/night" },
      { name: "Guesthouses", price: "$10-25/night" }
    ]
  }

  const getEmergencyContacts = (provinceName) => {
    const emergencyData = {
      "Siem Reap": {
        hospital: "Angkor Hospital for Children: +855 63 963 409",
        telegram: "@SiemReapTourism",
        messenger: "fb.com/SiemReapOfficial",
        telegramLink: "https://t.me/SiemReapTourism",
        messengerLink: "https://m.me/SiemReapOfficial"
      },
      "Phnom Penh": {
        hospital: "Calmette Hospital: +855 23 426 948",
        telegram: "@PhnomPenhTourism",
        messenger: "fb.com/PhnomPenhOfficial",
        telegramLink: "https://t.me/PhnomPenhTourism",
        messengerLink: "https://m.me/PhnomPenhOfficial"
      },
      "Battambang": {
        hospital: "Battambang Provincial Hospital: +855 53 952 024",
        telegram: "@BattambangTourism",
        messenger: "fb.com/BattambangOfficial",
        telegramLink: "https://t.me/BattambangTourism",
        messengerLink: "https://m.me/BattambangOfficial"
      }
    }
    return emergencyData[provinceName] || {
      hospital: "Provincial Hospital: +855 23 724 891",
      telegram: "@CambodiaTourism",
      messenger: "fb.com/CambodiaOfficial",
      telegramLink: "https://t.me/CambodiaTourism",
      messengerLink: "https://m.me/CambodiaOfficial"
    }
  }

  const imageBaseName = getProvinceImageName(province.name)

  return (
    <>
      <main className="main-content non-homepage">
        <div className="container">
          {/* Back Button */}
          <div className="province-header">
            <button className="back-btn" onClick={() => router.push('/provinces')}>
              <ArrowLeft className="w-4 h-4" /> Back to Provinces
            </button>
          </div>

          {/* Province Title Section */}
          <div className="province-title-section">
            <h1 className="province-title">{province.name}</h1>
            <p className="province-description">{province.description}</p>
          </div>

          {/* Province Navigation */}
          <div className="province-nav">
            <div className="province-nav-list">
              <button 
                className="province-nav-item"
                onClick={() => document.getElementById('highlights-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Highlights
              </button>
              <button 
                className="province-nav-item"
                onClick={() => document.getElementById('attractions-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Attractions
              </button>
              <button 
                className="province-nav-item"
                onClick={() => document.getElementById('transport-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Transport & Hotels
              </button>
              <button 
                className="province-nav-item"
                onClick={() => document.getElementById('emergency-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Emergency Contacts
              </button>
            </div>
          </div>


          {/* Highlights Section */}
          {province.highlights && province.highlights.length > 0 && (
            <section id="highlights-section" className="highlights-section">
              <h2>Best Places to Visit</h2>
              <div className="highlights-grid">
                {province.highlights.map((highlight) => (
                  <div key={highlight.id} className="highlight-card" onClick={() => router.push(`/attractions/${highlight.id}`)}>
                    <div className="highlight-image">
                      <Image
                        src={highlight.image || "/placeholder.svg?height=250&width=400"}
                        alt={highlight.name}
                        fill
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentElement.style.background = 'linear-gradient(135deg, #ffffff, #ff7043)'
                          e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 3rem; color: white;">🏛️</div>`
                        }}
                      />
                    </div>
                    <div className="highlight-info">
                      <h3>{highlight.name}</h3>
                      <p>{highlight.description}</p>
                      {highlight.rating && (
                        <div className="highlight-rating">
                          <div className="stars">
                            <Star className="w-4 h-4 fill-current" />
                          </div>
                          <span>{highlight.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* All Attractions */}
          {province.attractions && province.attractions.length > 0 && (
            <section id="attractions-section" className="attractions-section">
              <h2>All Places in the Province</h2>
              <div className="attractions-grid">
                {province.attractions.map((attraction) => (
                  <div key={attraction.id} className="attraction-card" onClick={() => router.push(`/attractions/${attraction.id}`)}>
                    <div className="attraction-image">
                      <Image
                        src={attraction.image || "/placeholder.svg?height=180&width=300"}
                        alt={attraction.name}
                        fill
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentElement.style.background = 'linear-gradient(135deg, #ff7043, #d32f2f)'
                          e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 2.5rem; color: white;">🏛️</div>`
                        }}
                      />
                      <button
                        className={`wishlist-btn ${isInWishlist(attraction.id) ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleAddToWishlist(attraction)
                        }}
                        disabled={isInWishlist(attraction.id)}
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="attraction-info">
                      <h3>{attraction.name}</h3>
                      <p>{attraction.description}</p>
                      <div className="attraction-meta">
                        <span className="category">{attraction.category}</span>
                        {attraction.rating && (
                          <div className="rating">
                            <Star className="w-4 h-4 fill-current text-yellow-500" />
                            <span>{attraction.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Transport & Hotels */}
          <section id="transport-section" className="recommendations-section">
            <h2>Transport & Accommodation</h2>
            <div className="transport-content">
              <div className="transport-column">
                <h3>Transportation</h3>
                {getTransportOptions(province.name).map((transport, index) => (
                  <div key={index} className="transport-item">
                    <div className="transport-item-header">
                      <strong>{transport.name}</strong>
                      <span>{transport.price}</span>
                    </div>
                    <a href="#" className="view-map-btn">📍 View on Map</a>
                  </div>
                ))}
              </div>
              <div className="transport-column">
                <h3>Accommodation</h3>
                {getAccommodationOptions(province.name).map((accommodation, index) => (
                  <div key={index} className="transport-item">
                    <div className="transport-item-header">
                      <strong>{accommodation.name}</strong>
                      <span>{accommodation.price}</span>
                    </div>
                    <a href="#" className="view-map-btn">📍 View on Map</a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Emergency Contacts */}
          <section id="emergency-section" className="emergency-section">
            <h2>Emergency Contacts</h2>
            <div className="emergency-content">
              <div className="emergency-column">
                <h3>Emergency Services</h3>
                <div className="emergency-item">
                  <div className="emergency-item-header">
                    <strong>Police:</strong>
                    <span>117</span>
                  </div>
                </div>
                <div className="emergency-item">
                  <div className="emergency-item-header">
                    <strong>Fire:</strong>
                    <span>118</span>
                  </div>
                </div>
                <div className="emergency-item">
                  <div className="emergency-item-header">
                    <strong>Ambulance:</strong>
                    <span>119</span>
                  </div>
                </div>
                <div className="emergency-item">
                  <div className="emergency-item-header">
                    <strong>Tourist Police:</strong>
                    <span>+855 12 942 484</span>
                  </div>
                </div>
                <div className="emergency-item">
                  <div className="emergency-item-header">
                    <strong>Hospital:</strong>
                    <span>{getEmergencyContacts(province.name).hospital}</span>
                  </div>
                </div>
                <div className="emergency-buttons">
                  <button className="contact-btn" onClick={() => window.open('tel:117')}>
                    Call Police
                  </button>
                  <button className="contact-btn" onClick={() => window.open('tel:119')}>
                    Call Ambulance
                  </button>
                </div>
              </div>
              <div className="emergency-column">
                <h3>Local Contacts</h3>
                <div className="emergency-item">
                  <div className="emergency-item-header">
                    <strong>Telegram:</strong>
                    <span>{getEmergencyContacts(province.name).telegram}</span>
                  </div>
                </div>
                <div className="emergency-item">
                  <div className="emergency-item-header">
                    <strong>Messenger:</strong>
                    <span>{getEmergencyContacts(province.name).messenger}</span>
                  </div>
                </div>
                <div className="emergency-buttons">
                  <a href={getEmergencyContacts(province.name).telegramLink} className="social-btn" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                  <a href={getEmergencyContacts(province.name).messengerLink} className="social-btn" target="_blank" rel="noopener noreferrer">
                    Messenger
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {toast && <Toast type={toast.type} title={toast.title} message={toast.message} onClose={() => setToast(null)} />}
    </>
  )
}
