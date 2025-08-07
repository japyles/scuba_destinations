'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Star, Phone, Mail, Globe, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DiveShop } from '@/lib/types';

interface DiveShopCardProps {
  shop: DiveShop;
}

export function DiveShopCard({ shop }: DiveShopCardProps) {
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
            src={shop.image}
            alt={shop.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <Star className="w-3 h-3 mr-1 fill-current" />
              {shop.rating}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {shop.name}
              </h3>
              <div className="flex items-center text-slate-600 dark:text-slate-300 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{shop.location}</span>
              </div>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                {shop.priceRange} per dive
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {shop.certifications.map((cert, index) => (
                <Badge
                  key={index}
                  className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-0"
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Services:</p>
            <div className="flex flex-wrap gap-2">
              {shop.services.slice(0, 3).map((service, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs"
                >
                  {service}
                </Badge>
              ))}
              {shop.services.length > 3 && (
                <Badge
                  variant="outline"
                  className="border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs"
                >
                  +{shop.services.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Languages:</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {shop.languages.join(', ')}
            </p>
          </div>

          {/* Contact Actions */}
          <div className="flex gap-2">
            <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="backdrop-blur-sm bg-white/10 border-white/30 hover:bg-white/20"
            >
              <Mail className="w-4 h-4" />
            </Button>
            {shop.contact.website && (
              <Button
                size="sm"
                variant="outline"
                className="backdrop-blur-sm bg-white/10 border-white/30 hover:bg-white/20"
              >
                <Globe className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}