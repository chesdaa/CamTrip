import Hero from "../components/Hero"
import QuickRecommendations from "../components/QuickRecommendations"
import FeaturedProvinces from "../components/FeaturedProvinces"
import TripFooterSection from "../components/TripFooterSection"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickRecommendations />
      <FeaturedProvinces />
      <TripFooterSection />
    </main>
  )
}
