"use client"

import { useRouter } from "next/navigation"

export default function QuickRecommendations() {
  const router = useRouter()

  const recommendations = [
    {
      id: 1,
      category: "1-Day Trips",
      items: [
        { name: "Phnom Tamao Wildlife Rescue Center", attractionId: 15 },
        { name: "Koh Dach (Silk Island)", attractionId: 16 },
        { name: "Oudong Mountain", attractionId: 17 }
      ]
    },
    {
      id: 2,
      category: "Family-Friendly",
      items: [
        { name: "Siem Reap Water Park", attractionId: 18 },
        { name: "Cambodian Cultural Village", attractionId: 19 },
        { name: "Tonle Sap Floating Villages", attractionId: 20 }
      ]
    },
    {
      id: 3,
      category: "Cultural Experience",
      items: [
        { name: "Royal Palace & Silver Pagoda", attractionId: 2 },
        { name: "Tuol Sleng Genocide Museum", attractionId: 21 },
        { name: "Traditional Apsara Dance Shows", attractionId: 22 }
      ]
    },
    {
      id: 4,
      category: "Adventure & Nature",
      items: [
        { name: "Kulen Mountain National Park", attractionId: 23 },
        { name: "Cardamom Mountains Trekking", attractionId: 24 },
        { name: "Mekong River Dolphin Watching", attractionId: 25 }
      ]
    }
  ]

  const handleCategoryClick = (e, category) => {
    e.stopPropagation()
    // Navigate to a filtered attractions page or search results
    router.push(`/attractions?category=${encodeURIComponent(category)}`)
  }

  const handleItemClick = (e, attractionId) => {
    e.stopPropagation()
    // Navigate to specific attraction detail page
    router.push(`/attractions/${attractionId}`)
  }

  return (
    <section className="quick-recommendations">
      <div className="container">
        <h2 className="quick-recommendations-title">Quick Recommendations</h2>
        
        <div className="recommendations-grid">
          {recommendations.map((recommendation) => (
            <div 
              key={recommendation.id} 
              className="recommendation-card"
              onClick={(e) => handleCategoryClick(e, recommendation.category)}
            >
              <h3 className="recommendation-category">{recommendation.category}</h3>
              <ul className="recommendation-items">
                {recommendation.items.map((item, index) => (
                  <li 
                    key={index} 
                    className="recommendation-item"
                    onClick={(e) => handleItemClick(e, item.attractionId)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
