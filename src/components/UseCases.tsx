import { motion } from 'framer-motion';
import {
  Wrench,
  Dumbbell,
  Sparkles,
  Car,
  Scale
} from 'lucide-react';

const useCases = [
  {
    icon: Wrench,
    industry: 'Home Services',
    description: 'Turn visitors into booked appointments instantly.',
  },
  {
    icon: Dumbbell,
    industry: 'Fitness Studios',
    description: 'Sell intro offers and schedule sessions in one tap.',
  },
  {
    icon: Sparkles,
    industry: 'Med Spas & Wellness',
    description: 'Capture leads and deposits before they bounce.',
  },
  {
    icon: Car,
    industry: 'Auto Services',
    description: 'Book appointments without phone calls.',
  },
  {
    icon: Scale,
    industry: 'Legal & Professional Services',
    description: 'Streamline consult requests and follow-ups.',
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-jaguar-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-jaguar-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-jaguar-light mb-4">
            Designed for Local Businesses Who Need Results Now
          </h2>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-jaguar-charcoal rounded-xl border border-jaguar-dark hover:border-jaguar-gold/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-jaguar-dark border border-jaguar-gold/10 flex items-center justify-center mb-4 group-hover:bg-jaguar-gold/10 group-hover:border-jaguar-gold/30 transition-all">
                <useCase.icon className="w-6 h-6 text-jaguar-gold" />
              </div>
              <h3 className="text-lg font-semibold text-jaguar-light mb-2">
                {useCase.industry}
              </h3>
              <p className="text-sm text-jaguar-gray">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-jaguar-gray"
        >
          <span className="text-jaguar-light font-medium">If your customers buy locally,</span>{' '}
          JaguarForms helps you capture them faster.
        </motion.p>
      </div>
    </section>
  );
}
