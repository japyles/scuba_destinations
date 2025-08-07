'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Users, DollarSign, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { BoatExcursionCard } from '@/components/boat-excursion-card';
import { featuredDestinations } from '@/lib/mock-data';

export function ExcursionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  // Flatten all excursions from all destinations
  const allExcursions = useMemo(() => {
    return featuredDestinations.flatMap(destination => 
      destination.boatExcursions.map(excursion => ({
        ...excursion,
        destinationName: destination.name,
        destinationSlug: destination.slug
      }))
    );
  }, []);

  // Get unique values for filters
  const difficulties = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const durations = [...new Set(allExcursions.map(e => e.duration))];

  // Filter and sort excursions
  const filteredExcursions = useMemo(() => {
    let filtered = allExcursions.filter(excursion => {
      const matchesSearch = searchQuery === '' || 
        excursion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        excursion.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
        excursion.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesDifficulty = difficultyFilter === 'all' || excursion.difficulty === difficultyFilter;
      const matchesDuration = durationFilter === 'all' || excursion.duration === durationFilter;
      
      let matchesPrice = true;
      if (priceFilter !== 'all') {
        const price = excursion.price;
        switch (priceFilter) {
          case 'budget':
            matchesPrice = price < 100;
            break;
          case 'mid':
            matchesPrice = price >= 100 && price < 200;
            break;
          case 'premium':
            matchesPrice = price >= 200;
            break;
        }
      }
      
      return matchesSearch && matchesDifficulty && matchesDuration && matchesPrice;
    });

    // Sort excursions
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'duration':
          return a.duration.localeCompare(b.duration);
        case 'maxDivers':
          return b.maxDivers - a.maxDivers;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, difficultyFilter, durationFilter, priceFilter, sortBy, allExcursions]);

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
              Diving{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Excursions
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Book incredible diving excursions and boat trips worldwide. From half-day adventures to multi-day liveaboards, find your perfect underwater experience.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/20 dark:bg-slate-800/20 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-2xl shadow-blue-500/10 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search excursions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-white/50 dark:bg-slate-900/50 border-0 focus:ring-2 focus:ring-blue-500/50 rounded-xl"
                />
              </div>

              {/* Difficulty Filter */}
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="h-12 bg-white/50 dark:bg-slate-900/50 border-0 rounded-xl">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {difficulties.map(difficulty => (
                    <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Duration Filter */}
              <Select value={durationFilter} onValueChange={setDurationFilter}>
                <SelectTrigger className="h-12 bg-white/50 dark:bg-slate-900/50 border-0 rounded-xl">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  {durations.map(duration => (
                    <SelectItem key={duration} value={duration}>{duration}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Filter */}
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="h-12 bg-white/50 dark:bg-slate-900/50 border-0 rounded-xl">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="budget">Budget (&lt; $100)</SelectItem>
                  <SelectItem value="mid">Mid-range ($100-200)</SelectItem>
                  <SelectItem value="premium">Premium ($200+)</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort By */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12 bg-white/50 dark:bg-slate-900/50 border-0 rounded-xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="maxDivers">Group Size</SelectItem>
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
              {difficultyFilter !== 'all' && (
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                  {difficultyFilter}
                </Badge>
              )}
              {durationFilter !== 'all' && (
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                  {durationFilter}
                </Badge>
              )}
              {priceFilter !== 'all' && (
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">
                  {priceFilter === 'budget' ? 'Budget' : priceFilter === 'mid' ? 'Mid-range' : 'Premium'}
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
              Showing {filteredExcursions.length} excursion{filteredExcursions.length !== 1 ? 's' : ''}
            </p>
          </motion.div>

          {/* Excursions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredExcursions.map((excursion, index) => (
              <motion.div
                key={`${excursion.destinationSlug}-${excursion.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <BoatExcursionCard excursion={excursion} />
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredExcursions.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 border border-white/20 dark:border-slate-700/20 rounded-2xl p-12 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  No Excursions Found
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Try adjusting your search criteria or browse all excursions.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setDifficultyFilter('all');
                    setDurationFilter('all');
                    setPriceFilter('all');
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