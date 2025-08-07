'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Star, Thermometer, Waves } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Destination } from '@/lib/types';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative backdrop-blur-xl bg-white/20 dark:bg-slate-800/20 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <Star className="w-3 h-3 mr-1 fill-current" />
              {destination.rating}
            </Badge>
          </div>

          {/* Location */}
          <div className="absolute bottom-4 left-4 flex items-center text-white">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{destination.location}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {destination.name}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
            {destination.description}
          </p>

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-sm">
              <Thermometer className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-slate-600 dark:text-slate-300">
                {destination.waterTemp}°C
              </span>
            </div>
            <div className="flex items-center text-sm">
              <Waves className="w-4 h-4 mr-2 text-cyan-500" />
              <span className="text-slate-600 dark:text-slate-300">
                {destination.visibility}m vis
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-6">
            {destination.highlights.slice(0, 3).map((highlight, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0"
              >
                {highlight}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Link href={`/destinations/${destination.slug}`} className="flex-1">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0">
                Explore
              </Button>
            </Link>
            <Button
              variant="outline"
              className="backdrop-blur-sm bg-white/10 border-white/30 hover:bg-white/20"
            >
              <Star className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}