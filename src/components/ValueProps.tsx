import { motion } from 'framer-motion';
import { Zap, Target, DollarSign, BarChart3 } from 'lucide-react';

const props = [
  {
    icon: Zap,
    title: 'Built for Speed',
    description: 'Mobile-first forms engineered to reduce friction and increase conversions.',
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Drop-in forms that match your brand and plug directly into existing CTAs.',
  },
  {
    icon: DollarSign,
    title: 'Revenue-Ready',
    description: 'Scheduling and "Buy Now" billing built directly into the form experience.',
  },
  {
    icon: BarChart3,
    title: 'Intelligent Optimization',
    description: 'A/B testing + analytics automatically identify what converts best.',
  },
];

export function ValueProps() {
  return (
    <section className="py-16 bg-jaguar-charcoal border-y border-jaguar-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-jaguar-gold font-semibold tracking-wider uppercase text-sm">
            Fast. Precise. Built to Convert.
          </span>
        </motion.div>

        {/* Props Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-jaguar-dark rounded-xl mb-4 group-hover:bg-jaguar-gold/10 transition-colors border border-jaguar-gold/10 group-hover:border-jaguar-gold/30">
                <prop.icon className="w-6 h-6 text-jaguar-gold" />
              </div>
              <h3 className="text-lg font-semibold text-jaguar-light mb-2">{prop.title}</h3>
              <p className="text-sm text-jaguar-gray">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
