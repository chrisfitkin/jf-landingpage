import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-jaguar-black">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-jaguar-charcoal/50 via-transparent to-jaguar-gold/5" />

        {/* Motion blur lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-jaguar-gold/20 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: '-100%',
                right: '-100%',
              }}
              animate={{
                x: ['0%', '100%'],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Abstract jaguar silhouette */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              fill="currentColor"
              className="text-jaguar-gold"
              d="M350 200c0 82.843-67.157 150-150 150S50 282.843 50 200 117.157 50 200 50s150 67.157 150 150zm-50 0c0-55.228-44.772-100-100-100s-100 44.772-100 100 44.772 100 100 100 100-44.772 100-100z"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-jaguar-charcoal border border-jaguar-gold/20 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-jaguar-gold rounded-full animate-pulse" />
              <span className="text-sm text-jaguar-gray">Early Access</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-jaguar-light">Capture Every Lead.</span>
              <br />
              <span className="text-jaguar-light">Book More Customers.</span>
              <br />
              <span className="bg-gradient-to-r from-jaguar-gold to-jaguar-gold-light bg-clip-text text-transparent">
                Move Faster.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-jaguar-gray max-w-xl mb-8">
              JaguarForms transforms your website into a high-velocity conversion engine—mobile-optimized forms, scheduling, payments, analytics, and A/B testing built for local B2C businesses that need speed and precision.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-jaguar-gold to-jaguar-amber text-jaguar-black font-semibold rounded-lg hover:shadow-xl hover:shadow-jaguar-gold/25 transition-all"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-jaguar-gold/30 text-jaguar-light rounded-lg hover:bg-jaguar-gold/10 hover:border-jaguar-gold/50 transition-all"
              >
                <Play className="w-5 h-5" />
                See How It Works
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            {/* Desktop Mockup */}
            <div className="relative">
              {/* Browser Frame */}
              <div className="bg-jaguar-charcoal rounded-xl border border-jaguar-dark shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-jaguar-dark border-b border-jaguar-charcoal">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-jaguar-black/50 rounded px-3 py-1 text-xs text-jaguar-gray max-w-xs">
                      yourwebsite.com/contact
                    </div>
                  </div>
                </div>

                {/* Form Preview */}
                <div className="p-6 bg-gradient-to-br from-jaguar-black to-jaguar-charcoal">
                  <div className="max-w-sm mx-auto">
                    <h3 className="text-xl font-semibold text-jaguar-light mb-4">Get a Free Quote</h3>
                    <div className="space-y-3">
                      <div className="h-10 bg-jaguar-dark rounded border border-jaguar-charcoal flex items-center px-3">
                        <span className="text-sm text-jaguar-gray">Full Name</span>
                      </div>
                      <div className="h-10 bg-jaguar-dark rounded border border-jaguar-charcoal flex items-center px-3">
                        <span className="text-sm text-jaguar-gray">Email Address</span>
                      </div>
                      <div className="h-10 bg-jaguar-dark rounded border border-jaguar-charcoal flex items-center px-3">
                        <span className="text-sm text-jaguar-gray">Phone Number</span>
                      </div>
                      <div className="h-10 bg-gradient-to-r from-jaguar-gold to-jaguar-amber rounded flex items-center justify-center">
                        <span className="text-sm font-semibold text-jaguar-black">Submit Request</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-8 -left-8 w-40"
              >
                <div className="bg-jaguar-charcoal rounded-2xl border border-jaguar-dark shadow-2xl overflow-hidden">
                  {/* Phone Notch */}
                  <div className="h-6 bg-jaguar-dark flex items-center justify-center">
                    <div className="w-16 h-3 bg-jaguar-black rounded-full" />
                  </div>
                  {/* Content */}
                  <div className="p-3 bg-gradient-to-br from-jaguar-black to-jaguar-charcoal">
                    <div className="text-xs font-semibold text-jaguar-light mb-2">Quick Quote</div>
                    <div className="space-y-1.5">
                      <div className="h-6 bg-jaguar-dark rounded text-xs flex items-center px-2 text-jaguar-gray">Name</div>
                      <div className="h-6 bg-jaguar-dark rounded text-xs flex items-center px-2 text-jaguar-gray">Email</div>
                      <div className="h-6 bg-gradient-to-r from-jaguar-gold to-jaguar-amber rounded flex items-center justify-center">
                        <span className="text-xs font-semibold text-jaguar-black">Submit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -top-4 -right-4 bg-jaguar-charcoal border border-jaguar-gold/30 rounded-lg px-4 py-2 shadow-lg"
              >
                <div className="text-xs text-jaguar-gray">Conversion Rate</div>
                <div className="text-xl font-bold text-jaguar-gold">+47%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-jaguar-gold/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-jaguar-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
