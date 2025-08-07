'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DestinationCard } from '@/components/destination-card';
import { featuredDestinations } from '@/lib/mock-data';

interface SearchResultsProps {
  query: string;
  onClose: () => void;
}

export function SearchResults({ query, onClose }: SearchResultsProps) {
  // Mock search filtering - in real app this would call API
  const results = featuredDestinations.filter(destination =>
    destination.name.toLowerCase().includes(query.toLowerCase()) ||
    destination.location.toLowerCase().includes(query.toLowerCase()) ||
    destination.highlights.some(highlight =>
      highlight.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 py-16 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Search Results
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Found {results.length} destinations for "{query}"
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-slate-800/20"
            >
              <X className="w-6 h-6" />
            </Button>
          </motion.div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </div>

          {results.length === 0 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <div className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 border border-white/20 dark:border-slate-700/20 rounded-2xl p-12 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  No Results Found
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Try searching with different keywords or browse our featured destinations.
                </p>
                <Button
                  onClick={onClose}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                >
                  Browse Destinations
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}