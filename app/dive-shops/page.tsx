import { Metadata } from 'next';
import { DiveShopsPage } from '@/components/dive-shops-page';

export const metadata: Metadata = {
  title: 'SCUBA Dive Shops Worldwide | Deep Blue Destinations',
  description: 'Find certified SCUBA dive shops and training centers worldwide. Compare services, certifications, and book your diving experience.',
  keywords: 'scuba dive shops, diving centers, PADI, SSI, dive training, equipment rental',
};

export default function DiveShops() {
  return <DiveShopsPage />;
}