import { useEffect, useState } from 'react';
import { Sun, Moon, Phone, Mail, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('tr-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('tr-theme', theme);
  }, [theme]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            {/* Logo: tries to load /logo.png; falls back to text mark */}
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 ring-2 ring-white/60 dark:ring-neutral-800 overflow-hidden">
              <img
                src="/logo.png"
                alt="TechReach Global Solutions Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="absolute inset-0 grid place-items-center text-white font-bold">TR</span>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
                TechReach Global Solutions Ltd
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Empowering Digital Innovation
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:info@techreachglobal.com" className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail className="w-4 h-4" />
              <span className="hidden lg:inline">info@techreachglobal.com</span>
            </a>
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+1 (234) 567-890</span>
            </a>
            <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700" />
            <a aria-label="LinkedIn" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Linkedin className="w-5 h-5"/></a>
            <a aria-label="Facebook" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Facebook className="w-5 h-5"/></a>
            <a aria-label="Instagram" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Instagram className="w-5 h-5"/></a>
            <a aria-label="X" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Twitter className="w-5 h-5"/></a>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="ml-2 inline-flex items-center justify-center w-9 h-9 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-neutral-700" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-neutral-700" />}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-neutral-800 dark:bg-neutral-200" />
                <span className="block w-5 h-0.5 bg-neutral-800 dark:bg-neutral-200" />
                <span className="block w-5 h-0.5 bg-neutral-800 dark:bg-neutral-200" />
              </div>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-3 border-t border-neutral-200 dark:border-neutral-800">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-2 py-2 rounded-md text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a aria-label="LinkedIn" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Linkedin className="w-5 h-5"/></a>
                <a aria-label="Facebook" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Facebook className="w-5 h-5"/></a>
                <a aria-label="Instagram" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Instagram className="w-5 h-5"/></a>
                <a aria-label="X" href="#" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"><Twitter className="w-5 h-5"/></a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
