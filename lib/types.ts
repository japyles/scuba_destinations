export interface Destination {
  id: string;
  name: string;
  location: string;
  country: string;
  slug: string;
  description: string;
  image: string;
  images: string[];
  rating: number;
  waterTemp: number;
  visibility: number;
  bestSeasons: string[];
  highlights: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  maxDepth: number;
  diveShops: DiveShop[];
  boatExcursions: BoatExcursion[];
}

export interface DiveShop {
  id: string;
  name: string;
  location: string;
  rating: number;
  services: string[];
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  certifications: string[];
  languages: string[];
  priceRange: string;
  image: string;
}

export interface BoatExcursion {
  id: string;
  name: string;
  operator: string;
  duration: string;
  maxDivers: number;
  price: number;
  currency: string;
  includes: string[];
  highlights: string[];
  schedule: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  image: string;
  bookingUrl?: string;
}