'use client';

import { LoadingSpinner } from '@/components/loading-spinner';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-slate-600 dark:text-slate-300">
          Diving into the depths...
        </p>
      </div>
    </div>
  );
}