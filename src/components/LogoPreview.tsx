import { JaguarEye } from './logos/JaguarEye';
import { MotionMark } from './logos/MotionMark';
import { ClawMark } from './logos/ClawMark';

interface LogoOptionProps {
  name: string;
  description: string;
  children: React.ReactNode;
}

function LogoOption({ name, description, children }: LogoOptionProps) {
  return (
    <div className="flex flex-col items-center p-8 bg-jaguar-charcoal rounded-xl border border-jaguar-dark hover:border-jaguar-gold/30 transition-all">
      {/* Large preview */}
      <div className="mb-6">{children}</div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-jaguar-light mb-2">{name}</h3>

      {/* Description */}
      <p className="text-sm text-jaguar-gray text-center mb-6">{description}</p>

      {/* Size variations */}
      <div className="flex items-center gap-4 pt-4 border-t border-jaguar-dark">
        <div className="text-xs text-jaguar-gray">Sizes:</div>
        {[24, 32, 40, 48].map((size) => (
          <div key={size} className="flex flex-col items-center gap-1">
            {name === 'Jaguar Eye' && <JaguarEye size={size} />}
            {name === 'Motion Mark' && <MotionMark size={size} />}
            {name === 'Claw Mark' && <ClawMark size={size} />}
            <span className="text-xs text-jaguar-gray">{size}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoPreview() {
  return (
    <section className="min-h-screen bg-jaguar-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-jaguar-light mb-4">
            JaguarForms Logo Options
          </h1>
          <p className="text-jaguar-gray max-w-2xl mx-auto">
            Three logo concepts based on the brand identity: predatory precision, speed, and modern B2B aesthetics.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <LogoOption
            name="Jaguar Eye"
            description="Minimal, predatory. A vertical slit pupil inside an angular eye shape. Suggests alertness and precision."
          >
            <JaguarEye size={80} />
          </LogoOption>

          <LogoOption
            name="Motion Mark"
            description="Speed lines trailing a stylized J with a forward arrow. Represents velocity and momentum."
          >
            <MotionMark size={80} />
          </LogoOption>

          <LogoOption
            name="Claw Mark"
            description="Three diagonal slashes with gradient depth. Abstract, powerful, cuts through friction."
          >
            <ClawMark size={80} />
          </LogoOption>
        </div>

        {/* Usage preview */}
        <div className="mt-16 p-8 bg-jaguar-charcoal rounded-xl border border-jaguar-dark">
          <h2 className="text-xl font-semibold text-jaguar-light mb-6 text-center">
            Header Preview
          </h2>
          <div className="flex flex-col gap-6">
            {/* With Jaguar Eye */}
            <div className="flex items-center gap-3 p-4 bg-jaguar-dark rounded-lg">
              <JaguarEye size={40} />
              <span className="text-xl font-bold text-jaguar-light">JaguarForms</span>
              <span className="ml-auto text-xs text-jaguar-gray">Jaguar Eye</span>
            </div>

            {/* With Motion Mark */}
            <div className="flex items-center gap-3 p-4 bg-jaguar-dark rounded-lg">
              <MotionMark size={40} />
              <span className="text-xl font-bold text-jaguar-light">JaguarForms</span>
              <span className="ml-auto text-xs text-jaguar-gray">Motion Mark</span>
            </div>

            {/* With Claw Mark */}
            <div className="flex items-center gap-3 p-4 bg-jaguar-dark rounded-lg">
              <ClawMark size={40} />
              <span className="text-xl font-bold text-jaguar-light">JaguarForms</span>
              <span className="ml-auto text-xs text-jaguar-gray">Claw Mark</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
