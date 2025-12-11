import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

const industries = [
  'Home Services',
  'Fitness & Wellness',
  'Med Spa & Beauty',
  'Auto Services',
  'Legal Services',
  'Professional Services',
  'Healthcare',
  'Real Estate',
  'Other',
];

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    websiteUrl: '',
    industry: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://submit-form.com/4q6mjCIVG', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-24 bg-jaguar-charcoal">
        <div className="max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 bg-jaguar-dark rounded-2xl border border-jaguar-gold/20"
          >
            <div className="w-16 h-16 rounded-full bg-jaguar-gold/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-jaguar-gold" />
            </div>
            <h3 className="text-2xl font-bold text-jaguar-light mb-3">
              You're on the list!
            </h3>
            <p className="text-jaguar-gray">
              Thanks for joining! We'll notify you as soon as early access begins.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 bg-jaguar-charcoal relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-jaguar-black to-transparent" />
      </div>

      <div className="max-w-xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-jaguar-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
              Early Access
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-jaguar-light mb-4">
              Get Early Access to JaguarForms
            </h2>
            <p className="text-jaguar-gray">
              Be the first to use a high-performance form system built for speed, clarity, and conversion.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-jaguar-light mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-jaguar-dark border border-jaguar-gold/10 rounded-lg text-jaguar-light placeholder-jaguar-gray focus:outline-none focus:border-jaguar-gold/50 focus:ring-1 focus:ring-jaguar-gold/50 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-jaguar-light mb-2">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-jaguar-dark border border-jaguar-gold/10 rounded-lg text-jaguar-light placeholder-jaguar-gray focus:outline-none focus:border-jaguar-gold/50 focus:ring-1 focus:ring-jaguar-gold/50 transition-all"
                placeholder="Your business name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-jaguar-light mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-jaguar-dark border border-jaguar-gold/10 rounded-lg text-jaguar-light placeholder-jaguar-gray focus:outline-none focus:border-jaguar-gold/50 focus:ring-1 focus:ring-jaguar-gold/50 transition-all"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="websiteUrl" className="block text-sm font-medium text-jaguar-light mb-2">
                Website URL
              </label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-jaguar-dark border border-jaguar-gold/10 rounded-lg text-jaguar-light placeholder-jaguar-gray focus:outline-none focus:border-jaguar-gold/50 focus:ring-1 focus:ring-jaguar-gold/50 transition-all"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-jaguar-light mb-2">
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-jaguar-dark border border-jaguar-gold/10 rounded-lg text-jaguar-light focus:outline-none focus:border-jaguar-gold/50 focus:ring-1 focus:ring-jaguar-gold/50 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Select your industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-jaguar-gold to-jaguar-amber text-jaguar-black font-semibold rounded-lg hover:shadow-xl hover:shadow-jaguar-gold/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
