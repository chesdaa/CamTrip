import { cambodiaData } from "../lib/data"
import { generateToken } from "../lib/auth"

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || ""

/**
 * Professional API Service Client
 * Handles both headless CMS connection and static fallback data automatically.
 */
class ApiService {
  // Helper to check if backend should be used
  useBackend() {
    return typeof window !== "undefined" && !!STRAPI_URL
  }

  // --- PROVINCES API ---
  async getProvinces() {
    if (this.useBackend()) {
      try {
        const res = await fetch(`${STRAPI_URL}/api/provinces?populate=*`)
        if (res.ok) {
          const json = await res.json()
          return json.data.map(item => ({
            id: item.id,
            name: item.attributes.name,
            description: item.attributes.description,
            featured: item.attributes.featured,
            image: item.attributes.image?.data?.attributes?.url 
              ? `${STRAPI_URL}${item.attributes.image.data.attributes.url}`
              : "/images/Royal Palace.jpg"
          }))
        }
      } catch (err) {
        console.warn("Strapi connection failed, falling back to local data:", err)
      }
    }
    // Fallback
    return cambodiaData.provinces
  }

  async getProvinceById(id) {
    if (this.useBackend()) {
      try {
        const res = await fetch(`${STRAPI_URL}/api/provinces/${id}?populate=*`)
        if (res.ok) {
          const json = await res.json()
          const item = json.data
          return {
            id: item.id,
            name: item.attributes.name,
            description: item.attributes.description,
            image: item.attributes.image?.data?.attributes?.url
              ? `${STRAPI_URL}${item.attributes.image.data.attributes.url}`
              : "/images/Royal Palace.jpg"
          }
        }
      } catch (err) {
        console.warn("Strapi fetch failed, falling back to local data:", err)
      }
    }
    // Fallback
    return cambodiaData.provinces.find(p => p.id.toString() === id.toString()) || null
  }

  // --- ATTRACTIONS API ---
  async getAttractions() {
    if (this.useBackend()) {
      try {
        const res = await fetch(`${STRAPI_URL}/api/attractions?populate=*`)
        if (res.ok) {
          const json = await res.json()
          return json.data.map(item => ({
            id: item.id,
            name: item.attributes.name,
            description: item.attributes.description,
            category: item.attributes.category,
            rating: item.attributes.rating,
            featured: item.attributes.featured,
            image: item.attributes.image?.data?.attributes?.url 
              ? `${STRAPI_URL}${item.attributes.image.data.attributes.url}`
              : "/images/Royal Palace.jpg"
          }))
        }
      } catch (err) {
        console.warn("Strapi fetch failed, falling back to local data:", err)
      }
    }
    // Fallback: extract all attractions from local provinces data
    const attractions = []
    cambodiaData.provinces.forEach(p => {
      if (p.attractions) {
        attractions.push(...p.attractions)
      }
    })
    return attractions
  }

  async getAttractionById(id) {
    if (this.useBackend()) {
      try {
        const res = await fetch(`${STRAPI_URL}/api/attractions/${id}?populate=*`)
        if (res.ok) {
          const json = await res.json()
          const item = json.data
          return {
            id: item.id,
            name: item.attributes.name,
            description: item.attributes.description,
            category: item.attributes.category,
            rating: item.attributes.rating,
            culturalInfo: item.attributes.culturalInfo,
            visitorInfo: item.attributes.visitorInfo || {},
            coordinates: item.attributes.coordinates || {},
            image: item.attributes.image?.data?.attributes?.url 
              ? `${STRAPI_URL}${item.attributes.image.data.attributes.url}`
              : "/images/Royal Palace.jpg"
          }
        }
      } catch (err) {
        console.warn("Strapi fetch failed, falling back to local data:", err)
      }
    }
    // Fallback: search all attractions under each province
    for (const p of cambodiaData.provinces) {
      const found = p.attractions?.find(a => a.id.toString() === id.toString())
      if (found) return found
    }
    return null
  }

  // --- AUTHENTICATION API ---
  async login(email, password) {
    if (this.useBackend()) {
      try {
        const res = await fetch(`${STRAPI_URL}/api/auth/local`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier: email, password })
        })
        if (res.ok) {
          const json = await res.json()
          return {
            token: json.jwt,
            user: {
              id: json.user.id,
              name: json.user.username,
              email: json.user.email
            }
          }
        } else {
          const errJson = await res.json()
          throw new Error(errJson.error?.message || "Invalid credentials")
        }
      } catch (err) {
        throw new Error(err.message || "Connection to authentication server failed")
      }
    }

    // Local Mock Fallback
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")
    const matchedUser = existingUsers.find(u => u.email === email && u.password === password)
    if (!matchedUser) {
      throw new Error("Invalid email or password")
    }
    const token = generateToken(matchedUser)
    return {
      token,
      user: { id: matchedUser.id, name: matchedUser.name, email: matchedUser.email }
    }
  }

  async signup(name, email, password) {
    if (this.useBackend()) {
      try {
        const res = await fetch(`${STRAPI_URL}/api/auth/local/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: name, email, password })
        })
        if (res.ok) {
          const json = await res.json()
          return {
            token: json.jwt,
            user: {
              id: json.user.id,
              name: json.user.username,
              email: json.user.email
            }
          }
        } else {
          const errJson = await res.json()
          throw new Error(errJson.error?.message || "Signup failed")
        }
      } catch (err) {
        throw new Error(err.message || "Connection to authentication server failed")
      }
    }

    // Local Mock Fallback
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")
    if (existingUsers.some(u => u.email === email)) {
      throw new Error("User with this email already exists")
    }
    const newUser = { id: Date.now(), name, email, password }
    existingUsers.push(newUser)
    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers))
    const token = generateToken(newUser)
    return {
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email }
    }
  }
}

export const apiService = new ApiService()
