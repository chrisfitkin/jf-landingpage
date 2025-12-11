import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTAStrip() {
  return (
    <section className="py-20 bg-jaguar-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-jaguar-gold/5 via-transparent to-jaguar-gold/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-jaguar-gold/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-jaguar-light mb-6">
            Your customers are ready.{' '}
            <span className="bg-gradient-to-r from-jaguar-gold to-jaguar-gold-light bg-clip-text text-transparent">
              JaguarForms helps you capture them.
            </span>
          </h2>

          <p className="text-lg text-jaguar-gray mb-8 max-w-2xl mx-auto">
            Strike at the exact moment customers decide. Upgrade your website's ability to capture demand.
          </p>

          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-jaguar-gold to-jaguar-amber text-jaguar-black font-semibold rounded-lg hover:shadow-xl hover:shadow-jaguar-gold/25 transition-all"
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
