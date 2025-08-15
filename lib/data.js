// Cambodia Travel Data

export const cambodiaData = {
  provinces: [
    {
      id: 1,
      name: "Siem Reap",
      description: "Home to the magnificent Angkor Wat temple complex and ancient Khmer architecture",
      highlights: [
        {
          id: 1,
          name: "Angkor Wat",
          description: "The largest religious monument in the world",
          category: "temple",
          rating: 4.8,
          image: "/images/Siem Reap.jpg",
          culturalInfo: "Built in the early 12th century by King Suryavarman VII, Angkor Wat is a temple complex in Cambodia and one of the largest religious monuments in the world. Originally constructed as a Hindu temple dedicated to the god Vishnu, it was gradually transformed into a Buddhist temple in the late 13th century."
        },
        {
          id: 2,
          name: "Bayon Temple",
          description: "Famous for its smiling stone faces",
          category: "temple",
          image: "/images/Bayon Temple.jpg",
          rating: 4.7,
          culturalInfo: "The Bayon is a richly decorated Khmer temple at Angkor in Cambodia. Built in the late 12th or early 13th century as the official state temple of the Mahayana Buddhist King Jayavarman VII, the Bayon stands at the centre of Jayavarman's capital, Angkor Thom."
        },
        {
          id: 3,
          name: "Ta Prohm",
          description: "Temple engulfed by massive tree roots",
          category: "temple",
          image: "/images/Ta Prohm.jpg",
          rating: 4.6,
          culturalInfo: "Ta Prohm is the modern name of the temple at Angkor, Siem Reap Province, Cambodia, built in the Bayon style largely in the late 12th and early 13th centuries and originally called Rajavihara. It was founded by the Khmer King Jayavarman VII as a Mahayana Buddhist monastery and university."
        }
      ],
      attractions: [
        {
          id: 1,
          name: "Angkor Wat",
          description: "The largest religious monument in the world",
          category: "temple",
          rating: 4.8,
          featured: true,
          image: "/images/Siem Reap.jpg",
          culturalInfo: "Built in the early 12th century by King Suryavarman VII, Angkor Wat is a temple complex in Cambodia and one of the largest religious monuments in the world. Originally constructed as a Hindu temple dedicated to the god Vishnu, it was gradually transformed into a Buddhist temple in the late 13th century.",
          visitorInfo: {
            openingHours: "5:00 AM - 6:00 PM",
            entryFee: "$37 (1-day pass)",
            bestTime: "Early morning (5:30 AM) for sunrise",
            duration: "3-4 hours"
          },
          coordinates: { lat: 13.4125, lng: 103.867 }
        },
        {
          id: 2,
          name: "Bayon Temple",
          description: "Famous for its smiling stone faces",
          category: "temple",
          image: "/images/Bayon Temple.jpg",
          rating: 4.7,
          featured: true,
          culturalInfo: "The Bayon is a richly decorated Khmer temple at Angkor in Cambodia. Built in the late 12th or early 13th century as the official state temple of the Mahayana Buddhist King Jayavarman VII, the Bayon stands at the centre of Jayavarman's capital, Angkor Thom.",
          visitorInfo: {
            openingHours: "5:00 AM - 6:00 PM",
            entryFee: "Included in Angkor pass",
            bestTime: "Late afternoon for golden light",
            duration: "1-2 hours"
          },
          coordinates: { lat: 13.4412, lng: 103.8592 }
        },
        {
          id: 3,
          name: "Ta Prohm",
          description: "Temple engulfed by massive tree roots",
          category: "temple",
          image: "/images/Ta Prohm.jpg",
          rating: 4.6,
          featured: true,
          culturalInfo: "Ta Prohm is the modern name of the temple at Angkor, Siem Reap Province, Cambodia, built in the Bayon style largely in the late 12th and early 13th centuries and originally called Rajavihara. It was founded by the Khmer King Jayavarman VII as a Mahayana Buddhist monastery and university.",
          visitorInfo: {
            openingHours: "5:00 AM - 6:00 PM",
            entryFee: "Included in Angkor pass",
            bestTime: "Morning or late afternoon",
            duration: "1-2 hours"
          },
          coordinates: { lat: 13.4347, lng: 103.8892 }
        },
        {
          id: 4,
          name: "Banteay Srei",
          description: "Temple of exquisite pink sandstone carvings",
          category: "temple",
          image: "/images/Banteay Srei.jpg",
          rating: 4.5,
          featured: true,
          culturalInfo: "Banteay Srei is a 10th-century Cambodian temple dedicated to the Hindu god Shiva. Located in the area of Angkor, it lies near the hill of Phnom Dei, 25 km north-east of the main group of temples that once belonged to the medieval capitals of Angkor.",
          visitorInfo: {
            openingHours: "5:00 AM - 6:00 PM",
            entryFee: "Included in Angkor pass",
            bestTime: "Morning for best lighting",
            duration: "1-2 hours"
          },
          coordinates: { lat: 13.5947, lng: 103.9640 }
        },
        {
          id: 5,
          name: "Floating Village",
          description: "Traditional stilt house village on Tonle Sap Lake",
          category: "nature",
          image: "/images/Floating Village.jpg",
          rating: 4.2,
          featured: true,
          culturalInfo: "The floating villages of Tonle Sap are home to many Vietnamese and Cham communities who live in houses on stilts or floating houses that rise and fall with the water level. These communities have adapted their lives to the seasonal flooding of the lake.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$20 (boat tour)",
            bestTime: "Morning or late afternoon",
            duration: "2-3 hours"
          },
          coordinates: { lat: 13.1594, lng: 103.6061 }
        }
      ],
    },
    {
      id: 2,
      name: "Phnom Penh",
      description: "The vibrant capital city with rich history, royal palaces, and bustling markets",
      highlights: [
        {
          id: 4,
          name: "Royal Palace",
          description: "Stunning complex of royal buildings and gardens",
          category: "museum",
          image: "/images/Royal Palace.jpg",
          rating: 4.5,
          culturalInfo: "The Royal Palace of Cambodia is a complex of buildings which serves as the royal residence of the King of Cambodia. Its full name in Khmer is the Preah Barom Reachea Vaeng Chaktomuk Serei Mongkol."
        },
        {
          id: 5,
          name: "Silver Pagoda",
          description: "Temple floor covered with 5,000 silver tiles",
          category: "temple",
          image: "/images/Silver Pagoda.jpg",
          rating: 4.4,
          culturalInfo: "The Silver Pagoda is located on the south side of the Royal Palace in Chey Chumneas. The official name is Wat Ubaosoth Ratanaram as it is the temple where the royal family prays."
        },
        {
          id: 6,
          name: "Central Market",
          description: "Art Deco market with local goods and food",
          category: "shopping",
          image: "/images/Central Market.jpg",
          rating: 4.2,
          culturalInfo: "Phsar Thmei, literally meaning 'New Market', is a large market constructed in 1937 in the shape of a dome with four arms branching out into vast hallways with countless stalls of goods."
        }
      ],
      attractions: [
        {
          id: 6,
          name: "Royal Palace",
          description: "Stunning complex of royal buildings and gardens",
          category: "museum",
          image: "/images/Royal Palace.jpg",
          rating: 4.5,
          culturalInfo: "The Royal Palace of Cambodia is a complex of buildings which serves as the royal residence of the King of Cambodia. Its full name in Khmer is the Preah Barom Reachea Vaeng Chaktomuk Serei Mongkol.",
          visitorInfo: {
            openingHours: "8:00 AM - 11:00 AM, 2:00 PM - 5:00 PM",
            entryFee: "$10",
            bestTime: "Early morning or late afternoon",
            duration: "2-3 hours"
          },
          coordinates: { lat: 11.5564, lng: 104.9282 }
        },
        {
          id: 7,
          name: "Silver Pagoda",
          description: "Temple floor covered with 5,000 silver tiles",
          category: "temple",
          image: "/images/Silver Pagoda.jpg",
          rating: 4.4,
          culturalInfo: "The Silver Pagoda is located on the south side of the Royal Palace in Chey Chumneas. The official name is Wat Ubaosoth Ratanaram as it is the temple where the royal family prays.",
          visitorInfo: {
            openingHours: "8:00 AM - 11:00 AM, 2:00 PM - 5:00 PM",
            entryFee: "Included with Royal Palace",
            bestTime: "Morning",
            duration: "1 hour"
          },
          coordinates: { lat: 11.5569, lng: 104.9284 }
        },
        {
          id: 8,
          name: "Central Market",
          description: "Art Deco market with local goods and food",
          category: "shopping",
          image: "/images/Central Market.jpg",
          rating: 4.2,
          culturalInfo: "Phsar Thmei, literally meaning 'New Market', is a large market constructed in 1937 in the shape of a dome with four arms branching out into vast hallways with countless stalls of goods.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "Free",
            bestTime: "Morning",
            duration: "1-2 hours"
          },
          coordinates: { lat: 11.5696, lng: 104.9178 }
        },
        {
          id: 101,
          name: "Phnom Tamao Wildlife Rescue Center",
          description: "Cambodia's premier wildlife rescue and rehabilitation center",
          category: "nature",
          image: "/images/Phnom Tamao Wildlife Rescue Center.webp",
          rating: 4.3,
          culturalInfo: "Phnom Tamao Wildlife Rescue Center is the largest zoo in Cambodia and home to over 1,200 rescued animals. It serves as a sanctuary for animals confiscated from illegal wildlife trade.",
          visitorInfo: {
            openingHours: "8:00 AM - 5:00 PM",
            entryFee: "$5",
            bestTime: "Morning",
            duration: "3-4 hours"
          },
          coordinates: { lat: 11.3167, lng: 104.7500 }
        },
        {
          id: 102,
          name: "Koh Dach (Silk Island)",
          description: "Traditional silk weaving island on the Mekong River",
          category: "cultural",
          image: "/images/Koh Dach (Silk Island).jpg",
          rating: 4.1,
          culturalInfo: "Koh Dach is known for its traditional silk weaving workshops where visitors can observe the ancient art of silk production and purchase authentic Cambodian silk products.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$2 (boat ride)",
            bestTime: "Morning or afternoon",
            duration: "Half day"
          },
          coordinates: { lat: 11.6167, lng: 104.9833 }
        },
        {
          id: 103,
          name: "Oudong Mountain",
          description: "Former royal capital with ancient temples and pagodas",
          category: "temple",
          image: "/images/Oudong Mountain.jpg",
          rating: 4.0,
          culturalInfo: "Oudong served as the capital of Cambodia during the early 17th to 19th centuries. The mountain features several ancient temples and offers panoramic views of the countryside.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$3",
            bestTime: "Early morning or late afternoon",
            duration: "2-3 hours"
          },
          coordinates: { lat: 11.7500, lng: 104.7833 }
        },
        {
          id: 106,
          name: "Tuol Sleng Genocide Museum",
          description: "Former Khmer Rouge prison, now a memorial museum",
          category: "museum",
          image: "/images/Tuol Sleng Genocide Museum.jpg",
          rating: 4.6,
          culturalInfo: "Tuol Sleng was a high school converted into Security Prison 21 (S-21) by the Khmer Rouge regime. It now serves as a museum documenting the atrocities committed during this dark period of Cambodian history.",
          visitorInfo: {
            openingHours: "8:00 AM - 5:00 PM",
            entryFee: "$5",
            bestTime: "Morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 11.5492, lng: 104.9175 }
        },
        {
          id: 107,
          name: "Traditional Apsara Dance Shows",
          description: "Classical Khmer dance performances showcasing ancient traditions",
          category: "cultural",
          image: "/images/Traditional Apsara Dance Shows.jpg",
          rating: 4.5,
          culturalInfo: "Apsara dance is a classical dance form that depicts stories from Khmer mythology. These graceful performances are an integral part of Cambodian cultural heritage.",
          visitorInfo: {
            openingHours: "7:00 PM - 9:00 PM",
            entryFee: "$15-25",
            bestTime: "Evening",
            duration: "1-2 hours"
          },
          coordinates: { lat: 11.5564, lng: 104.9282 }
        }
      ],
    },
    {
      id: 3,
      name: "Battambang",
      description: "Cambodia's second-largest city known for colonial architecture and bamboo train",
      highlights: [
        {
          id: 9,
          name: "Bamboo Train",
          description: "Unique railway experience on bamboo platforms",
          category: "adventure",
          image: "/images/Bamboo Train.jpeg",
          rating: 4.2,
          culturalInfo: "The Bamboo Train, known locally as 'norry', is a unique form of transportation that runs on the country's deteriorating railway infrastructure. It consists of a bamboo platform powered by a small engine."
        }
      ],
      attractions: [
        {
          id: 11,
          name: "Bamboo Train",
          description: "Unique railway experience on bamboo platforms",
          category: "adventure",
          image: "/images/Bamboo Train.jpeg",
          rating: 4.2,
          culturalInfo: "The Bamboo Train, known locally as 'norry', is a unique form of transportation that runs on the country's deteriorating railway infrastructure. It consists of a bamboo platform powered by a small engine.",
          visitorInfo: {
            openingHours: "7:00 AM - 5:00 PM",
            entryFee: "$5",
            bestTime: "Morning or late afternoon",
            duration: "1-2 hours"
          },
          coordinates: { lat: 13.1027, lng: 103.1980 }
        }
      ],
    },
    {
      id: 4,
      name: "Kampot",
      description: "Charming riverside town famous for pepper plantations and French colonial buildings",
      highlights: [
        {
          id: 10,
          name: "Bokor National Park",
          description: "Mountain national park with abandoned French hill station",
          category: "nature",
          image: "/images/Bokor National Park.jpg",
          rating: 4.0,
          culturalInfo: "Bokor National Park is located in the Dâmrei Mountains of southern Cambodia. The park contains the ruins of Bokor Hill Station, a French colonial resort town built in the 1920s."
        }
      ],
      attractions: [
        {
          id: 12,
          name: "Bokor National Park",
          description: "Mountain national park with abandoned French hill station",
          category: "nature",
          image: "/images/Bokor National Park.jpg",
          rating: 4.0,
          culturalInfo: "Bokor National Park is located in the Dâmrei Mountains of southern Cambodia. The park contains the ruins of Bokor Hill Station, a French colonial resort town built in the 1920s.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$10",
            bestTime: "Morning",
            duration: "Full day"
          },
          coordinates: { lat: 10.6167, lng: 104.0000 }
        }
      ],
    },
    {
      id: 5,
      name: "Sihanoukville",
      description: "Coastal city with beautiful beaches and island getaways",
      highlights: [
        {
          id: 7,
          name: "Otres Beach",
          description: "Pristine white sand beach with clear waters",
          category: "beach",
          image: "/images/Otres Beach.jpg",
          rating: 4.3,
          culturalInfo: "Otres Beach is a long stretch of white sand beach located south of Sihanoukville city. It's known for its relaxed atmosphere and is popular among backpackers and beach lovers."
        },
        {
          id: 8,
          name: "Ream National Park",
          description: "Coastal national park with mangroves and wildlife",
          category: "nature",
          image: "/images/Ream National Park.jpg",
          rating: 4.1,
          culturalInfo: "Ream National Park is a national park of Cambodia located 18 km from Sihanoukville city. The park covers 150 square kilometers of land area and 60 square kilometers of marine area."
        }
      ],
      attractions: [
        {
          id: 9,
          name: "Otres Beach",
          description: "Pristine white sand beach with clear waters",
          category: "beach",
          image: "/images/Otres Beach.jpg",
          rating: 4.3,
          culturalInfo: "Otres Beach is a long stretch of white sand beach located south of Sihanoukville city. It's known for its relaxed atmosphere and is popular among backpackers and beach lovers.",
          visitorInfo: {
            openingHours: "24 hours",
            entryFee: "Free",
            bestTime: "Early morning or sunset",
            duration: "Half day to full day"
          },
          coordinates: { lat: 10.5729, lng: 103.5037 }
        },
        {
          id: 10,
          name: "Ream National Park",
          description: "Coastal national park with mangroves and wildlife",
          category: "nature",
          image: "/images/Ream National Park.jpg",
          rating: 4.1,
          culturalInfo: "Ream National Park is a national park of Cambodia located 18 km from Sihanoukville city. The park covers 150 square kilometers of land area and 60 square kilometers of marine area.",
          visitorInfo: {
            openingHours: "7:00 AM - 5:00 PM",
            entryFee: "$5",
            bestTime: "Morning",
            duration: "Half day"
          },
          coordinates: { lat: 10.5167, lng: 103.6167 }
        }
      ],
    },
    {
      id: 6,
      name: "Kep",
      description: "Seaside resort town known for fresh crab and peaceful beaches",
    },
    {
      id: 7,
      name: "Banteay Meanchey",
      description: "Northwestern province bordering Thailand with ancient temples",
    },
    {
      id: 8,
      name: "Kampong Cham",
      description: "Province along the Mekong River with rubber plantations",
    },
    {
      id: 9,
      name: "Kampong Chhnang",
      description: "Central province known for pottery and floating villages",
    },
    {
      id: 10,
      name: "Kampong Speu",
      description: "Province with mountains, temples, and traditional villages",
    },
    {
      id: 11,
      name: "Kampong Thom",
      description: "Central province home to Sambor Prei Kuk temple complex",
    },
    {
      id: 12,
      name: "Kandal",
      description: "Province surrounding Phnom Penh with silk weaving villages",
    },
    {
      id: 13,
      name: "Koh Kong",
      description: "Southwestern province with pristine beaches and national parks",
    },
    {
      id: 14,
      name: "Kratié",
      description: "Mekong province famous for Irrawaddy dolphins",
    },
    {
      id: 15,
      name: "Mondulkiri",
      description: "Mountainous province with waterfalls and elephant sanctuaries",
    },
    {
      id: 16,
      name: "Oddar Meanchey",
      description: "Northern border province with remote temples",
    },
    {
      id: 17,
      name: "Pailin",
      description: "Small province known for gem mining and border trade",
    },
    {
      id: 18,
      name: "Preah Vihear",
      description: "Northern province home to the clifftop Preah Vihear Temple",
    },
    {
      id: 19,
      name: "Prey Veng",
      description: "Eastern province with traditional rural life along the Mekong",
    },
    {
      id: 20,
      name: "Pursat",
      description: "Central province known for marble carving and floating villages",
    },
    {
      id: 21,
      name: "Ratanakiri",
      description: "Northeastern province with ethnic minorities and crater lakes",
    },
    {
      id: 22,
      name: "Stung Treng",
      description: "Northern province where the Mekong meets the Sekong River",
    },
    {
      id: 23,
      name: "Svay Rieng",
      description: "Eastern border province with Vietnam, known for agriculture",
    },
    {
      id: 24,
      name: "Takéo",
      description: "Southern province with ancient Angkorian temples and traditional crafts",
    },
    {
      id: 25,
      name: "Tbong Khmum",
      description: "Eastern province known for rubber plantations and traditional crafts",
    },
  ],
}

