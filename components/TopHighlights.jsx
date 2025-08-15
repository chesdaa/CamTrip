"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { useAppContext } from "../app/providers"
import { Star, MapPin, Heart } from "lucide-react"

export default function TopHighlights() {
  const { dispatch } = useAppContext()

  const highlights = [
    {
      id: 1,
      name: "Angkor Wat",
      description: "The largest religious monument in the world",
      category: "temple",
      rating: 4.8,
      image: "/images/Angkor Wat.jpg",
      featured: true,
    },
    {
      id: 2,
      name: "Bayon Temple",
      description: "Famous for its smiling stone faces",
      category: "temple",
      rating: 4.7,
      image: "/images/Bayon Temple.jpg",
      featured: true,
    },
    {
      id: 4,
      name: "Royal Palace",
      description: "Stunning complex of royal buildings and gardens",
      category: "museum",
      rating: 4.5,
      image: "/images/Royal Palace.jpg",
      featured: true,
    },
  ]

  const addToWishlist = (attraction) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: attraction })
  }

  return (
    <div className="top-highlights">
      <div className="container">
        <div className="section-header">
          <h2>Top Highlights</h2>
          <p>Must-visit attractions in Cambodia</p>
        </div>

        <div className="highlights-grid">
          {highlights.map((highlight) => (
            <Card key={highlight.id} className="highlight-card">
              <div className="highlight-image">
                <Image
                  src={highlight.image}
                  alt={highlight.name}
                  width={400}
                  height={250}
                  style={{ objectFit: "cover" }}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="wishlist-btn"
                  onClick={() => addToWishlist(highlight)}
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{highlight.name}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{highlight.rating}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{highlight.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm capitalize">{highlight.category}</span>
                </div>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
