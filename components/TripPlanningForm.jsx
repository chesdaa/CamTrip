"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function TripPlanningForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    tripType: "",
    budget: "",
    interests: "",
    duration: ""
  })

  const questions = [
    {
      id: 1,
      title: "What type of trip are you planning?",
      options: [
        { value: "cultural", label: "Cultural & Historical", description: "Temples, museums, and heritage sites" },
        { value: "adventure", label: "Adventure & Nature", description: "Hiking, wildlife, and outdoor activities" },
        { value: "relaxation", label: "Beach & Relaxation", description: "Beaches, spas, and leisure activities" },
        { value: "family", label: "Family Friendly", description: "Activities suitable for all ages" }
      ],
      field: "tripType"
    },
    {
      id: 2,
      title: "What's your budget range?",
      options: [
        { value: "budget", label: "Budget ($20-40/day)", description: "Hostels, local food, public transport" },
        { value: "mid-range", label: "Mid-range ($60-100/day)", description: "Hotels, restaurants, private transport" },
        { value: "luxury", label: "Luxury ($150+/day)", description: "Resorts, fine dining, premium experiences" }
      ],
      field: "budget"
    },
    {
      id: 3,
      title: "What interests you most?",
      options: [
        { value: "temples", label: "Ancient Temples" },
        { value: "nature", label: "Nature & Wildlife" },
        { value: "cuisine", label: "Local Cuisine" },
        { value: "shopping", label: "Shopping & Markets" },
        { value: "nightlife", label: "Nightlife & Entertainment" }
      ],
      field: "interests"
    }
  ]

  const currentQuestion = questions[currentStep - 1]

  const handleOptionSelect = (value) => {
    setFormData({
      ...formData,
      [currentQuestion.field]: value
    })
  }

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGenerate = () => {
    // Navigate to trip planner with form data
    const queryParams = new URLSearchParams(formData).toString()
    router.push(`/trip-planner?${queryParams}`)
  }

  const isCurrentStepValid = formData[currentQuestion.field] !== ""
  const isLastStep = currentStep === questions.length

  return (
    <section className="trip-planning-form">
      <div className="container">
        <div className="trip-form-overlay">
          <div className="trip-form-content">
            <h2 className="trip-form-title">Plan Your Perfect Trip</h2>
            <p className="trip-form-subtitle">Answer a few questions to get a personalized travel plan</p>
            
            <div className="question-container">
              <h3 className="question-title">{currentQuestion.title}</h3>
              
              <div className="options-list">
                {currentQuestion.options.map((option) => (
                  <label 
                    key={option.value} 
                    className={`option-item ${formData[currentQuestion.field] === option.value ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name={currentQuestion.field}
                      value={option.value}
                      checked={formData[currentQuestion.field] === option.value}
                      onChange={() => handleOptionSelect(option.value)}
                    />
                    <div className="option-content">
                      <span className="option-label">{option.label}</span>
                      {option.description && (
                        <span className="option-description">{option.description}</span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-navigation">
              <button 
                className="btn-previous" 
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              
              {isLastStep ? (
                <button 
                  className="btn-generate" 
                  onClick={handleGenerate}
                  disabled={!isCurrentStepValid}
                >
                  Generate
                </button>
              ) : (
                <button 
                  className="btn-next" 
                  onClick={handleNext}
                  disabled={!isCurrentStepValid}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