// Trip planning suggestions based on user preferences
export const tripSuggestions = {
  adventure: {
    budget: {
      attractions: ["Bamboo Train", "Bokor National Park", "Ream National Park"],
      accommodation: "Hostels and guesthouses",
      transport: "Local buses and tuk-tuks",
      dailyBudget: 25,
    },
    mid: {
      attractions: ["Bamboo Train", "Bokor National Park", "Ream National Park", "Floating Village"],
      accommodation: "Mid-range hotels",
      transport: "Private transport and organized tours",
      dailyBudget: 60,
    },
    luxury: {
      attractions: ["Bamboo Train", "Bokor National Park", "Ream National Park", "Floating Village"],
      accommodation: "Luxury resorts",
      transport: "Private car with driver",
      dailyBudget: 150,
    },
  },
  cultural: {
    budget: {
      attractions: ["Angkor Wat", "Bayon Temple", "Ta Prohm", "Royal Palace"],
      accommodation: "Hostels and guesthouses",
      transport: "Bicycle and tuk-tuk",
      dailyBudget: 30,
    },
    mid: {
      attractions: ["Angkor Wat", "Bayon Temple", "Ta Prohm", "Royal Palace", "Silver Pagoda"],
      accommodation: "Boutique hotels",
      transport: "Private tuk-tuk",
      dailyBudget: 75,
    },
    luxury: {
      attractions: ["Angkor Wat", "Bayon Temple", "Ta Prohm", "Royal Palace", "Silver Pagoda"],
      accommodation: "Luxury hotels",
      transport: "Private car with guide",
      dailyBudget: 200,
    },
  },
  relaxation: {
    budget: {
      attractions: ["Otres Beach", "Kep Beach", "Kampot River"],
      accommodation: "Beach hostels",
      transport: "Local transport",
      dailyBudget: 20,
    },
    mid: {
      attractions: ["Otres Beach", "Kep Beach", "Kampot River", "Spa treatments"],
      accommodation: "Beach resorts",
      transport: "Private transport",
      dailyBudget: 80,
    },
    luxury: {
      attractions: ["Otres Beach", "Kep Beach", "Kampot River", "Luxury spas"],
      accommodation: "Luxury beach resorts",
      transport: "Private car and boat",
      dailyBudget: 250,
    },
  },
  family: {
    budget: {
      attractions: ["Floating Village", "Central Market", "Ream National Park"],
      accommodation: "Family guesthouses",
      transport: "Private van",
      dailyBudget: 40,
    },
    mid: {
      attractions: ["Floating Village", "Central Market", "Ream National Park", "Angkor Wat"],
      accommodation: "Family hotels",
      transport: "Private car",
      dailyBudget: 100,
    },
    luxury: {
      attractions: ["Floating Village", "Central Market", "Ream National Park", "Angkor Wat"],
      accommodation: "Family luxury resorts",
      transport: "Private car with guide",
      dailyBudget: 300,
    },
  },
}

