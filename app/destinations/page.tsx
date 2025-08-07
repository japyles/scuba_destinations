import { Metadata } from 'next';
import { DestinationsPage } from '@/components/destinations-page';

export const metadata: Metadata = {
  title: 'All SCUBA Diving Destinations | Deep Blue Destinations',
  description: 'Browse all premier SCUBA diving destinations worldwide. Find the perfect underwater adventure for your next diving trip.',
  keywords: 'scuba diving destinations, dive sites, underwater adventures, diving locations',
};

export default function Destinations() {
  return <DestinationsPage />;
}