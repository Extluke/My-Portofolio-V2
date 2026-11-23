import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ScreenId } from '../types';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../content/translations';

interface NavbarProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

interface NavItem {
  id: string;
  label: string;
  target?: ScreenId;
  sectionId?: string;
}

export function Navbar({ activeScreen, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations.nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAV_ITEMS: NavItem[] = [
    { id: 'about', label: t.about[language], sectionId: 'about' },
    { id: 'experience', label: t.experience[language], sectionId: 'experience' },
    { id: 'projects', label: t.projects[language], sectionId: 'projects' },
    { id: 'skills', label: t.skills[language], sectionId: 'skills' },
    { id: 'credentials', label: t.credentials[language], sectionId: 'credentials' },
    { id: 'contact', label: t.contact[language], sectionId: 'contact' },
  ];

  const handleNav = (item: NavItem) => {
    setMobileOpen(false);
    if (item.target) {
      onNavigate(item.target);
      return;
    }
    if (item.sectionId) {
      if (activeScreen !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.getElementById(item.sectionId!);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(item.sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'border-b border-[#E7E7E4] bg-white/90 backdrop-blur-md shadow-xs'
        : 'border-b border-[#E7E7E4]/70 bg-[#F7F7F5]/85 backdrop-blur-sm'
    }`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex justify-between items-center gap-8 h-[72px]">
        <div className="flex items-center gap-8 lg:gap-12 min-w-0">
          <button
            type="button"
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded-md cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
          >
            <span className="text-[20px] font-bold tracking-tight text-zinc-900 whitespace-nowrap">
              Arby Nassandro
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#EAE9E4] text-zinc-700 font-medium group-hover:bg-[#dfded8] transition-colors">
              Dev
            </span>
          </button>

          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = item.target ? activeScreen === item.target : false;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item)}
                  className={`text-sm font-medium tracking-tight transition-colors duration-200 whitespace-nowrap shrink-0 py-1 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded ${
                    isActive
                      ? 'text-zinc-900 font-semibold'
                      : 'text-zinc-500 hover:text-zinc-900 nav-link-indicator'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-[22px] h-[2px] bg-black rounded-full transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <LanguageToggle />

          <button
            type="button"
            onClick={() => {
              if (activeScreen !== 'home') {
                onNavigate('home');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              } else {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-black text-white px-4 py-2 rounded-full font-medium transition-all hover:bg-zinc-800 hover-lift btn-press text-[14px] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 cursor-pointer shadow-xs"
          >
            {t.contactMe[language]}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? (language === 'id' ? 'Tutup menu navigasi' : 'Close navigation menu') : (language === 'id' ? 'Buka menu navigasi' : 'Open navigation menu')}
            className="md:hidden w-10 h-10 rounded-full border border-[#E7E7E4] bg-[#FCFCFB] flex items-center justify-center text-zinc-900"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E7E7E4] bg-[#F7F7F5]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => {
              onNavigate('home');
              setMobileOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activeScreen === 'home'
                ? 'bg-[#F3F2EF] text-black'
                : 'text-[#6B6B6B] hover:text-black'
            }`}
          >
            {t.homeHero[language]}
          </button>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item)}
              className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                (item.target && activeScreen === item.target)
                  ? 'bg-[#F3F2EF] text-black'
                  : 'text-[#6B6B6B] hover:text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 mt-1 border-t border-[#E7E7E4] flex items-center justify-between px-3">
            <span className="text-xs font-mono text-[#6B6B6B]">{t.languageLabel[language]}</span>
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
