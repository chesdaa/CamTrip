import { tripSuggestions } from "./data"

export function generateTripPlan(wizardData) {
  const tripType = wizardData.tripType || "cultural"
  const budget = wizardData.budget || "mid"
  const days = Number.parseInt(wizardData.days || "7")
  const interests = wizardData.interests || ["temples"]

  const suggestions = tripSuggestions[tripType]?.[budget]

  if (!suggestions) {
    throw new Error("Unable to generate trip plan")
  }

  const tripPlan = []

  for (let day = 1; day <= days; day++) {
    const dayPlan = generateDayPlan(day, suggestions, interests)
    tripPlan.push(dayPlan)
  }

  return tripPlan
}

function generateDayPlan(day, suggestions, interests) {
  const activities = []

  // Add 2-3 activities per day
  const numActivities = Math.min(3, suggestions.attractions.length)

  for (let i = 0; i < numActivities; i++) {
    const attractionIndex = (day - 1 + i) % suggestions.attractions.length
    const attractionName = suggestions.attractions[attractionIndex]

    activities.push({
      time: i === 0 ? "9:00 AM" : i === 1 ? "1:00 PM" : "4:00 PM",
      name: attractionName,
      description: `Visit ${attractionName}`,
      estimatedCost: suggestions.dailyBudget / numActivities,
      category: "attraction",
    })
  }

  return {
    day: day,
    date: getDateForDay(day),
    activities: activities,
    totalCost: suggestions.dailyBudget,
  }
}

function getDateForDay(day) {
  const startDate = new Date()
  startDate.setDate(startDate.getDate() + day - 1)
  return startDate.toLocaleDateString()
}
