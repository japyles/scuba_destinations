import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DestinationDetail } from '@/components/destination-detail';
import { featuredDestinations } from '@/lib/mock-data';

type Props = {
  params: {
    slug: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

export function generateStaticParams() {
  return featuredDestinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const destination = featuredDestinations.find(d => d.slug === params.slug);
  
  if (!destination) {
    return {
      title: 'Destination Not Found',
    };
  }

  return {
    title: `${destination.name} - SCUBA Diving Destination | Deep Blue Destinations`,
    description: destination.description,
    keywords: `scuba diving, ${destination.name}, ${destination.location}, dive shops, diving excursions`,
  };
}

export default function DestinationPage({ params }: Props) {
  const destination = featuredDestinations.find(d => d.slug === params.slug);

  if (!destination) {
    notFound();
  }

  return <DestinationDetail destination={destination} />;
}