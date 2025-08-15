"use client"

import { useState } from "react"
import { useAppContext } from "../providers"
import AuthModals from "../../components/AuthModals"
import { Plus, Trash2, Download, MapPin, Clock, DollarSign, Save } from "lucide-react"

export default function TripPlannerPage() {
  const { state, dispatch } = useAppContext()
  const [newActivity, setNewActivity] = useState({
    time: "",
    name: "",
    description: "",
    estimatedCost: 0,
    category: "Temple",
  })
  const [editingDay, setEditingDay] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(null)
  const [tripNotes, setTripNotes] = useState("")

  const addActivity = (dayIndex) => {
    if (!newActivity.name || !newActivity.time) return

    const updatedTripPlan = [...state.tripPlan]
    updatedTripPlan[dayIndex].activities.push({
      ...newActivity,
      estimatedCost: Number(newActivity.estimatedCost),
    })
    updatedTripPlan[dayIndex].totalCost += Number(newActivity.estimatedCost)

    dispatch({ type: "UPDATE_TRIP_PLAN", payload: updatedTripPlan })
    setNewActivity({ time: "", name: "", description: "", estimatedCost: 0 })
    setEditingDay(null)
  }

  const removeActivity = (dayIndex, activityIndex) => {
    const updatedTripPlan = [...state.tripPlan]
    const removedActivity = updatedTripPlan[dayIndex].activities[activityIndex]
    updatedTripPlan[dayIndex].activities.splice(activityIndex, 1)
    updatedTripPlan[dayIndex].totalCost -= removedActivity.estimatedCost

    dispatch({ type: "UPDATE_TRIP_PLAN", payload: updatedTripPlan })
  }

  const addNewDay = () => {
    const newDay = {
      day: state.tripPlan.length + 1,
      date: new Date(Date.now() + (state.tripPlan.length * 24 * 60 * 60 * 1000)).toLocaleDateString(),
      activities: [],
      totalCost: 0
    }
    dispatch({ type: "UPDATE_TRIP_PLAN", payload: [...state.tripPlan, newDay] })
  }

  const removeDay = (dayIndex) => {
    const updatedTripPlan = state.tripPlan.filter((_, index) => index !== dayIndex)
    // Reorder day numbers
    const reorderedPlan = updatedTripPlan.map((day, index) => ({
      ...day,
      day: index + 1
    }))
    dispatch({ type: "UPDATE_TRIP_PLAN", payload: reorderedPlan })
  }

  const saveTripPlan = () => {
    const tripData = {
      tripPlan: state.tripPlan,
      totalBudget,
      totalActivities,
      notes: tripNotes,
      savedAt: new Date().toISOString()
    }
    localStorage.setItem('cambodiaTripPlan', JSON.stringify(tripData))
    alert('Trip plan saved successfully!')
  }

  const downloadPDF = () => {
    // Create a simple text version for download
    let content = `CAMBODIA TRIP PLAN\n\n`
    content += `Total Duration: ${state.tripPlan.length} days\n`
    content += `Total Budget: $${totalBudget.toFixed(2)}\n`
    content += `Total Activities: ${totalActivities}\n\n`
    
    state.tripPlan.forEach((day, index) => {
      content += `DAY ${day.day} - ${day.date}\n`
      content += `Daily Budget: $${day.totalCost.toFixed(2)}\n\n`
      
      day.activities.forEach(activity => {
        content += `${activity.time} - ${activity.name}\n`
        content += `${activity.description}\n`
        content += `Cost: $${activity.estimatedCost.toFixed(2)}\n\n`
      })
      content += '---\n\n'
    })
    
    if (tripNotes) {
      content += `TRIP NOTES:\n${tripNotes}\n`
    }
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'cambodia-trip-plan.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const savePlan = () => {
    if (!state.user) {
      setShowAuthModal("signin")
      return
    }
    
    // Save plan logic here - for now just show success message
    alert("Trip plan saved successfully!")
  }

  const clearPlan = () => {
    if (confirm("Are you sure you want to clear the entire trip plan?")) {
      dispatch({ type: "UPDATE_TRIP_PLAN", payload: [] })
      setTripNotes("")
    }
  }

  const totalBudget = state.tripPlan.reduce((sum, day) => sum + day.totalCost, 0)
  const totalActivities = state.tripPlan.reduce((sum, day) => sum + day.activities.length, 0)

  return (
    <>
      <main className="main-content non-homepage">
      <div className="container">
        <div className="page-header">
          <h1>Trip Planner</h1>
          <p>Plan your perfect Cambodia adventure</p>
        </div>

        {state.tripPlan.length === 0 ? (
          <div className="empty-state">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-semibold mb-2">No trip plan yet</h3>
            <p className="text-gray-600 mb-4">
              Use the trip wizard on the homepage to generate your personalized travel plan
            </p>
            <button className="btn-primary" onClick={() => window.location.href = "/"}>
              Start Planning
            </button>
          </div>
        ) : (
          <div className="trip-planner-layout">
            <div className="trip-sidebar">
              <div className="trip-summary">
                <h2>Your Trip</h2>
                
                <div className="trip-dates">
                  <div className="date-input">
                    <label>Start Date:</label>
                    <input type="date" />
                  </div>
                  <div className="date-input">
                    <label>End Date:</label>
                    <input type="date" />
                  </div>
                </div>

                <div className="budget-estimate">
                  <h3>Budget Estimate</h3>
                  <div className="budget-breakdown">
                    <div className="budget-item">
                      <span>Activities & Attractions</span>
                      <span>${totalBudget.toFixed(2)}</span>
                    </div>
                    <div className="budget-item">
                      <span>Accommodation (est.)</span>
                      <span>${(totalBudget * 0.25).toFixed(2)}</span>
                    </div>
                    <div className="budget-item">
                      <span>Food (est.)</span>
                      <span>${(totalBudget * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="budget-item">
                      <span>Transport (est.)</span>
                      <span>${(totalBudget * 0.05).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="budget-total">
                    <strong>Total: ${(totalBudget + (totalBudget * 0.4)).toFixed(2)}</strong>
                  </div>
                </div>

                <div className="trip-actions">
                  <button className="btn-primary" onClick={savePlan}>
                    <Save className="w-4 h-4" />
                    Save Plan
                  </button>
                  <button className="btn-secondary" onClick={downloadPDF}>
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <button className="btn-danger" onClick={clearPlan}>
                    <Trash2 className="w-4 h-4" />
                    Clear Plan
                  </button>
                </div>
              </div>
            </div>

            <div className="trip-main-content">
              <div className="trip-controls">
                <button className="btn-primary" onClick={addNewDay}>
                  <Plus className="w-4 h-4" /> Add New Day
                </button>
              </div>

              <div className="daily-itinerary">
                <h2>Daily Itinerary</h2>
                {state.tripPlan.map((day, dayIndex) => (
                  <div key={day.day} className="day-card">
                    <div className="day-header">
                      <h3>Day {day.day}</h3>
                      <span className="day-date">{day.date}</span>
                      <button 
                        className="remove-day-btn"
                        onClick={() => removeDay(dayIndex)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="day-activities">
                      {day.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="activity-item">
                          <div className="activity-time">
                            <Clock className="w-4 h-4" />
                            <span>{activity.time}</span>
                          </div>
                          <div className="activity-details">
                            <h4>{activity.name}</h4>
                            <p>{activity.description}</p>
                            <span className="activity-cost">${activity.estimatedCost.toFixed(2)}</span>
                          </div>
                          <button
                            className="remove-activity-btn"
                            onClick={() => removeActivity(dayIndex, activityIndex)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {editingDay === dayIndex ? (
                      <div className="add-activity-modal">
                        <div className="modal-header">
                          <h3>Add Activity</h3>
                          <button className="close-btn" onClick={() => setEditingDay(null)}>×</button>
                        </div>
                        <div className="modal-body">
                          <div className="form-group">
                            <label>Day</label>
                            <select value={`Day ${day.day} - Day ${day.day}`} disabled>
                              <option>Day {day.day} - Day {day.day}</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Time</label>
                            <input
                              type="time"
                              value={newActivity.time}
                              onChange={(e) => setNewActivity({ ...newActivity, time: e.target.value })}
                            />
                          </div>
                          <div className="form-group">
                            <label>Activity Name</label>
                            <input
                              type="text"
                              placeholder="e.g., Visit Angkor Wat"
                              value={newActivity.name}
                              onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
                            />
                          </div>
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              placeholder="Brief description of the activity"
                              value={newActivity.description}
                              onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                              rows={3}
                            />
                          </div>
                          <div className="form-group">
                            <label>Estimated Cost ($)</label>
                            <input
                              type="number"
                              placeholder="0"
                              value={newActivity.estimatedCost}
                              onChange={(e) => setNewActivity({ ...newActivity, estimatedCost: e.target.value })}
                            />
                          </div>
                          <div className="form-group">
                            <label>Category</label>
                            <select
                              value={newActivity.category}
                              onChange={(e) => setNewActivity({ ...newActivity, category: e.target.value })}
                            >
                              <option value="Temple">Temple</option>
                              <option value="Beach">Beach</option>
                              <option value="Museum">Museum</option>
                              <option value="Restaurant">Restaurant</option>
                              <option value="Shopping">Shopping</option>
                              <option value="Nature">Nature</option>
                              <option value="Cultural">Cultural</option>
                              <option value="Adventure">Adventure</option>
                            </select>
                          </div>
                          <button className="btn-primary add-activity-submit" onClick={() => addActivity(dayIndex)}>
                            Add Activity
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        className="btn-secondary add-activity-btn"
                        onClick={() => setEditingDay(dayIndex)}
                      >
                        <Plus className="w-4 h-4" />
                        Add Activity
                      </button>
                    )}

                    <div className="day-total">
                      Total: ${day.totalCost.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="trip-notes">
                <h2>Trip Notes</h2>
                <div className="notes-content">
                  <textarea
                    placeholder="Add your travel notes, reminders, or special considerations..."
                    value={tripNotes}
                    onChange={(e) => setTripNotes(e.target.value)}
                    rows={6}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </main>

      <AuthModals
        showModal={showAuthModal}
        onClose={() => setShowAuthModal(null)}
        onSwitch={(type) => setShowAuthModal(type)}
      />
    </>
  )
}
