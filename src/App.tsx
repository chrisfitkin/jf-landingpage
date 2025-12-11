import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { BrandNarrative } from './components/BrandNarrative';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { UseCases } from './components/UseCases';
import { HowItWorks } from './components/HowItWorks';
import { CTAStrip } from './components/CTAStrip';
import { WaitlistForm } from './components/WaitlistForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-jaguar-black">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <BrandNarrative />
        <Features />
        <SocialProof />
        <UseCases />
        <HowItWorks />
        <CTAStrip />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
