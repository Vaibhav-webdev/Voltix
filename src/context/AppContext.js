"use client"

import { createContext, useContext, useState } from "react"

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [theme, setTheme] = useState("light");

  return (
    <AppContext.Provider value={{ cart, setCart, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook (BEST PRACTICE)
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider")
  }
  return context
}