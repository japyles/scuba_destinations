'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, Users, DollarSign, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BoatExcursion } from '@/lib/types';

interface BoatExcursionCardProps {
  excursion: BoatExcursion;
}

export function BoatExcursionCard({ excursion }: BoatExcursionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <div className="backdrop-blur-xl bg-white/20 dark:bg-slate-800/20 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={excursion.image}
            alt={excursion.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Difficulty Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
              {excursion.difficulty}
            </Badge>
          </div>

          {/* Price */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2">
              <div className="flex items-center text-white">
                <DollarSign className="w-4 h-4 mr-1" />
                <span className="text-lg font-bold">
                  {excursion.price} {excursion.currency}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {excursion.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Operated by {excursion.operator}
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-slate-600 dark:text-slate-300">{excursion.duration}</span>
            </div>
            <div className="flex items-center text-sm">
              <Users className="w-4 h-4 mr-2 text-cyan-500" />
              <span className="text-slate-600 dark:text-slate-300">Max {excursion.maxDivers}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Highlights:</p>
            <div className="flex flex-wrap gap-2">
              {excursion.highlights.slice(0, 3).map((highlight, index) => (
                <Badge
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0 text-xs"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Includes:</p>
            <div className="space-y-1">
              {excursion.includes.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-center text-sm">
                  <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                  <span className="text-slate-600 dark:text-slate-400">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Schedule:</p>
            <div className="space-y-1">
              {excursion.schedule.slice(0, 3).map((time, index) => (
                <div key={index} className="flex items-center text-sm">
                  <Calendar className="w-3 h-3 mr-2 text-blue-500" />
                  <span className="text-slate-600 dark:text-slate-400">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0"
            size="lg"
          >
            {excursion.bookingUrl ? (
              <>
                Book Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </>
            ) : (
              'Get Information'
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}