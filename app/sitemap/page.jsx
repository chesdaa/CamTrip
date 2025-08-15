"use client"

import { useRouter } from "next/navigation"

export default function SitemapPage() {
  const router = useRouter()

  const handleNavigation = (path) => {
    router.push(path)
  }

  return (
    <main className="main-content non-homepage">
      <div className="container">
        <div className="page-header">
          <h1>Sitemap</h1>
          <p>Navigate through all our pages</p>
        </div>

        <div className="sitemap-content">
          <div className="sitemap-section">
            <h2>Main Pages</h2>
            <ul>
              <li><a href="#" onClick={() => handleNavigation("/")}>Home</a></li>
              <li><a href="#" onClick={() => handleNavigation("/provinces")}>Provinces</a></li>
              <li><a href="#" onClick={() => handleNavigation("/trip-planner")}>Trip Planner</a></li>
              <li><a href="#" onClick={() => handleNavigation("/wishlist")}>Wishlist</a></li>
              <li><a href="#" onClick={() => handleNavigation("/budget")}>Budget Planner</a></li>
            </ul>
          </div>

          <div className="sitemap-section">
            <h2>Provinces</h2>
            <ul>
              <li>Siem Reap</li>
              <li>Phnom Penh</li>
              <li>Sihanoukville</li>
              <li>Battambang</li>
              <li>Kampot</li>
              <li>Kep</li>
              <li>Mondulkiri</li>
              <li>Ratanakiri</li>
              <li>And 17 more provinces...</li>
            </ul>
          </div>

          <div className="sitemap-section">
            <h2>Information Pages</h2>
            <ul>
              <li><a href="#" onClick={() => handleNavigation("/about")}>About Us</a></li>
              <li><a href="#" onClick={() => handleNavigation("/contact")}>Contact</a></li>
              <li><a href="#" onClick={() => handleNavigation("/privacy")}>Privacy Policy</a></li>
              <li><a href="#" onClick={() => handleNavigation("/terms")}>Terms of Service</a></li>
              <li><a href="#" onClick={() => handleNavigation("/sitemap")}>Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
