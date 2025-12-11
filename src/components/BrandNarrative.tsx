import { motion } from 'framer-motion';

export function BrandNarrative() {
  return (
    <section className="py-24 bg-jaguar-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-jaguar-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-jaguar-light mb-8">
            Lead Capture With the{' '}
            <span className="bg-gradient-to-r from-jaguar-gold to-jaguar-gold-light bg-clip-text text-transparent">
              Instincts of a Predator
            </span>
          </h2>

          <div className="space-y-6 text-lg text-jaguar-gray leading-relaxed">
            <p>
              JaguarForms doesn't wait for leads—it positions your business to strike the moment a visitor shows intent. Every form is engineered with the speed, efficiency, and precision of a jaguar in motion.
            </p>
            <p className="text-jaguar-light font-medium">
              No wasted clicks. No lost leads. No friction.
            </p>
            <p>
              Your customers get a fast, intuitive experience.
              <br />
              <span className="text-jaguar-gold">You get more bookings, sales, and revenue—automatically.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
