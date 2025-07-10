import HeroHome from '@/components/HeroHome';
import Services from '@/components/Services';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero overflow-x-hidden">
      <HeroHome />
      <Services />
    </div>
  );
};

export default HomePage;