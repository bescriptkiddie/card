import DailyCard from '@/components/DailyCard';
import PsychologyInteraction from '@/components/PsychologyInteraction';
import { terms } from '@/lib/terms';

export default function Home() {
  const todayTerm = terms[0];

  return (
    <main className='min-h-screen py-8'>
      <DailyCard initialTerm={todayTerm} />
      <div className='mt-8'>
        <PsychologyInteraction />
      </div>
    </main>
  );
}
