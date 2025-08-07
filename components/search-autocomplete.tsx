'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { featuredDestinations } from '@/lib/mock-data';

interface SearchAutocompleteProps {
  onSelect: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchAutocomplete({ 
  onSelect, 
  placeholder = "Search destinations...",
  className = ""
}: SearchAutocompleteProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate suggestions based on query
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const allSuggestions = new Set<string>();
    
    featuredDestinations.forEach(destination => {
      // Add destination names
      if (destination.name.toLowerCase().includes(query.toLowerCase())) {
        allSuggestions.add(destination.name);
      }
      
      // Add locations
      if (destination.location.toLowerCase().includes(query.toLowerCase())) {
        allSuggestions.add(destination.location);
      }
      
      // Add highlights
      destination.highlights.forEach(highlight => {
        if (highlight.toLowerCase().includes(query.toLowerCase())) {
          allSuggestions.add(highlight);
        }
      });
    });

    const suggestionArray = Array.from(allSuggestions).slice(0, 6);
    setSuggestions(suggestionArray);
    setIsOpen(suggestionArray.length > 0);
    setSelectedIndex(-1);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSelect(suggestions[selectedIndex]);
        } else if (query.trim()) {
          handleSelect(query);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSelect = (suggestion: string) => {
    setQuery(suggestion);
    setIsOpen(false);
    setSelectedIndex(-1);
    onSelect(suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleSelect(query);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
          <Input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => suggestions.length > 0 && setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            className="pl-12 h-14 bg-white/50 dark:bg-slate-900/50 border-0 text-lg placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500/50 rounded-xl"
          />
        </div>
      </form>

      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 border border-white/30 dark:border-slate-700/30 rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            {suggestions.map((suggestion, index) => (
              <motion.button
                key={suggestion}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleSelect(suggestion)}
                className={`w-full px-4 py-3 text-left hover:bg-white/50 dark:hover:bg-slate-700/50 transition-colors duration-200 flex items-center ${
                  index === selectedIndex ? 'bg-white/50 dark:bg-slate-700/50' : ''
                }`}
              >
                <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                <span className="text-slate-700 dark:text-slate-300">{suggestion}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}