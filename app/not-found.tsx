'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Waves, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/20 dark:bg-slate-800/20 border border-white/30 dark:border-slate-700/30 rounded-2xl p-12 shadow-2xl"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex justify-center mb-8"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
              <Waves className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Lost at Sea
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            The page you're looking for has drifted away like a message in a bottle. 
            Let's get you back to safer waters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="flex-1">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Link href="/destinations" className="flex-1">
              <Button variant="outline" className="w-full backdrop-blur-sm bg-white/10 border-white/30 hover:bg-white/20">
                <Search className="w-4 h-4 mr-2" />
                Explore
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}