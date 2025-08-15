"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function FeaturedProvinces() {
  const router = useRouter()

  const topProvinces = [
    {
      id: 1,
      name: "Siem Reap",
      description: "Home to the magnificent Angkor Wat temple complex",
      image: "/images/Siem Reap.jpg",
    },
    {
      id: 2,
      name: "Phnom Penh", 
      description: "The vibrant capital city with rich history and culture",
      image: "/images/Phnom-Penh.jpg",
    },
    {
      id: 3,
      name: "Sihanoukville",
      description: "Coastal city with beautiful beaches and islands",
      image: "/images/Sihanoukville.jpg",
    },
    {
      id: 4,
      name: "Battambang",
      description: "Charming provincial town with French colonial architecture",
      image: "/images/Battambang.jpg",
    },
    {
      id: 5,
      name: "Kampot",
      description: "Riverside town famous for pepper farms and colonial charm",
      image: "/images/Kampot.jpg",
    },
  ]

  const handleProvinceClick = (provinceId) => {
    router.push(`/provinces/${provinceId}`)
  }

  return (
    <section className="top-provinces">
      <div className="container">
        <h2 className="top-provinces-title">Top Provinces</h2>
        
        <div className="top-provinces-grid">
          {topProvinces.map((province) => (
            <div 
              key={province.id} 
              className="top-province-card"
              onClick={() => handleProvinceClick(province.id)}
            >
              <div className="top-province-image">
                <Image
                  src={province.image}
                  alt={province.name}
                  fill
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=200&width=300"
                  }}
                />
              </div>
              <div className="top-province-content">
                <h3 className="top-province-name">{province.name}</h3>
                <p className="top-province-description">{province.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="top-provinces-footer">
          <button 
            className="view-all-provinces-btn"
            onClick={() => router.push("/provinces")}
          >
            View All Provinces
          </button>
        </div>
      </div>
    </section>
  )
}
