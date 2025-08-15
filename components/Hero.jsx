"use client"
import Image from "next/image"
import TripWizard from "./TripWizard"

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-background">
        <div className="hero-image">
          <Image
            src="/images/home_background.webp"
            alt="Cambodia landscape"
            fill
            style={{ objectFit: "cover", width: "100%", height: "100%", objectPosition: "center center" }}
            priority
          />
        </div>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <TripWizard />
      </div>
    </div>
  )
}
