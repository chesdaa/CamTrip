"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { cambodiaData } from "../../lib/data"

export default function ProvincesPage() {
  const router = useRouter()
  const [filter, setFilter] = useState("all")

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
                  src={`/images/${getProvinceImageName(province.name)}.jpg`}
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
