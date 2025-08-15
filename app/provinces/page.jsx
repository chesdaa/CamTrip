"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { cambodiaData } from "../../lib/data"

export default function ProvincesPage() {
  const router = useRouter()
  const [filter, setFilter] = useState("all")

  const getProvinceImagePath = (provinceName) => {
    const imageMap = {
      "Phnom Penh": "Phnom-Penh.jpg",
      "Banteay Meanchey": "Banteay Meanchey.jpg",
      "Koh Kong": "Koh Kong.jpg",
      "Oddar Meanchey": "Oddar Meanchey.jpg",
      "Preah Vihear": "Preah Vihear.jpg",
      "Prey Veng": "Prey Veng.jpg",
      "Svay Rieng": "Svay Rieng.jpg",
      "Kampong Cham": "Kampong Cham.jpg",
      "Kampong Chhnang": "Kampong Chhnang.jpg",
      "Kampong Speu": "Kampong Speu.jpg",
      "Kampong Thom": "Kampong Thom.jpg",
      "Tbong Khmum": "Tbong Khmum.webp",
      "Kampot": "Kampot.webp",
      "Kandal": "Kandal.webp",
      "Kratié": "Kratie.png",
      "Takéo": "Takeo.jpg",
    }
    return imageMap[provinceName] || `${provinceName}.jpg`
  }

  const filteredProvinces =
    filter === "all"
      ? cambodiaData.provinces
      : cambodiaData.provinces.filter((province) =>
          province.attractions?.some((attraction) => attraction.category === filter),
        )

  return (
    <main className="main-content non-homepage">
      <div className="container">
        <div className="page-header">
          <h1>Cambodia Provinces</h1>
          <p>Discover all 25 provinces of Cambodia</p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons" style={{ marginBottom: "2rem", textAlign: "center" }}>
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            All Provinces
          </button>
          <button className={`filter-btn ${filter === "temple" ? "active" : ""}`} onClick={() => setFilter("temple")}>
            Temples
          </button>
          <button className={`filter-btn ${filter === "museum" ? "active" : ""}`} onClick={() => setFilter("museum")}>
            Museums
          </button>
          <button className={`filter-btn ${filter === "nature" ? "active" : ""}`} onClick={() => setFilter("nature")}>
            Nature
          </button>
        </div>

        <div className="provinces-grid">
          {filteredProvinces.map((province) => (
            <div
              key={province.id}
              className="province-card"
              onClick={() => router.push(`/provinces/${province.id}`)}
            >
              <div className="province-image">
                <Image
                  src={`/images/${getProvinceImagePath(province.name)}`}
                  alt={province.name}
                  width={300}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="province-info">
                <h3>{province.name}</h3>
                <p>{province.description}</p>
                {province.attractions && province.attractions.length > 0 && (
                  <div className="province-stats">
                    <span>{province.attractions.length} attractions</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
