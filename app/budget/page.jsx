"use client"

import { useState } from "react"
import { useAppContext } from "../providers"
import { Plus } from "lucide-react"

export default function BudgetPage() {
  const { state, dispatch } = useAppContext()
  const [budgetData, setBudgetData] = useState({
    accommodation: { nights: 5, perNight: 30 },
    food: { perDay: 15 },
    transport: { localPerDay: 10, airportTransfer: 20 },
    activities: { perDay: 25 },
    shopping: { total: 50 }
  })
  const [customItems, setCustomItems] = useState([])
  const [newCustomItem, setNewCustomItem] = useState({ name: "", amount: "" })

  const removeCustomItem = (index) => {
    setCustomItems(customItems.filter((_, i) => i !== index))
  }

  const updateBudgetData = (category, field, value) => {
    setBudgetData(prev => ({
      ...prev,
      [category]: { ...prev[category], [field]: parseFloat(value) || 0 }
    }))
  }

  const addCustomItem = () => {
    if (!newCustomItem.name || !newCustomItem.amount) return
    setCustomItems([...customItems, { ...newCustomItem, amount: parseFloat(newCustomItem.amount) }])
    setNewCustomItem({ name: "", amount: "" })
  }

  // Calculate totals
  const accommodationTotal = budgetData.accommodation.nights * budgetData.accommodation.perNight
  const foodTotal = budgetData.food.perDay * budgetData.accommodation.nights
  const transportTotal = (budgetData.transport.localPerDay * budgetData.accommodation.nights) + budgetData.transport.airportTransfer
  const activitiesTotal = budgetData.activities.perDay * budgetData.accommodation.nights
  const shoppingTotal = budgetData.shopping.total
  const customTotal = customItems.reduce((sum, item) => sum + item.amount, 0)
  const grandTotal = accommodationTotal + foodTotal + transportTotal + activitiesTotal + shoppingTotal + customTotal

  return (
    <main className="main-content non-homepage">
      <div className="container">
        <div className="page-header">
          <h1>Budget Planner</h1>
          <p>Estimate and track your travel expenses</p>
        </div>

        <div className="budget-calculator">
          <h2>Budget Calculator</h2>
          
          <div className="budget-section">
            <h3>Accommodation</h3>
            <div className="budget-inputs">
              <div className="input-group">
                <label>Nights:</label>
                <input 
                  type="number" 
                  value={budgetData.accommodation.nights}
                  onChange={(e) => updateBudgetData('accommodation', 'nights', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Per night ($):</label>
                <input 
                  type="number" 
                  value={budgetData.accommodation.perNight}
                  onChange={(e) => updateBudgetData('accommodation', 'perNight', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="budget-section">
            <h3>Food & Dining</h3>
            <div className="budget-inputs">
              <div className="input-group">
                <label>Per day ($):</label>
                <input 
                  type="number" 
                  value={budgetData.food.perDay}
                  onChange={(e) => updateBudgetData('food', 'perDay', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="budget-section">
            <h3>Transportation</h3>
            <div className="budget-inputs">
              <div className="input-group">
                <label>Local transport per day ($):</label>
                <input 
                  type="number" 
                  value={budgetData.transport.localPerDay}
                  onChange={(e) => updateBudgetData('transport', 'localPerDay', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Airport transfers ($):</label>
                <input 
                  type="number" 
                  value={budgetData.transport.airportTransfer}
                  onChange={(e) => updateBudgetData('transport', 'airportTransfer', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="budget-section">
            <h3>Activities & Tours</h3>
            <div className="budget-inputs">
              <div className="input-group">
                <label>Per day ($):</label>
                <input 
                  type="number" 
                  value={budgetData.activities.perDay}
                  onChange={(e) => updateBudgetData('activities', 'perDay', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="budget-section">
            <h3>Shopping & Miscellaneous</h3>
            <div className="budget-inputs">
              <div className="input-group">
                <label>Total ($):</label>
                <input 
                  type="number" 
                  value={budgetData.shopping.total}
                  onChange={(e) => updateBudgetData('shopping', 'total', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="budget-section">
            <h3>Custom Items</h3>
            <div className="custom-item-form">
              <input 
                type="text"
                placeholder="Item name (e.g., Souvenirs, Spa treatments)"
                value={newCustomItem.name}
                onChange={(e) => setNewCustomItem({...newCustomItem, name: e.target.value})}
              />
              <input 
                type="number"
                placeholder="Amount ($)"
                value={newCustomItem.amount}
                onChange={(e) => setNewCustomItem({...newCustomItem, amount: e.target.value})}
              />
              <button className="add-btn" onClick={addCustomItem}>
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="budget-summary">
            <h2>Budget Summary</h2>
            <div className="summary-items">
              <div className="summary-item">
                <span>Accommodation</span>
                <span>${accommodationTotal}</span>
              </div>
              <div className="summary-item">
                <span>Food & Dining</span>
                <span>${foodTotal}</span>
              </div>
              <div className="summary-item">
                <span>Transportation</span>
                <span>${transportTotal}</span>
              </div>
              <div className="summary-item">
                <span>Activities & Tours</span>
                <span>${activitiesTotal}</span>
              </div>
              <div className="summary-item">
                <span>Shopping & Misc</span>
                <span>${shoppingTotal}</span>
              </div>
              {customItems.map((item, index) => (
                <div key={index} className="summary-item custom">
                  <span>{item.name}</span>
                  <div className="custom-item-actions">
                    <span>${item.amount}</span>
                    <button 
                      className="delete-custom-btn"
                      onClick={() => removeCustomItem(index)}
                      title="Delete item"
                    >
                      🗑
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="total-budget">
              <strong>Total Budget: ${grandTotal}</strong>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
