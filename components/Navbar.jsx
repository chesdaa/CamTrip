"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useAppContext } from "../app/providers"
import AuthModals from "./AuthModals"
import { Menu, X, User, LogOut, ChevronDown } from "lucide-react"

export default function Navbar() {
  const { state, dispatch } = useAppContext()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(null)
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const pathname = usePathname()
  const isHomepage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/provinces", label: "Provinces" },
    { href: "/trip-planner", label: "Trip Planner" },
    { href: "/wishlist", label: "Wishlist" },
    { href: "/budget", label: "Budget" },
  ]

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    localStorage.removeItem('user')
  }

  const navbarClasses = `navbar ${isScrolled ? "scrolled" : ""} ${!isHomepage ? "non-homepage" : ""}`

  return (
    <>
      <nav className={navbarClasses}>
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <Image
              src="/images/logo.png"
              alt="Cambodia Trip Logo"
              width={45}
              height={45}
              className="logo-image"
            />
            <div className="logo-text">
              <span className="logo-main">CAMBODIA</span>
              <span className="logo-sub">TRIP</span>
            </div>
          </Link>

          <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-auth">
            <div className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
            
            {state.user ? (
              <div className="user-menu">
                <button 
                  className="user-profile-btn"
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                >
                  <User className="w-5 h-5" />
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showUserDropdown && (
                  <div className="user-dropdown">
                    <div className="user-info">
                      <span className="user-name">{state.user.name}</span>
                      <span className="user-email">{state.user.email}</span>
                    </div>
                    <button className="dropdown-logout-btn" onClick={handleLogout}>
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button className="signin-btn" onClick={() => setShowAuthModal("signin")}>
                  Sign In
                </button>
                <button className="signup-btn" onClick={() => setShowAuthModal("signup")}>
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <AuthModals
        showModal={showAuthModal}
        onClose={() => setShowAuthModal(null)}
        onSwitch={(type) => setShowAuthModal(type)}
      />
    </>
  )
}
