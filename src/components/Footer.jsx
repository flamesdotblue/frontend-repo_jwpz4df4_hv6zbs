import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-transparent to-neutral-50 dark:to-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-lg font-bold text-neutral-900 dark:text-white">TechReach Global Solutions Ltd</div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
            Innovative ICT solutions: software, responsive web, and intranet systems for modern organizations.
          </p>
        </div>
        <div>
          <div className="font-semibold text-neutral-900 dark:text-white">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#about" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
            <li><a href="#services" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400">Services</a></li>
            <li><a href="#projects" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-neutral-900 dark:text-white">Newsletter</div>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">Get updates on our latest insights and case studies.</p>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Subscribed!')}} className="mt-3 flex gap-2">
            <input type="email" required placeholder="Your email" className="flex-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold">Subscribe</button>
          </form>
        </div>
        <div>
          <div className="font-semibold text-neutral-900 dark:text-white">Connect</div>
          <div className="mt-3 flex items-center gap-3">
            <a aria-label="LinkedIn" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Linkedin className="w-5 h-5"/></a>
            <a aria-label="Facebook" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Facebook className="w-5 h-5"/></a>
            <a aria-label="Instagram" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Instagram className="w-5 h-5"/></a>
            <a aria-label="X" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Twitter className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 dark:border-neutral-800 py-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
        © {year} TechReach Global Solutions Ltd. All rights reserved.
      </div>
    </footer>
  );
}
