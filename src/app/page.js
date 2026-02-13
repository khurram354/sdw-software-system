import HeroSec from '@/components/frontend/home/HeroSec';
import ProblemWeSolve from '@/components/frontend/home/ProblemWeSolve';
import HowDSSystemWorks from '@/components/frontend/home/HowDSSystemWorks';
import PowerfullFeature from '@/components/frontend/home/PowerfullFeature';
import Industries from '@/components/frontend/home/Industries';
import WhyChooseUs from '@/components/frontend/home/WhyChooseUs';
import CTASec from '@/components/frontend/home/CTASec';
import Reporting from '@/components/frontend/home/Reporting';
export default function HomePage() {
   const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-800 via-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      <HeroSec/>
      <ProblemWeSolve fadeInUp={fadeInUp}/>
      <HowDSSystemWorks fadeInUp={fadeInUp}/>
      <PowerfullFeature fadeInUp={fadeInUp}/>
      <Industries fadeInUp={fadeInUp}/>
      <WhyChooseUs fadeInUp={fadeInUp}/>
      <Reporting/>
      <CTASec/>
    </div>
  );
}