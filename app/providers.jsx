"use client"

import React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"

const initialState = {
  wishlist: [],
  tripPlan: [],
  tripNotes: "",
  customBudgetItems: [],
  favorites: [],
  userTips: {},
  user: null,
}

function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (state.wishlist.some((item) => item.id === action.payload.id)) {
        return state
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
        favorites: [...state.favorites, action.payload.id.toString()],
      }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
        favorites: state.favorites.filter((id) => id !== action.payload.toString()),
      }

    case "ADD_TO_TRIP_PLAN":
      return {
        ...state,
        tripPlan: [...state.tripPlan, action.payload],
      }

    case "UPDATE_TRIP_PLAN":
      return {
        ...state,
        tripPlan: action.payload,
      }

    case "UPDATE_TRIP_NOTES":
      return {
        ...state,
        tripNotes: action.payload,
      }

    case "ADD_CUSTOM_BUDGET_ITEM":
      return {
        ...state,
        customBudgetItems: [...state.customBudgetItems, action.payload],
      }

    case "REMOVE_CUSTOM_BUDGET_ITEM":
      return {
        ...state,
        customBudgetItems: state.customBudgetItems.filter((_, index) => index !== action.payload),
      }

    case "ADD_TIP":
      const { attractionId, tip } = action.payload
      return {
        ...state,
        userTips: {
          ...state.userTips,
          [attractionId]: [...(state.userTips[attractionId] || []), tip],
        },
      }

    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      }

    case "LOGOUT":
      return {
        ...state,
        user: null,
        tripPlan: [], // Clear trip plan on logout
      }

    case "LOAD_STATE":
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

const AppContext = createContext(null)

export function Providers({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Load state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("cambodia-travel-state")
    const savedUser = localStorage.getItem("user")
    
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState)
        dispatch({ type: "LOAD_STATE", payload: parsedState })
      } catch (error) {
        console.error("Failed to load saved state:", error)
      }
    }
    
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        dispatch({ type: "LOGIN", payload: userData })
      } catch (error) {
        console.error("Failed to load user data:", error)
      }
    }
  }, [])

  // Save state to localStorage whenever it changes (only if user is logged in for trip plan)
  useEffect(() => {
    const stateToSave = { ...state }
    
    // Only persist trip plan if user is logged in
    if (!state.user) {
      stateToSave.tripPlan = []
    }
    
    localStorage.setItem("cambodia-travel-state", JSON.stringify(stateToSave))
  }, [state])

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within a Providers component")
  }
  return context
}