// Additional attractions for Quick Recommendations
export const quickRecommendationAttractions = [
  {
    id: 15,
    name: "Phnom Tamao Wildlife Rescue Center",
    description: "Cambodia's premier wildlife rescue and rehabilitation center",
    category: "nature",
    rating: 4.6,
    image: "/images/phnom-tamao.jpg",
    province: "Kandal",
    visitorInfo: {
      openingHours: "8:00 AM - 5:00 PM",
      entryFee: "$5",
      bestTime: "Early morning",
      duration: "3-4 hours",
    }
  },
  {
    id: 16,
    name: "Koh Dach (Silk Island)",
    description: "Traditional silk weaving island in the Mekong River",
    category: "cultural",
    rating: 4.3,
    image: "/images/koh-dach.jpg",
    province: "Kandal",
    visitorInfo: {
      openingHours: "6:00 AM - 6:00 PM",
      entryFee: "Free",
      bestTime: "Morning",
      duration: "Half day",
    }
  },
  {
    id: 17,
    name: "Oudong Mountain",
    description: "Former royal capital with ancient stupas and temples",
    category: "historical",
    rating: 4.4,
    image: "/images/oudong.jpg",
    province: "Kampong Speu",
    visitorInfo: {
      openingHours: "6:00 AM - 6:00 PM",
      entryFee: "$2",
      bestTime: "Early morning or late afternoon",
      duration: "2-3 hours",
    }
  },
  {
    id: 18,
    name: "Siem Reap Water Park",
    description: "Family-friendly water park with slides and pools",
    category: "family",
    rating: 4.2,
    image: "/images/water-park.jpg",
    province: "Siem Reap",
    visitorInfo: {
      openingHours: "9:00 AM - 6:00 PM",
      entryFee: "$15",
      bestTime: "Afternoon",
      duration: "Full day",
    }
  },
  {
    id: 19,
    name: "Cambodian Cultural Village",
    description: "Theme park showcasing Cambodian culture and traditions",
    category: "cultural",
    rating: 4.1,
    image: "/images/cultural-village.jpg",
    province: "Siem Reap",
    visitorInfo: {
      openingHours: "8:00 AM - 7:00 PM",
      entryFee: "$12",
      bestTime: "Morning",
      duration: "4-5 hours",
    }
  },
  {
    id: 20,
    name: "Tonle Sap Floating Villages",
    description: "Traditional floating villages on Southeast Asia's largest lake",
    category: "cultural",
    rating: 4.5,
    image: "/images/floating-village.jpg",
    province: "Siem Reap",
    visitorInfo: {
      openingHours: "6:00 AM - 6:00 PM",
      entryFee: "$20",
      bestTime: "Morning or late afternoon",
      duration: "3-4 hours",
    }
  },
  {
    id: 21,
    name: "Tuol Sleng Genocide Museum",
    description: "Former prison turned museum documenting Khmer Rouge atrocities",
    category: "historical",
    rating: 4.7,
    image: "/images/tuol-sleng.jpg",
    province: "Phnom Penh",
    visitorInfo: {
      openingHours: "8:00 AM - 5:00 PM",
      entryFee: "$5",
      bestTime: "Morning",
      duration: "2-3 hours",
    }
  },
  {
    id: 22,
    name: "Traditional Apsara Dance Shows",
    description: "Classical Khmer dance performances",
    category: "cultural",
    rating: 4.6,
    image: "/images/apsara-dance.jpg",
    province: "Siem Reap",
    visitorInfo: {
      openingHours: "7:00 PM - 9:00 PM",
      entryFee: "$25",
      bestTime: "Evening",
      duration: "2 hours",
    }
  },
  {
    id: 23,
    name: "Kulen Mountain National Park",
    description: "Sacred mountain with waterfalls and ancient carvings",
    category: "nature",
    rating: 4.5,
    image: "/images/kulen-mountain.jpg",
    province: "Siem Reap",
    visitorInfo: {
      openingHours: "6:00 AM - 5:00 PM",
      entryFee: "$20",
      bestTime: "Early morning",
      duration: "Full day",
    }
  },
  {
    id: 24,
    name: "Cardamom Mountains Trekking",
    description: "Adventure trekking in pristine rainforest",
    category: "adventure",
    rating: 4.8,
    image: "/images/cardamom-mountains.jpg",
    province: "Koh Kong",
    visitorInfo: {
      openingHours: "Varies by tour",
      entryFee: "$50-150",
      bestTime: "Dry season",
      duration: "Multi-day",
    }
  },
  {
    id: 25,
    name: "Mekong River Dolphin Watching",
    description: "Rare Irrawaddy dolphin spotting tours",
    category: "nature",
    rating: 4.4,
    image: "/images/mekong-dolphins.jpg",
    province: "Kratié",
    visitorInfo: {
      openingHours: "6:00 AM - 5:00 PM",
      entryFee: "$15",
      bestTime: "Early morning or late afternoon",
      duration: "2-3 hours",
    }
  }
]
