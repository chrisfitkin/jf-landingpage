import { motion } from 'framer-motion';
import { Code2, LineChart, Building2 } from 'lucide-react';

const proofPoints = [
  {
    icon: Code2,
    text: 'Built by experienced software founders who\'ve launched 100+ high-performing apps.',
  },
  {
    icon: LineChart,
    text: 'Engineered with CRO principles used by top growth teams.',
  },
  {
    icon: Building2,
    text: 'Optimized for local B2C industries: home services, fitness, med spas, auto, legal, dental, and more.',
  },
];

export function SocialProof() {
  return (
    <section className="py-16 bg-jaguar-charcoal border-y border-jaguar-dark">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-jaguar-gold font-semibold tracking-wider uppercase text-sm">
            Why Trust JaguarForms
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-jaguar-dark border border-jaguar-gold/20 flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-jaguar-gold" />
              </div>
              <p className="text-jaguar-gray text-sm leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
