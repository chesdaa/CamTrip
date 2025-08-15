"use client"

import { useState } from "react"
import { useAppContext } from "../providers"
import { Heart, MapPin, Star, Trash2, DollarSign, Plus } from "lucide-react"

export default function WishlistPage() {
  const { state, dispatch } = useAppContext()
  const [budgetItems, setBudgetItems] = useState([])
  const [newBudgetItem, setNewBudgetItem] = useState({ name: "", amount: 0 })

  const removeFromWishlist = (attractionId) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: attractionId })
  }

  const addToBudget = (attraction) => {
    const budgetItem = {
      id: Date.now(),
      name: attraction.name,
      amount: parseFloat(attraction.visitorInfo?.entryFee?.replace(/[^0-9.]/g, '') || 0),
      category: "Attractions"
    }
    setBudgetItems([...budgetItems, budgetItem])
  }

  const addCustomBudgetItem = () => {
    if (!newBudgetItem.name || newBudgetItem.amount <= 0) return
    
    const budgetItem = {
      id: Date.now(),
      name: newBudgetItem.name,
      amount: parseFloat(newBudgetItem.amount),
      category: "Custom"
    }
    setBudgetItems([...budgetItems, budgetItem])
    setNewBudgetItem({ name: "", amount: 0 })
  }

  const removeBudgetItem = (itemId) => {
    setBudgetItems(budgetItems.filter(item => item.id !== itemId))
  }

  const totalBudget = budgetItems.reduce((sum, item) => sum + item.amount, 0)

  return (
    <main className="main-content non-homepage">
      <div className="container">
        <div className="page-header">
          <h1>My Wishlist</h1>
          <p>Places you want to visit</p>
        </div>

        {state.wishlist.length === 0 ? (
          <div className="empty-state">
            <Heart className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3>No favorite places yet</h3>
            <p>Add attractions to your wishlist to see them here!</p>
            <button className="btn-primary" onClick={() => window.location.href = "/provinces"}>
              Browse Attractions
            </button>
          </div>
        ) : (
          <div className="wishlist-simple-grid">
            {state.wishlist.map((attraction) => (
              <div key={attraction.id} className="wishlist-simple-item">
                <div className="wishlist-simple-image">
                  {attraction.image ? (
                    <img src={attraction.image} alt={attraction.name} />
                  ) : (
                    <div className="placeholder-image">
                      <MapPin className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div className="wishlist-simple-content">
                  <h3>{attraction.name}</h3>
                  <p>{attraction.description}</p>
                  <div className="wishlist-simple-actions">
                    <button 
                      className="btn-view"
                      onClick={() => window.location.href = `/attractions/${attraction.id}?from=wishlist`}
                    >
                      <span>👁</span>
                      View
                    </button>
                    <button 
                      className="btn-remove"
                      onClick={() => removeFromWishlist(attraction.id)}
                    >
                      <span>🗑</span>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
