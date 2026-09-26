import { Suspense } from 'react';
import { RapidBlitz } from '@/components/drills/RapidBlitz';

export const metadata = {
  title: 'Rapid Blitz MCQ Sprint | IB SL Business Management',
  description: 'High-velocity timed MCQ drills with instant rationale and streak bonuses.',
};

export default function BlitzPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-text-muted">Loading Blitz Sprint...</div>}>
      <RapidBlitz />
    </Suspense>
  );
}

