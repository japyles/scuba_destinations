import { Metadata } from 'next';
import { ExcursionsPage } from '@/components/excursions-page';

export const metadata: Metadata = {
  title: 'SCUBA Diving Excursions & Boat Trips | Deep Blue Destinations',
  description: 'Book amazing SCUBA diving excursions and boat trips worldwide. From day trips to liveaboards, find your perfect diving adventure.',
  keywords: 'scuba diving excursions, boat trips, diving tours, liveaboards, dive charters',
};

export default function Excursions() {
  return <ExcursionsPage />;
}