"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAppContext } from "../app/providers"
import { generateTripPlan } from "../lib/tripGenerator"
import Toast from "./Toast"

export default function TripWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [wizardData, setWizardData] = useState({})
  const [isGenerating, setIsGenerating] = useState(false)
  const [toast, setToast] = useState(null)
  const { dispatch } = useAppContext()
  const router = useRouter()

  const totalSteps = 4

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const validateStep = (step) => {
    const stepElement = document.querySelector(`[data-step="${step}"]`)
    if (!stepElement) return false

    const inputs = stepElement.querySelectorAll('input[type="radio"], input[type="checkbox"]')
    const isValid = Array.from(inputs).some((input) => input.checked)

    if (!isValid) {
      setToast({
        type: "error",
        title: "Please select an option",
        message: "Please make a selection before proceeding",
      })
      return false
    }

    saveStepData(step)
    return true
  }

  const saveStepData = (step) => {
    const stepElement = document.querySelector(`[data-step="${step}"]`)
    if (!stepElement) return

    const inputs = stepElement.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked')
    const newData = { ...wizardData }

    inputs.forEach((input) => {
      const name = input.name
      const value = input.value

      if (input.type === "checkbox") {
        if (!newData[name]) {
          newData[name] = []
        }
        newData[name].push(value)
      } else {
        newData[name] = value
      }
    })

    setWizardData(newData)
  }

  const generatePlan = async () => {
    setIsGenerating(true)

    try {
      const tripPlan = generateTripPlan(wizardData)
      dispatch({ type: "UPDATE_TRIP_PLAN", payload: tripPlan })

      setToast({
        type: "success",
        title: "Trip Plan Generated!",
        message: "Your personalized trip plan is ready",
      })

      setTimeout(() => {
        router.push("/trip-planner")
      }, 2000)
    } catch (error) {
      console.error("Failed to generate trip plan:", error)
      setToast({
        type: "error",
        title: "Generation Failed",
        message: "Unable to generate trip plan. Please try again.",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <>
      <div className="trip-wizard">
        <div className="container">
          <h2>Plan Your Perfect Trip</h2>
          <p>Answer a few questions to get a personalized travel plan</p>

          <div className="wizard-container">
            <div className={`wizard-step ${currentStep === 1 ? "active" : ""}`} data-step="1">
              <h3>What type of trip are you planning?</h3>
              <div className="options">
                <label className="option">
                  <input type="radio" name="tripType" value="cultural" />
                  <span className="option-content">
                    <span className="option-title">Cultural & Historical</span>
                    <span className="option-desc">Temples, museums, and heritage sites</span>
                  </span>
                </label>
                <label className="option">
                  <input type="radio" name="tripType" value="adventure" />
                  <span className="option-content">
                    <span className="option-title">Adventure & Nature</span>
                    <span className="option-desc">Hiking, wildlife, and outdoor activities</span>
                  </span>
                </label>
                <label className="option">
                  <input type="radio" name="tripType" value="relaxation" />
                  <span className="option-content">
                    <span className="option-title">Beach & Relaxation</span>
                    <span className="option-desc">Beaches, spas, and leisure activities</span>
                  </span>
                </label>
                <label className="option">
                  <input type="radio" name="tripType" value="family" />
                  <span className="option-content">
                    <span className="option-title">Family Friendly</span>
                    <span className="option-desc">Activities suitable for all ages</span>
                  </span>
                </label>
              </div>
            </div>

            <div className={`wizard-step ${currentStep === 2 ? "active" : ""}`} data-step="2">
              <h3>What's your budget range?</h3>
              <div className="options">
                <label className="option">
                  <input type="radio" name="budget" value="budget" />
                  <span className="option-content">
                    <span className="option-title">Budget ($20-40/day)</span>
                    <span className="option-desc">Hostels, local food, public transport</span>
                  </span>
                </label>
                <label className="option">
                  <input type="radio" name="budget" value="mid" />
                  <span className="option-content">
                    <span className="option-title">Mid-range ($60-100/day)</span>
                    <span className="option-desc">Hotels, restaurants, private transport</span>
                  </span>
                </label>
                <label className="option">
                  <input type="radio" name="budget" value="luxury" />
                  <span className="option-content">
                    <span className="option-title">Luxury ($150+/day)</span>
                    <span className="option-desc">Resorts, fine dining, premium experiences</span>
                  </span>
                </label>
              </div>
            </div>

            <div className={`wizard-step ${currentStep === 3 ? "active" : ""}`} data-step="3">
              <h3>What interests you most?</h3>
              <p>Select all that apply</p>
              <div className="options">
                <label className="option">
                  <input type="checkbox" name="interests" value="temples" />
                  <span className="option-content">
                    <span className="option-title">Ancient Temples</span>
                    <span className="option-desc">Angkor Wat, Bayon, Ta Prohm</span>
                  </span>
                </label>
                <label className="option">
                  <input type="checkbox" name="interests" value="nature" />
                  <span className="option-content">
                    <span className="option-title">Nature & Wildlife</span>
                    <span className="option-desc">National parks, wildlife sanctuaries</span>
                  </span>
                </label>
                <label className="option">
                  <input type="checkbox" name="interests" value="beaches" />
                  <span className="option-content">
                    <span className="option-title">Beaches & Islands</span>
                    <span className="option-desc">Coastal areas and island hopping</span>
                  </span>
                </label>
                <label className="option">
                  <input type="checkbox" name="interests" value="culture" />
                  <span className="option-content">
                    <span className="option-title">Local Culture</span>
                    <span className="option-desc">Markets, villages, traditions</span>
                  </span>
                </label>
                <label className="option">
                  <input type="checkbox" name="interests" value="food" />
                  <span className="option-content">
                    <span className="option-title">Food & Cuisine</span>
                    <span className="option-desc">Street food, cooking classes</span>
                  </span>
                </label>
                <label className="option">
                  <input type="checkbox" name="interests" value="history" />
                  <span className="option-content">
                    <span className="option-title">History & Museums</span>
                    <span className="option-desc">Historical sites and museums</span>
                  </span>
                </label>
              </div>
            </div>

            <div className={`wizard-step ${currentStep === 4 ? "active" : ""}`} data-step="4">
              <h3>How many days do you have?</h3>
              <div className="options">
                <label className="option">
                  <input type="radio" name="days" value="3" />
                  <span className="option-content">
                    <span className="option-title">3 Days</span>
                    <span className="option-desc">Quick getaway</span>
                  </span>
                </label>
                <label className="option">
                  <input type="radio" name="days" value="7" />
                  <span className="option-content">
                    <span className="option-title">1 Week</span>
                    <span className="option-desc">Perfect for first-time visitors</span>
                  </span>
                </label>
                <label className="option">
                  <input type="radio" name="days" value="14" />
                  <span className="option-content">
                    <span className="option-title">2 Weeks</span>
                    <span className="option-desc">Comprehensive exploration</span>
                  </span>
                </label>
                <label className="option">
                  <input type="radio" name="days" value="21" />
                  <span className="option-content">
                    <span className="option-title">3+ Weeks</span>
                    <span className="option-desc">Deep dive into Cambodia</span>
                  </span>
                </label>
              </div>
            </div>

            <div className="wizard-navigation">
              <button
                className="prev-btn"
                onClick={handlePrev}
                disabled={currentStep === 1}
                style={{ display: currentStep === 1 ? "none" : "block" }}
              >
                Previous
              </button>
              <button
                className="next-btn"
                onClick={currentStep === totalSteps ? generatePlan : handleNext}
                disabled={isGenerating}
              >
                {isGenerating ? "Generating..." : currentStep === totalSteps ? "Generate Plan" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          type={toast.type}
          title={toast.title}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
}
