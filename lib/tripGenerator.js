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

  // Generate exactly the number of days selected by user
  for (let day = 1; day <= days; day++) {
    const dayPlan = generateDayPlan(day, suggestions, interests, days)
    tripPlan.push(dayPlan)
  }

  return tripPlan
}

function generateDayPlan(day, suggestions, interests, totalDays) {
  const activities = []

  // Adjust activities based on trip length
  let numActivities = 2
  if (totalDays >= 7) numActivities = 3
  if (totalDays >= 14) numActivities = Math.min(4, suggestions.attractions.length)
  
  numActivities = Math.min(numActivities, suggestions.attractions.length)

  for (let i = 0; i < numActivities; i++) {
    const attractionIndex = (day - 1 + i) % suggestions.attractions.length
    const attractionName = suggestions.attractions[attractionIndex]

    const times = ["9:00 AM", "1:00 PM", "4:00 PM", "6:00 PM"]
    
    activities.push({
      time: times[i] || "5:00 PM",
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
