import { tripSuggestions } from "./data"

export function generateTripPlan(wizardData) {
  const tripType = wizardData.tripType || "cultural"
  const budget = wizardData.budget || "mid"
  const days = Number.parseInt(wizardData.days || "7")
  const interests = wizardData.interests || ["temples"]

  console.log(`Wizard data received:`, wizardData) // Debug log
  console.log(`Generating trip plan for ${days} days`) // Debug log

  // Validate days parameter
  if (!days || days < 1 || days > 30) {
    throw new Error(`Invalid number of days: ${days}. Must be between 1 and 30.`)
  }

  const suggestions = tripSuggestions[tripType]?.[budget]

  if (!suggestions) {
    throw new Error(`Unable to generate trip plan for type: ${tripType}, budget: ${budget}`)
  }

  const tripPlan = []

  // Generate exactly the number of days selected by user
  for (let day = 1; day <= days; day++) {
    const dayPlan = generateDayPlan(day, suggestions, interests, days)
    tripPlan.push(dayPlan)
  }

  console.log(`Generated ${tripPlan.length} days in trip plan`) // Debug log
  return tripPlan
}

function generateDayPlan(day, suggestions, interests, totalDays) {
  const activities = []

  // Adjust activities based on trip length and ensure minimum activities
  let numActivities = 2
  if (totalDays >= 7) numActivities = 3
  if (totalDays >= 14) numActivities = Math.min(4, suggestions.attractions.length)
  
  // Ensure we have at least 1 activity and don't exceed available attractions
  numActivities = Math.max(1, Math.min(numActivities, suggestions.attractions.length))

  for (let i = 0; i < numActivities; i++) {
    const attractionIndex = (day - 1 + i) % suggestions.attractions.length
    const attractionName = suggestions.attractions[attractionIndex]

    const times = ["9:00 AM", "1:00 PM", "4:00 PM", "6:00 PM"]
    
    activities.push({
      time: times[i] || "5:00 PM",
      name: attractionName,
      description: `Visit ${attractionName}`,
      estimatedCost: Math.round(suggestions.dailyBudget / numActivities),
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
