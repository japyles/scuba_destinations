'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Star, Thermometer, Waves, Calendar, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DiveShopCard } from '@/components/dive-shop-card';
import { BoatExcursionCard } from '@/components/boat-excursion-card';
import { Destination } from '@/lib/types';

interface DestinationDetailProps {
  destination: Destination;
}

export function DestinationDetail({ destination }: DestinationDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destination.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + destination.images.length) % destination.images.length);
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 sm:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={destination.images[currentImageIndex]}
            alt={destination.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Image Navigation */}
          {destination.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
              <div className="flex items-center gap-2 text-white mb-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{destination.location}, {destination.country}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                {destination.name}
              </h1>
              <div className="flex items-center gap-4">
                <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white px-3 py-1">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  {destination.rating}
                </Badge>
                <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white px-3 py-1">
                  {destination.difficulty}
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  About This Destination
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    What You'll See
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <Badge
                        key={index}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-3 py-1"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Best Seasons */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Best Time to Dive
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.bestSeasons.map((season, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {season}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="backdrop-blur-xl bg-white/20 dark:bg-slate-800/20 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-xl sticky top-24"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                  Diving Conditions
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Thermometer className="w-5 h-5 mr-3 text-blue-500" />
                      <span className="text-slate-600 dark:text-slate-300">Water Temp</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {destination.waterTemp}°C
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Waves className="w-5 h-5 mr-3 text-cyan-500" />
                      <span className="text-slate-600 dark:text-slate-300">Visibility</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {destination.visibility}m
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-3 text-teal-500" />
                      <span className="text-slate-600 dark:text-slate-300">Max Depth</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {destination.maxDepth}m
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20 dark:border-slate-700/20">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  >
                    Plan Your Trip
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Tabs defaultValue="dive-shops" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="dive-shops">Dive Shops</TabsTrigger>
                <TabsTrigger value="excursions">Boat Excursions</TabsTrigger>
              </TabsList>

              <TabsContent value="dive-shops" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Local Dive Shops
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                    Certified dive shops and training centers in {destination.name}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {destination.diveShops.map((shop, index) => (
                      <motion.div
                        key={shop.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <DiveShopCard shop={shop} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="excursions" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Boat Excursions
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                    Guided diving trips and boat excursions available in {destination.name}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {destination.boatExcursions.map((excursion, index) => (
                      <motion.div
                        key={excursion.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <BoatExcursionCard excursion={excursion} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
}