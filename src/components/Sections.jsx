import { motion } from 'framer-motion';
import { Code2, Layout, ShieldCheck, Network, Building2, GraduationCap, HeartPulse, Truck, Landmark, ArrowRight, CheckCircle2, Mail, MapPin, Phone, Globe2 } from 'lucide-react';

const Section = ({ id, overline, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-20 py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        {overline && (
          <p className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400">{overline}</p>
        )}
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">{subtitle}</p>
        )}
      </div>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

export default function Sections() {
  return (
    <div>
      {/* About */}
      <Section
        id="about"
        overline="Who We Are"
        title="About TechReach Global Solutions"
        subtitle="We are an ICT company delivering innovative digital solutions that drive measurable business results. Our team blends strategy, design, and engineering to build products that scale."
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose dark:prose-invert max-w-none"
          >
            <h3>Mission</h3>
            <p>
              Empower organizations with secure, scalable, and user-centric technology that enhances productivity and connectivity while reducing operational complexity.
            </p>
            <h3>Vision</h3>
            <p>
              To be a trusted global partner for digital transformation, known for innovation, excellence, and lasting impact.
            </p>
            <h3>Values</h3>
            <ul>
              <li>Innovation and continuous improvement</li>
              <li>Customer-centric partnerships</li>
              <li>Security, reliability, and performance</li>
              <li>Integrity and transparency</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services */}
      <Section
        id="services"
        overline="What We Do"
        title="Services"
        subtitle="From idea to launch, our cross-functional team designs and builds robust digital products."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Code2,
              title: 'Custom Software Development',
              desc: 'End-to-end engineering for web, mobile, and cloud platforms with CI/CD and best practices.',
            },
            {
              icon: Layout,
              title: 'Responsive Web Design',
              desc: 'Accessible, performant, and SEO-friendly websites that look stunning on every device.',
            },
            {
              icon: ShieldCheck,
              title: 'Intranet Systems',
              desc: 'Secure internal portals, document workflows, and knowledge bases to streamline collaboration.',
            },
            {
              icon: Network,
              title: 'IT Consultancy',
              desc: 'Strategy, audits, and roadmaps that align technology investments with business goals.',
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 text-white">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{card.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Solutions */}
      <Section
        id="solutions"
        overline="Sector Solutions"
        title="Tailored to Your Industry"
        subtitle="Modular building blocks adapted to the unique needs of your sector."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: Building2, label: 'SMEs' },
            { icon: GraduationCap, label: 'Education' },
            { icon: HeartPulse, label: 'Health' },
            { icon: Truck, label: 'Logistics' },
            { icon: Landmark, label: 'Government' },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 text-white grid place-items-center">
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">{s.label}</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">Templates and accelerators</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        overline="Our Work"
        title="Selected Projects"
        subtitle="A glimpse into solutions we’ve built and the outcomes delivered."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Smart Logistics Portal',
              img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop',
              result: 'Cut delivery times by 22% with real-time tracking and route optimization.',
            },
            {
              title: 'Healthcare Intranet',
              img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop',
              result: 'Improved information access and compliance training completion by 40%.',
            },
            {
              title: 'E-learning Platform',
              img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
              result: 'Scaled to 100k+ users with robust analytics and gamification.',
            },
          ].map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.result}</p>
                <div className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                  View case study <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        id="testimonials"
        overline="Social Proof"
        title="What Clients Say"
        subtitle="Stories from partners who’ve scaled with TechReach."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
            >
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Happy Client {i}</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">CTO, Global Co.</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                “TechReach delivered beyond expectations — excellent communication, strong engineering, and on-time delivery.”
              </p>
              <div className="mt-3 inline-flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 mr-1" /> Verified review
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        overline="Get In Touch"
        title="Contact Us"
        subtitle="Let’s talk about your project. We’ll respond within one business day."
      >
        <div className="grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={(e) => { e.preventDefault(); alert('Thanks! Your message has been recorded.'); e.currentTarget.reset(); }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Full name</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Company</label>
                <input type="text" className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Project brief</label>
                <textarea required rows={5} className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="text-xs text-neutral-500 dark:text-neutral-400">We respect your privacy. No spam, ever.</div>
                <button type="submit" className="inline-flex items-center justify-center rounded-md bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 text-sm font-semibold shadow">
                  Send message
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900">
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"><Mail className="w-5 h-5" /> info@techreachglobal.com</div>
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 mt-2"><Phone className="w-5 h-5" /> +1 (234) 567-890</div>
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 mt-2"><MapPin className="w-5 h-5" /> 100 Innovation Drive, London, UK</div>
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 mt-2"><Globe2 className="w-5 h-5" /> techreachglobal.com</div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 h-64">
              <iframe
                title="Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.679929295228!2d-0.1277589!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333333333%3A0xaaaaaaaaaaaaaaaa!2sLondon!5e0!3m2!1sen!2suk!4v1680000000000"
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
