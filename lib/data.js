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
      highlights: [
        {
          id: 11,
          name: "Kep Beach",
          description: "Quiet beach town famous for fresh seafood",
          category: "beach",
          image: "/images/Kep Beach.jpg",
          rating: 4.2,
          culturalInfo: "Kep was established as a seaside resort town during French colonial times and is famous for its crab market and peaceful atmosphere."
        }
      ],
      attractions: [
        {
          id: 13,
          name: "Kep Beach",
          description: "Quiet beach town famous for fresh seafood",
          category: "beach",
          image: "/images/Kep Beach.jpg",
          rating: 4.2,
          culturalInfo: "Kep was established as a seaside resort town during French colonial times and is famous for its crab market and peaceful atmosphere.",
          visitorInfo: {
            openingHours: "24 hours",
            entryFee: "Free",
            bestTime: "Early morning or sunset",
            duration: "Half day"
          },
          coordinates: { lat: 10.4833, lng: 104.3167 }
        },
        {
          id: 14,
          name: "Kep National Park",
          description: "Small national park with hiking trails and viewpoints",
          category: "nature",
          image: "/images/Kep National Park.jpg",
          rating: 4.0,
          culturalInfo: "Kep National Park offers hiking trails through tropical forest with panoramic views of the coastline.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$1",
            bestTime: "Early morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 10.4667, lng: 104.3000 }
        }
      ],
    },
    {
      id: 7,
      name: "Banteay Meanchey",
      description: "Northwestern province bordering Thailand with ancient temples",
      highlights: [
        {
          id: 12,
          name: "Banteay Chhmar Temple",
          description: "Remote Angkorian temple complex with intricate carvings",
          category: "temple",
          image: "/images/Banteay Meanchey.jpg",
          rating: 4.3,
          culturalInfo: "Banteay Chhmar is one of the largest temple complexes built during the reign of Jayavarman VII in the late 12th century."
        }
      ],
      attractions: [
        {
          id: 15,
          name: "Banteay Chhmar Temple",
          description: "Remote Angkorian temple complex with intricate carvings",
          category: "temple",
          image: "/images/Banteay Meanchey.jpg",
          rating: 4.3,
          culturalInfo: "Banteay Chhmar is one of the largest temple complexes built during the reign of Jayavarman VII in the late 12th century.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$5",
            bestTime: "Morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 13.7833, lng: 102.9167 }
        }
      ],
    },
    {
      id: 8,
      name: "Kampong Cham",
      description: "Province along the Mekong River with rubber plantations",
      highlights: [
        {
          id: 13,
          name: "Wat Nokor Temple",
          description: "11th-century temple built within a modern pagoda",
          category: "temple",
          image: "/images/Wat Nokor Temple.jpg",
          rating: 4.1,
          culturalInfo: "Wat Nokor is unique as it's an ancient Angkorian temple that has been incorporated into a modern Buddhist pagoda."
        }
      ],
      attractions: [
        {
          id: 16,
          name: "Wat Nokor Temple",
          description: "11th-century temple built within a modern pagoda",
          category: "temple",
          image: "/images/Wat Nokor Temple.jpg",
          rating: 4.1,
          culturalInfo: "Wat Nokor is unique as it's an ancient Angkorian temple that has been incorporated into a modern Buddhist pagoda.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$2",
            bestTime: "Morning",
            duration: "1-2 hours"
          },
          coordinates: { lat: 12.0000, lng: 105.4667 }
        }
      ],
    },
    {
      id: 9,
      name: "Kampong Chhnang",
      description: "Central province known for pottery and floating villages",
      highlights: [
        {
          id: 14,
          name: "Pottery Villages",
          description: "Traditional pottery making communities",
          category: "cultural",
          image: "/images/Pottery Villages.jpg",
          rating: 4.0,
          culturalInfo: "Kampong Chhnang is famous for its traditional pottery making, with techniques passed down through generations."
        }
      ],
      attractions: [
        {
          id: 17,
          name: "Pottery Villages",
          description: "Traditional pottery making communities",
          category: "cultural",
          image: "/images/Pottery Villages.jpg",
          rating: 4.0,
          culturalInfo: "Kampong Chhnang is famous for its traditional pottery making, with techniques passed down through generations.",
          visitorInfo: {
            openingHours: "8:00 AM - 5:00 PM",
            entryFee: "Free",
            bestTime: "Morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 12.2500, lng: 104.6667 }
        }
      ],
    },
    {
      id: 10,
      name: "Kampong Speu",
      description: "Province with mountains, temples, and traditional villages",
      highlights: [
        {
          id: 15,
          name: "Phnom Chisor Temple",
          description: "Hilltop temple with panoramic views",
          category: "temple",
          image: "/images/Phnom Chisor Temple.jpg",
          rating: 4.2,
          culturalInfo: "Phnom Chisor is an 11th-century temple built on a hilltop, offering spectacular views of the surrounding countryside."
        }
      ],
      attractions: [
        {
          id: 18,
          name: "Phnom Chisor Temple",
          description: "Hilltop temple with panoramic views",
          category: "temple",
          image: "/images/Phnom Chisor Temple.jpg",
          rating: 4.2,
          culturalInfo: "Phnom Chisor is an 11th-century temple built on a hilltop, offering spectacular views of the surrounding countryside.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$3",
            bestTime: "Early morning or late afternoon",
            duration: "2-3 hours"
          },
          coordinates: { lat: 11.4167, lng: 104.5833 }
        }
      ],
    },
    {
      id: 11,
      name: "Kampong Thom",
      description: "Central province home to Sambor Prei Kuk temple complex",
      highlights: [
        {
          id: 16,
          name: "Sambor Prei Kuk",
          description: "Pre-Angkorian temple complex and UNESCO World Heritage site",
          category: "temple",
          image: "/images/Sambor Prei Kuk.jpg",
          rating: 4.4,
          culturalInfo: "Sambor Prei Kuk is one of Cambodia's most important archaeological sites, representing the capital of the Chenla Empire."
        }
      ],
      attractions: [
        {
          id: 19,
          name: "Sambor Prei Kuk",
          description: "Pre-Angkorian temple complex and UNESCO World Heritage site",
          category: "temple",
          image: "/images/Sambor Prei Kuk.jpg",
          rating: 4.4,
          culturalInfo: "Sambor Prei Kuk is one of Cambodia's most important archaeological sites, representing the capital of the Chenla Empire.",
          visitorInfo: {
            openingHours: "7:00 AM - 5:00 PM",
            entryFee: "$10",
            bestTime: "Morning",
            duration: "3-4 hours"
          },
          coordinates: { lat: 12.8667, lng: 105.0333 }
        }
      ],
    },
    {
      id: 12,
      name: "Kandal",
      description: "Province surrounding Phnom Penh with silk weaving villages",
      highlights: [
        {
          id: 17,
          name: "Silk Weaving Villages",
          description: "Traditional silk production communities",
          category: "cultural",
          image: "/images/Kandal.jpg",
          rating: 4.1,
          culturalInfo: "Kandal province is known for its traditional silk weaving villages where ancient techniques are still practiced."
        }
      ],
      attractions: [
        {
          id: 20,
          name: "Silk Weaving Villages",
          description: "Traditional silk production communities",
          category: "cultural",
          image: "/images/Kandal.jpg",
          rating: 4.1,
          culturalInfo: "Kandal province is known for its traditional silk weaving villages where ancient techniques are still practiced.",
          visitorInfo: {
            openingHours: "8:00 AM - 5:00 PM",
            entryFee: "Free",
            bestTime: "Morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 11.4667, lng: 104.9000 }
        }
      ],
    },
    {
      id: 13,
      name: "Koh Kong",
      description: "Southwestern province with pristine beaches and national parks",
      highlights: [
        {
          id: 18,
          name: "Koh Kong Island",
          description: "Pristine island with untouched beaches",
          category: "beach",
          image: "/images/Koh Kong Island.jpg",
          rating: 4.3,
          culturalInfo: "Koh Kong offers some of Cambodia's most pristine beaches and is gateway to the Cardamom Mountains."
        }
      ],
      attractions: [
        {
          id: 21,
          name: "Koh Kong Island",
          description: "Pristine island with untouched beaches",
          category: "beach",
          image: "/images/Koh Kong Island.jpg",
          rating: 4.3,
          culturalInfo: "Koh Kong offers some of Cambodia's most pristine beaches and is gateway to the Cardamom Mountains.",
          visitorInfo: {
            openingHours: "24 hours",
            entryFee: "$15 (boat trip)",
            bestTime: "Dry season",
            duration: "Full day"
          },
          coordinates: { lat: 11.6167, lng: 102.9833 }
        }
      ],
    },
    {
      id: 14,
      name: "Kratié",
      description: "Mekong province famous for Irrawaddy dolphins",
      highlights: [
        {
          id: 19,
          name: "Irrawaddy Dolphins",
          description: "Rare freshwater dolphins in the Mekong River",
          category: "nature",
          image: "/images/Kratie.jpg",
          rating: 4.5,
          culturalInfo: "Kratié is one of the last places in the world where you can see the endangered Irrawaddy dolphins in their natural habitat."
        }
      ],
      attractions: [
        {
          id: 22,
          name: "Irrawaddy Dolphins",
          description: "Rare freshwater dolphins in the Mekong River",
          category: "nature",
          image: "/images/Kratie.jpg",
          rating: 4.5,
          culturalInfo: "Kratié is one of the last places in the world where you can see the endangered Irrawaddy dolphins in their natural habitat.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$15 (boat tour)",
            bestTime: "Early morning or late afternoon",
            duration: "2-3 hours"
          },
          coordinates: { lat: 12.4889, lng: 106.0197 }
        }
      ],
    },
    {
      id: 15,
      name: "Mondulkiri",
      description: "Mountainous province with waterfalls and elephant sanctuaries",
      highlights: [
        {
          id: 20,
          name: "Bou Sra Waterfall",
          description: "Spectacular multi-tiered waterfall",
          category: "nature",
          image: "/images/Bou Sra Waterfall.jpg",
          rating: 4.4,
          culturalInfo: "Bou Sra is one of Cambodia's most impressive waterfalls, located in the highland forests of Mondulkiri."
        }
      ],
      attractions: [
        {
          id: 23,
          name: "Bou Sra Waterfall",
          description: "Spectacular multi-tiered waterfall",
          category: "nature",
          image: "/images/Bou Sra Waterfall.jpg",
          rating: 4.4,
          culturalInfo: "Bou Sra is one of Cambodia's most impressive waterfalls, located in the highland forests of Mondulkiri.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$2",
            bestTime: "Morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 12.4500, lng: 107.2000 }
        }
      ],
    },
    {
      id: 16,
      name: "Oddar Meanchey",
      description: "Northern border province with remote temples",
      highlights: [
        {
          id: 21,
          name: "Anlong Veng",
          description: "Former Khmer Rouge stronghold with historical sites",
          category: "historical",
          image: "/images/Anlong Veng.jpg",
          rating: 3.8,
          culturalInfo: "Anlong Veng was the last stronghold of the Khmer Rouge and contains several historical sites from this period."
        }
      ],
      attractions: [
        {
          id: 24,
          name: "Anlong Veng",
          description: "Former Khmer Rouge stronghold with historical sites",
          category: "historical",
          image: "/images/Anlong Veng.jpg",
          rating: 3.8,
          culturalInfo: "Anlong Veng was the last stronghold of the Khmer Rouge and contains several historical sites from this period.",
          visitorInfo: {
            openingHours: "8:00 AM - 5:00 PM",
            entryFee: "$3",
            bestTime: "Morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 14.2333, lng: 103.6833 }
        }
      ],
    },
    {
      id: 17,
      name: "Pailin",
      description: "Small province known for gem mining and border trade",
      highlights: [
        {
          id: 22,
          name: "Gem Mining Sites",
          description: "Traditional gem mining operations",
          category: "cultural",
          image: "/images/Gem Mining Sites.jpg",
          rating: 3.9,
          culturalInfo: "Pailin has been a center for gem mining for centuries, particularly known for rubies and sapphires."
        }
      ],
      attractions: [
        {
          id: 25,
          name: "Gem Mining Sites",
          description: "Traditional gem mining operations",
          category: "cultural",
          image: "/images/Gem Mining Sites.jpg",
          rating: 3.9,
          culturalInfo: "Pailin has been a center for gem mining for centuries, particularly known for rubies and sapphires.",
          visitorInfo: {
            openingHours: "8:00 AM - 4:00 PM",
            entryFee: "$5",
            bestTime: "Morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 12.8500, lng: 102.6167 }
        }
      ],
    },
    {
      id: 18,
      name: "Preah Vihear",
      description: "Northern province home to the clifftop Preah Vihear Temple",
      highlights: [
        {
          id: 23,
          name: "Preah Vihear Temple",
          description: "UNESCO World Heritage temple on a clifftop",
          category: "temple",
          image: "/images/Preah Vihear Temple.jpg",
          rating: 4.6,
          culturalInfo: "Preah Vihear Temple is a UNESCO World Heritage site perched dramatically on a clifftop overlooking Cambodia and Thailand."
        }
      ],
      attractions: [
        {
          id: 26,
          name: "Preah Vihear Temple",
          description: "UNESCO World Heritage temple on a clifftop",
          category: "temple",
          image: "/images/Preah Vihear Temple.jpg",
          rating: 4.6,
          culturalInfo: "Preah Vihear Temple is a UNESCO World Heritage site perched dramatically on a clifftop overlooking Cambodia and Thailand.",
          visitorInfo: {
            openingHours: "7:00 AM - 5:00 PM",
            entryFee: "$10",
            bestTime: "Early morning",
            duration: "3-4 hours"
          },
          coordinates: { lat: 14.3900, lng: 104.6800 }
        }
      ],
    },
    {
      id: 19,
      name: "Prey Veng",
      description: "Eastern province with traditional rural life along the Mekong",
      highlights: [
        {
          id: 24,
          name: "Ba Phnom Temple",
          description: "Hilltop temple with ancient ruins",
          category: "temple",
          image: "/images/Ba Phnom Temple.jpg",
          rating: 4.0,
          culturalInfo: "Ba Phnom is an ancient temple complex on a hill, offering insights into pre-Angkorian architecture."
        }
      ],
      attractions: [
        {
          id: 27,
          name: "Ba Phnom Temple",
          description: "Hilltop temple with ancient ruins",
          category: "temple",
          image: "/images/Ba Phnom Temple.jpg",
          rating: 4.0,
          culturalInfo: "Ba Phnom is an ancient temple complex on a hill, offering insights into pre-Angkorian architecture.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$2",
            bestTime: "Morning",
            duration: "1-2 hours"
          },
          coordinates: { lat: 11.1833, lng: 105.9667 }
        }
      ],
    },
    {
      id: 20,
      name: "Pursat",
      description: "Central province known for marble carving and floating villages",
      highlights: [
        {
          id: 25,
          name: "Marble Carving Villages",
          description: "Traditional stone carving communities",
          category: "cultural",
          image: "/images/Marble Carving Villages.jpg",
          rating: 4.1,
          culturalInfo: "Pursat is famous for its skilled marble and stone carvers who create beautiful sculptures and architectural elements."
        }
      ],
      attractions: [
        {
          id: 28,
          name: "Marble Carving Villages",
          description: "Traditional stone carving communities",
          category: "cultural",
          image: "/images/Marble Carving Villages.jpg",
          rating: 4.1,
          culturalInfo: "Pursat is famous for its skilled marble and stone carvers who create beautiful sculptures and architectural elements.",
          visitorInfo: {
            openingHours: "8:00 AM - 5:00 PM",
            entryFee: "Free",
            bestTime: "Morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 12.5333, lng: 103.9167 }
        }
      ],
    },
    {
      id: 21,
      name: "Ratanakiri",
      description: "Northeastern province with ethnic minorities and crater lakes",
      highlights: [
        {
          id: 26,
          name: "Yeak Laom Lake",
          description: "Volcanic crater lake with crystal clear water",
          category: "nature",
          image: "/images/Yeak Laom Lake.jpg",
          rating: 4.3,
          culturalInfo: "Yeak Laom is a perfectly circular crater lake formed by a volcanic eruption, sacred to the local Tampuan people."
        }
      ],
      attractions: [
        {
          id: 29,
          name: "Yeak Laom Lake",
          description: "Volcanic crater lake with crystal clear water",
          category: "nature",
          image: "/images/Yeak Laom Lake.jpg",
          rating: 4.3,
          culturalInfo: "Yeak Laom is a perfectly circular crater lake formed by a volcanic eruption, sacred to the local Tampuan people.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$1",
            bestTime: "Morning or late afternoon",
            duration: "2-3 hours"
          },
          coordinates: { lat: 13.7500, lng: 106.7167 }
        }
      ],
    },
    {
      id: 22,
      name: "Stung Treng",
      description: "Northern province where the Mekong meets the Sekong River",
      highlights: [
        {
          id: 27,
          name: "Mekong River Rapids",
          description: "Dramatic river rapids and rock formations",
          category: "nature",
          image: "/images/Mekong River Rapids.jpg",
          rating: 4.2,
          culturalInfo: "Stung Treng features dramatic Mekong River rapids and unique rock formations, offering spectacular river scenery."
        }
      ],
      attractions: [
        {
          id: 30,
          name: "Mekong River Rapids",
          description: "Dramatic river rapids and rock formations",
          category: "nature",
          image: "/images/Mekong River Rapids.jpg",
          rating: 4.2,
          culturalInfo: "Stung Treng features dramatic Mekong River rapids and unique rock formations, offering spectacular river scenery.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$5 (boat tour)",
            bestTime: "Morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 13.5167, lng: 106.0167 }
        }
      ],
    },
    {
      id: 23,
      name: "Svay Rieng",
      description: "Eastern border province with Vietnam, known for agriculture",
      highlights: [
        {
          id: 28,
          name: "Prasad Neang Khmau Temple",
          description: "Ancient temple with unique black stone construction",
          category: "temple",
          image: "/images/Prasad Neang Khmau Temple.jpg",
          rating: 3.9,
          culturalInfo: "Prasad Neang Khmau is known for its unique black stone construction and represents ancient Khmer architecture."
        }
      ],
      attractions: [
        {
          id: 31,
          name: "Prasad Neang Khmau Temple",
          description: "Ancient temple with unique black stone construction",
          category: "temple",
          image: "/images/Prasad Neang Khmau Temple.jpg",
          rating: 3.9,
          culturalInfo: "Prasad Neang Khmau is known for its unique black stone construction and represents ancient Khmer architecture.",
          visitorInfo: {
            openingHours: "6:00 AM - 6:00 PM",
            entryFee: "$2",
            bestTime: "Morning",
            duration: "1-2 hours"
          },
          coordinates: { lat: 11.0833, lng: 105.7833 }
        }
      ],
    },
    {
      id: 24,
      name: "Takéo",
      description: "Southern province with ancient Angkorian temples and traditional crafts",
      highlights: [
        {
          id: 29,
          name: "Angkor Borei",
          description: "Ancient pre-Angkorian archaeological site",
          category: "historical",
          image: "/images/Takeo.jpg",
          rating: 4.1,
          culturalInfo: "Angkor Borei is one of Cambodia's oldest archaeological sites, representing the ancient Funan kingdom."
        }
      ],
      attractions: [
        {
          id: 32,
          name: "Angkor Borei",
          description: "Ancient pre-Angkorian archaeological site",
          category: "historical",
          image: "/images/Takeo.jpg",
          rating: 4.1,
          culturalInfo: "Angkor Borei is one of Cambodia's oldest archaeological sites, representing the ancient Funan kingdom.",
          visitorInfo: {
            openingHours: "7:00 AM - 5:00 PM",
            entryFee: "$3",
            bestTime: "Morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 10.9667, lng: 104.8500 }
        }
      ],
    },
    {
      id: 25,
      name: "Tbong Khmum",
      description: "Eastern province known for rubber plantations and traditional crafts",
      highlights: [
        {
          id: 30,
          name: "Rubber Plantations",
          description: "Traditional rubber farming communities",
          category: "cultural",
          image: "/images/Rubber Plantations.jpg",
          rating: 3.8,
          culturalInfo: "Tbong Khmum is known for its extensive rubber plantations and traditional farming practices."
        }
      ],
      attractions: [
        {
          id: 33,
          name: "Rubber Plantations",
          description: "Traditional rubber farming communities",
          category: "cultural",
          image: "/images/Rubber Plantations.jpg",
          rating: 3.8,
          culturalInfo: "Tbong Khmum is known for its extensive rubber plantations and traditional farming practices.",
          visitorInfo: {
            openingHours: "8:00 AM - 5:00 PM",
            entryFee: "Free",
            bestTime: "Morning",
            duration: "2-3 hours"
          },
          coordinates: { lat: 11.7833, lng: 105.6167 }
        }
      ],
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
