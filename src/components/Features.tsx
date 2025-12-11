import { motion } from 'framer-motion';
import {
  Smartphone,
  Calendar,
  CreditCard,
  Puzzle,
  FlaskConical,
  Eye
} from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-Optimized Instant Forms',
    description: 'Move at the speed your customers expect. No pinching, loading, or confusion—just a clean glide from interest to action.',
  },
  {
    icon: Calendar,
    title: 'Scheduling That Books Without the Back-and-Forth',
    description: 'Drop in your calendar and let prospects pick a time on the spot.',
  },
  {
    icon: CreditCard,
    title: 'Buy Now With Billing Integration',
    description: 'Turn leads into revenue in the same moment they decide to act.',
  },
  {
    icon: Puzzle,
    title: 'Drop-In Website Integration',
    description: 'Works with any site—no rebuild, no agency, no mess.',
  },
  {
    icon: FlaskConical,
    title: 'Built-In A/B Testing',
    description: 'Let the data hunt for your highest-converting version, automatically.',
  },
  {
    icon: Eye,
    title: 'Analytics That See in the Dark',
    description: 'Track every click, view, drop-off, and conversion with clarity.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-jaguar-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-jaguar-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-jaguar-light">
            The Tools That Give You an Edge
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 bg-jaguar-charcoal rounded-xl border border-jaguar-dark hover:border-jaguar-gold/30 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-jaguar-gold/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-jaguar-dark rounded-lg mb-4 group-hover:bg-jaguar-gold/10 transition-colors border border-jaguar-gold/10 group-hover:border-jaguar-gold/30">
                  <feature.icon className="w-6 h-6 text-jaguar-gold" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-jaguar-light mb-2 group-hover:text-jaguar-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-jaguar-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
