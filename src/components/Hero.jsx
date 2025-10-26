import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradients overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90 dark:from-neutral-950/90 dark:via-neutral-950/40 dark:to-neutral-950/95" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-blue-500 to-orange-500 bg-clip-text text-transparent"
          >
            Empowering Businesses Through Digital Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl"
          >
            TechReach Global Solutions crafts custom software, responsive websites, and secure intranet systems that boost productivity, connectivity, and operational efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-600/30"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900 px-6 py-3 text-sm font-semibold"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex items-end justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full max-w-md rounded-2xl p-6 bg-white/70 dark:bg-neutral-900/60 border border-white/60 dark:border-neutral-800 backdrop-blur shadow-xl"
          >
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Trusted by teams worldwide</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              From SMEs to public sector organizations, our solutions scale securely across regions.
            </p>
            <div className="mt-4 grid grid-cols-4 gap-3 opacity-90">
              <div className="h-8 rounded bg-gradient-to-r from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700" />
              <div className="h-8 rounded bg-gradient-to-r from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700" />
              <div className="h-8 rounded bg-gradient-to-r from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700" />
              <div className="h-8 rounded bg-gradient-to-r from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
