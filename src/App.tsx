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
import { LogoPreview } from './components/LogoPreview';

// Set to true to preview logo options, false for normal landing page
const SHOW_LOGO_PREVIEW = false;

function App() {
  if (SHOW_LOGO_PREVIEW) {
    return (
      <div className="min-h-screen bg-jaguar-black">
        <LogoPreview />
      </div>
    );
  }

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
