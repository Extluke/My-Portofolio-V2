import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { ScreenId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../content/translations';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { language } = useLanguage();
  const f = translations.footer;
  const handleScrollTo = (sectionId: string) => {
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-[#E7E7E4] py-16 md:py-20 mt-auto relative isolate">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* TOP LAYER: 3 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#E7E7E4]">
          
          {/* COL 1: BRAND & MISSION (5 COLS) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-2xl tracking-tight text-[#111111]">
                Arby Nassandro
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#111111] text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                Dev
              </span>
            </div>

            <p className="font-script text-xl text-[#6B6B6B] leading-tight">
              {f.quote[language]}
            </p>

            <p className="text-xs text-[#6B6B6B] leading-relaxed max-w-sm">
              {f.bio[language]}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono text-[#6B6B6B]">
                {f.status[language]}
              </span>
            </div>
          </div>

          {/* COL 2: NAVIGATION (3 COLS) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#8A8179] font-semibold">
              NAVIGATION
            </p>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('hero')}
                  className="text-[#6B6B6B] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  01. Home / Intro
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('about')}
                  className="text-[#6B6B6B] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  02. About & Education
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('experience')}
                  className="text-[#6B6B6B] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  03. Professional Experience
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('projects')}
                  className="text-[#6B6B6B] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  04. Selected Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('skills')}
                  className="text-[#6B6B6B] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  05. Skills & Toolsets
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('credentials')}
                  className="text-[#6B6B6B] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  06. Accreditations
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('contact')}
                  className="text-[#6B6B6B] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  07. Connect & Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('styleguide')}
                  className="text-[#6B6B6B] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  08. Style Guide System
                </button>
              </li>
            </ul>
          </div>

          {/* COL 3: DIRECT CHANNELS (4 COLS) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#8A8179] font-semibold">
              DIRECT CHANNELS
            </p>
            <div className="space-y-2.5 text-xs font-mono">
              <a
                href="mailto:arbynassandro25@gmail.com"
                className="flex items-center justify-between p-2.5 rounded-xl border border-[#E7E7E4] bg-[#FCFCFB] hover:border-black/30 hover:bg-white transition-all text-[#111111] group hover-lift"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#6B6B6B] group-hover:text-black transition-colors" />
                  <span className="truncate">arbynassandro25@gmail.com</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6B6B] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>

              <a
                href="https://wa.me/6288988396127"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl border border-[#E7E7E4] bg-[#FCFCFB] hover:border-black/30 hover:bg-white transition-all text-[#111111] group hover-lift"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#6B6B6B] group-hover:text-black transition-colors" />
                  <span>WhatsApp: +62 889-8839-6127</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6B6B] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://www.linkedin.com/in/arby-nassandro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-[#E7E7E4] bg-[#FCFCFB] hover:border-black/30 hover:bg-white transition-all text-[#111111] group hover-lift"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#6B6B6B] group-hover:text-black transition-colors" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6B6B6B]" />
                </a>

                <a
                  href="https://github.com/Extluke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-[#E7E7E4] bg-[#FCFCFB] hover:border-black/30 hover:bg-white transition-all text-[#111111] group hover-lift"
                >
                  <Github className="w-3.5 h-3.5 text-[#6B6B6B] group-hover:text-black transition-colors" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6B6B6B]" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LAYER: COPYRIGHT & BACK TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B6B6B]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© 2026 Arby Nassandro.</span>
            <span className="hidden sm:inline">·</span>
            <span>{f.location[language]}</span>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 font-semibold text-[#111111] hover:text-black transition-colors group cursor-pointer hover-lift btn-press py-1 px-2.5 rounded-lg hover:bg-black/5"
          >
            <span>{f.backToTop[language]}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
