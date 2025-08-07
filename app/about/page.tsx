import { Metadata } from 'next';
import { AboutPage } from '@/components/about-page';

export const metadata: Metadata = {
  title: 'About Deep Blue Destinations | SCUBA Diving Platform',
  description: 'Learn about Deep Blue Destinations, your premier platform for discovering SCUBA diving destinations, dive shops, and excursions worldwide.',
  keywords: 'about deep blue destinations, scuba diving platform, diving community, underwater adventures',
};

export default function About() {
  return <AboutPage />;
}