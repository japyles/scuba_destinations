'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Phone, Mail, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { DiveShopCard } from '@/components/dive-shop-card';
import { featuredDestinations } from '@/lib/mock-data';

export function DiveShopsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [certificationFilter, setCertificationFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // Flatten all dive shops from all destinations
  const allDiveShops = useMemo(() => {
    return featuredDestinations.flatMap(destination => 
      destination.diveShops.map(shop => ({
        ...shop,
        destinationName: destination.name,
        destinationSlug: destination.slug
      }))
    );
  }, []);

  // Get unique locations and certifications for filters
  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(allDiveShops.map(shop => shop.location))];
    return uniqueLocations;
  }, [allDiveShops]);

  const certifications = useMemo(() => {
    const allCerts = allDiveShops.flatMap(shop => shop.certifications);
    return [...new Set(allCerts)];
  }, [allDiveShops]);

  // Filter and sort dive shops
  const filteredShops = useMemo(() => {
    let filtered = allDiveShops.filter(shop => {
      const matchesSearch = searchQuery === '' || 
        shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shop.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesLocation = locationFilter === 'all' || shop.location === locationFilter;
      const matchesCertification = certificationFilter === 'all' || 
        shop.certifications.includes(certificationFilter);
      
      return matchesSearch && matchesLocation && matchesCertification;
    });

    // Sort shops
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'location':
          return a.location.localeCompare(b.location);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, locationFilter, certificationFilter, sortBy, allDiveShops]);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Certified{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Dive Shops
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Find professional dive shops and training centers worldwide. Get certified, rent equipment, and book guided dives with trusted operators.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/20 dark:bg-slate-800/20 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-2xl shadow-blue-500/10 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search dive shops..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-white/50 dark:bg-slate-900/50 border-0 focus:ring-2 focus:ring-blue-500/50 rounded-xl"
                />
              </div>

              {/* Location Filter */}
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="h-12 bg-white/50 dark:bg-slate-900/50 border-0 rounded-xl">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Certification Filter */}
              <Select value={certificationFilter} onValueChange={setCertificationFilter}>
                <SelectTrigger className="h-12 bg-white/50 dark:bg-slate-900/50 border-0 rounded-xl">
                  <SelectValue placeholder="Certification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Certifications</SelectItem>
                  {certifications.map(cert => (
                    <SelectItem key={cert} value={cert}>{cert}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort By */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12 bg-white/50 dark:bg-slate-900/50 border-0 rounded-xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {searchQuery && (
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Search: {searchQuery}
                </Badge>
              )}
              {locationFilter !== 'all' && (
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                  {locationFilter}
                </Badge>
              )}
              {certificationFilter !== 'all' && (
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                  {certificationFilter}
                </Badge>
              )}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-slate-600 dark:text-slate-300">
              Showing {filteredShops.length} dive shop{filteredShops.length !== 1 ? 's' : ''}
            </p>
          </motion.div>

          {/* Dive Shops Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShops.map((shop, index) => (
              <motion.div
                key={`${shop.destinationSlug}-${shop.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <DiveShopCard shop={shop} />
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredShops.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 border border-white/20 dark:border-slate-700/20 rounded-2xl p-12 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  No Dive Shops Found
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Try adjusting your search criteria or browse all dive shops.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setLocationFilter('all');
                    setCertificationFilter('all');
                  }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200"
                >
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}