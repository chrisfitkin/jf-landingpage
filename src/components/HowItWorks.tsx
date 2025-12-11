import { motion } from 'framer-motion';
import { Download, Settings, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Drop it into Your Website',
    description: 'Replace or upgrade your existing form or CTA instantly.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Customize and Connect',
    description: 'Add fields, connect scheduling, enable payments.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Watch Conversions Rise',
    description: 'Track, test, optimize—JaguarForms does the heavy lifting.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-jaguar-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-jaguar-gold) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-jaguar-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-jaguar-light">
            Up and Running in Minutes
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-jaguar-gold/40 to-transparent" />
              )}

              <div className="relative bg-jaguar-dark rounded-xl p-8 border border-jaguar-gold/10 hover:border-jaguar-gold/30 transition-all group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-jaguar-gold flex items-center justify-center">
                  <span className="text-jaguar-black font-bold text-sm">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-jaguar-charcoal border border-jaguar-gold/10 flex items-center justify-center mb-6 group-hover:bg-jaguar-gold/10 group-hover:border-jaguar-gold/30 transition-all">
                  <step.icon className="w-7 h-7 text-jaguar-gold" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-jaguar-light mb-3">
                  {step.title}
                </h3>
                <p className="text-jaguar-gray">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
