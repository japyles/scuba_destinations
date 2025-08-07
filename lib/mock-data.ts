import { Destination } from './types';

// Extended mock data with more destinations and comprehensive information
export const featuredDestinations: Destination[] = [
  {
    id: '1',
    name: 'Maldives',
    location: 'Indian Ocean',
    country: 'Maldives',
    slug: 'maldives',
    description: 'Crystal clear waters, vibrant coral reefs, and incredible marine life including whale sharks and manta rays.',
    image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg',
    images: [
      'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg',
      'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg',
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg'
    ],
    rating: 4.9,
    waterTemp: 28,
    visibility: 40,
    bestSeasons: ['November', 'December', 'January', 'February', 'March', 'April'],
    highlights: ['Whale Sharks', 'Manta Rays', 'Coral Gardens', 'Drop-offs'],
    difficulty: 'Beginner',
    maxDepth: 30,
    diveShops: [
      {
        id: 'ds1',
        name: 'Maldives Dive Center',
        location: 'Male Atoll',
        rating: 4.8,
        services: ['PADI Courses', 'Equipment Rental', 'Guided Dives', 'Nitrox'],
        contact: {
          phone: '+960 330 5577',
          email: 'info@maldivesdive.com',
          website: 'https://maldivesdive.com'
        },
        certifications: ['PADI 5-Star', 'SSI Diamond'],
        languages: ['English', 'German', 'French'],
        priceRange: '$80-150',
        image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg'
      },
      {
        id: 'ds2',
        name: 'Blue Ocean Diving',
        location: 'Ari Atoll',
        rating: 4.7,
        services: ['PADI Courses', 'Technical Diving', 'Underwater Photography'],
        contact: {
          phone: '+960 330 6688',
          email: 'dive@blueocean.mv'
        },
        certifications: ['PADI 5-Star IDC'],
        languages: ['English', 'Italian', 'Spanish'],
        priceRange: '$90-180',
        image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg'
      }
    ],
    boatExcursions: [
      {
        id: 'be1',
        name: 'Whale Shark Safari',
        operator: 'Maldives Marine Adventures',
        duration: 'Full Day',
        maxDivers: 12,
        price: 180,
        currency: 'USD',
        includes: ['2 Dives', 'Lunch', 'Equipment', 'Transfers'],
        highlights: ['Whale Shark Encounters', 'Manta Ray Cleaning Station', 'Coral Gardens'],
        schedule: ['7:00 AM Departure', '9:00 AM First Dive', '1:00 PM Lunch', '2:30 PM Second Dive', '5:00 PM Return'],
        difficulty: 'Intermediate',
        image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg',
        bookingUrl: 'https://example.com/book-whale-shark'
      }
    ]
  },
  {
    id: '2',
    name: 'Great Barrier Reef',
    location: 'Queensland, Australia',
    country: 'Australia',
    slug: 'great-barrier-reef',
    description: 'The world\'s largest coral reef system with incredible biodiversity and pristine diving conditions.',
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
    images: [
      'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
      'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg'
    ],
    rating: 4.8,
    waterTemp: 25,
    visibility: 30,
    bestSeasons: ['May', 'June', 'July', 'August', 'September', 'October'],
    highlights: ['Coral Gardens', 'Sea Turtles', 'Reef Sharks', 'Colorful Fish'],
    difficulty: 'Beginner',
    maxDepth: 25,
    diveShops: [
      {
        id: 'ds3',
        name: 'Reef Encounters',
        location: 'Cairns',
        rating: 4.9,
        services: ['Day Trips', 'Liveaboards', 'PADI Courses', 'Snorkeling'],
        contact: {
          phone: '+61 7 4047 9999',
          email: 'info@reefencounters.com.au',
          website: 'https://reefencounters.com.au'
        },
        certifications: ['PADI 5-Star IDC', 'Eco Tourism Certified'],
        languages: ['English', 'Japanese', 'Mandarin'],
        priceRange: '$120-250',
        image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg'
      }
    ],
    boatExcursions: [
      {
        id: 'be2',
        name: 'Outer Reef Adventure',
        operator: 'Great Barrier Reef Tours',
        duration: 'Full Day',
        maxDivers: 20,
        price: 220,
        currency: 'AUD',
        includes: ['3 Dives', 'Lunch', 'Equipment', 'Marine Biologist Guide'],
        highlights: ['Pristine Outer Reef', 'Giant Clams', 'Reef Sharks', 'Coral Bommies'],
        schedule: ['8:00 AM Departure', '10:30 AM First Dive', '12:00 PM Lunch', '1:30 PM Second Dive', '3:00 PM Third Dive', '5:30 PM Return'],
        difficulty: 'Intermediate',
        image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg'
      }
    ]
  },
  {
    id: '3',
    name: 'Red Sea',
    location: 'Sharm El Sheikh, Egypt',
    country: 'Egypt',
    slug: 'red-sea-egypt',
    description: 'World-famous diving destination with spectacular coral walls, wrecks, and diverse marine life.',
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
    images: [
      'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg'
    ],
    rating: 4.7,
    waterTemp: 24,
    visibility: 35,
    bestSeasons: ['March', 'April', 'May', 'September', 'October', 'November'],
    highlights: ['Coral Walls', 'Wrecks', 'Sharks', 'Colorful Reefs'],
    difficulty: 'Intermediate',
    maxDepth: 40,
    diveShops: [
      {
        id: 'ds4',
        name: 'Red Sea Diving Safari',
        location: 'Sharm El Sheikh',
        rating: 4.8,
        services: ['PADI Courses', 'Wreck Diving', 'Technical Diving', 'Liveaboards'],
        contact: {
          phone: '+20 69 360 0100',
          email: 'info@redsea-divingsafari.com'
        },
        certifications: ['PADI 5-Star IDC', 'CMAS'],
        languages: ['English', 'German', 'French', 'Arabic'],
        priceRange: '$45-90',
        image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg'
      }
    ],
    boatExcursions: [
      {
        id: 'be3',
        name: 'Wreck & Reef Explorer',
        operator: 'Red Sea Adventures',
        duration: 'Full Day',
        maxDivers: 16,
        price: 75,
        currency: 'USD',
        includes: ['2 Dives', 'Lunch', 'Equipment', 'Hotel Transfers'],
        highlights: ['Historic Wrecks', 'Coral Walls', 'Reef Sharks', 'Napoleons'],
        schedule: ['8:00 AM Pickup', '9:30 AM First Dive', '12:00 PM Lunch', '2:00 PM Second Dive', '4:30 PM Return'],
        difficulty: 'Advanced',
        image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg'
      }
    ]
  },
  {
    id: '4',
    name: 'Raja Ampat',
    location: 'West Papua, Indonesia',
    country: 'Indonesia',
    slug: 'raja-ampat',
    description: 'Known as the "Four Kings", Raja Ampat boasts the richest marine biodiversity on Earth with pristine coral reefs and incredible macro life.',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg',
    images: [
      'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg',
      'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg'
    ],
    rating: 4.9,
    waterTemp: 27,
    visibility: 25,
    bestSeasons: ['October', 'November', 'December', 'January', 'February', 'March'],
    highlights: ['Manta Rays', 'Wobbegong Sharks', 'Soft Corals', 'Macro Life'],
    difficulty: 'Advanced',
    maxDepth: 35,
    diveShops: [
      {
        id: 'ds5',
        name: 'Raja Ampat Dive Lodge',
        location: 'Arborek Island',
        rating: 4.9,
        services: ['Liveaboards', 'Resort Diving', 'Nitrox', 'Photography Courses'],
        contact: {
          phone: '+62 951 317 8888',
          email: 'info@rajaampat-dive.com',
          website: 'https://rajaampat-dive.com'
        },
        certifications: ['PADI 5-Star IDC', 'SSI Diamond'],
        languages: ['English', 'Indonesian', 'Dutch'],
        priceRange: '$95-200',
        image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg'
      }
    ],
    boatExcursions: [
      {
        id: 'be4',
        name: 'Biodiversity Explorer',
        operator: 'Raja Ampat Adventures',
        duration: 'Full Day',
        maxDivers: 10,
        price: 150,
        currency: 'USD',
        includes: ['3 Dives', 'Lunch', 'Equipment', 'Marine Biologist Guide'],
        highlights: ['Manta Ray Cleaning Station', 'Soft Coral Gardens', 'Macro Photography'],
        schedule: ['7:00 AM Departure', '9:00 AM First Dive', '12:00 PM Lunch', '1:30 PM Second Dive', '3:30 PM Third Dive', '5:30 PM Return'],
        difficulty: 'Advanced',
        image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg'
      }
    ]
  },
  {
    id: '5',
    name: 'Cenotes of Yucatan',
    location: 'Yucatan Peninsula, Mexico',
    country: 'Mexico',
    slug: 'cenotes-yucatan',
    description: 'Explore mystical underwater cave systems with crystal-clear freshwater, stunning stalactites, and unique geological formations.',
    image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
    images: [
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
      'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg'
    ],
    rating: 4.6,
    waterTemp: 25,
    visibility: 50,
    bestSeasons: ['November', 'December', 'January', 'February', 'March', 'April'],
    highlights: ['Cave Diving', 'Stalactites', 'Haloclines', 'Fresh Water'],
    difficulty: 'Expert',
    maxDepth: 45,
    diveShops: [
      {
        id: 'ds6',
        name: 'Cenote Dive Center',
        location: 'Playa del Carmen',
        rating: 4.7,
        services: ['Cave Diving', 'Cavern Diving', 'Technical Training', 'Equipment Rental'],
        contact: {
          phone: '+52 984 803 2836',
          email: 'info@cenotedive.com',
          website: 'https://cenotedive.com'
        },
        certifications: ['PADI Cave Instructor', 'TDI Full Cave'],
        languages: ['English', 'Spanish', 'German'],
        priceRange: '$85-160',
        image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg'
      }
    ],
    boatExcursions: [
      {
        id: 'be5',
        name: 'Cenote Discovery Tour',
        operator: 'Yucatan Cave Divers',
        duration: 'Full Day',
        maxDivers: 8,
        price: 120,
        currency: 'USD',
        includes: ['2 Cenote Dives', 'Lunch', 'Equipment', 'Transportation'],
        highlights: ['Two Different Cenotes', 'Stalactite Formations', 'Halocline Experience'],
        schedule: ['8:00 AM Pickup', '9:30 AM First Cenote', '12:00 PM Lunch', '2:00 PM Second Cenote', '5:00 PM Return'],
        difficulty: 'Advanced',
        image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg'
      }
    ]
  },
  {
    id: '6',
    name: 'Palau',
    location: 'Micronesia',
    country: 'Palau',
    slug: 'palau',
    description: 'World-class diving with pristine coral reefs, WWII wrecks, and the famous Jellyfish Lake. A true Pacific paradise.',
    image: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg',
    images: [
      'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg',
      'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg'
    ],
    rating: 4.8,
    waterTemp: 29,
    visibility: 35,
    bestSeasons: ['November', 'December', 'January', 'February', 'March', 'April', 'May'],
    highlights: ['Blue Corner', 'German Channel', 'Jellyfish Lake', 'WWII Wrecks'],
    difficulty: 'Intermediate',
    maxDepth: 40,
    diveShops: [
      {
        id: 'ds7',
        name: 'Palau Dive Adventures',
        location: 'Koror',
        rating: 4.8,
        services: ['Day Trips', 'Liveaboards', 'PADI Courses', 'Wreck Diving'],
        contact: {
          phone: '+680 488 2637',
          email: 'info@palaudive.com',
          website: 'https://palaudive.com'
        },
        certifications: ['PADI 5-Star IDC', 'NAUI Dream Resort'],
        languages: ['English', 'Japanese', 'Korean'],
        priceRange: '$110-220',
        image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg'
      }
    ],
    boatExcursions: [
      {
        id: 'be6',
        name: 'Blue Corner & German Channel',
        operator: 'Palau Pacific Divers',
        duration: 'Full Day',
        maxDivers: 14,
        price: 195,
        currency: 'USD',
        includes: ['3 Dives', 'Lunch', 'Equipment', 'Reef Hook'],
        highlights: ['Shark Action', 'Manta Cleaning Station', 'Drift Diving'],
        schedule: ['7:30 AM Departure', '9:00 AM Blue Corner', '11:30 AM German Channel', '1:00 PM Lunch', '2:30 PM Third Dive', '5:00 PM Return'],
        difficulty: 'Advanced',
        image: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg'
      }
    ]
  }
];