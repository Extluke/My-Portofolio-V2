import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full border border-[#E7E7E4] bg-white/90 backdrop-blur-xs shadow-2xs select-none transition-all ${className}`}
      role="group"
      aria-label="Language selection"
    >
      {/* Bendera Indonesia */}
      <button
        type="button"
        onClick={() => setLanguage('id')}
        title="Bahasa Indonesia (ID)"
        className={`inline-flex items-center gap-1.5 transition-all cursor-pointer py-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 rounded ${
          language === 'id'
            ? 'opacity-100 font-semibold scale-[1.02]'
            : 'opacity-40 hover:opacity-75 font-normal'
        }`}
      >
        <span className="inline-flex items-center overflow-hidden rounded-[2px] border border-black/15 shadow-2xs w-4 h-2.5 sm:w-4.5 sm:h-3 shrink-0">
          <svg viewBox="0 0 3 2" className="w-full h-full block">
            <rect width="3" height="1" fill="#E70011" />
            <rect y="1" width="3" height="1" fill="#FFFFFF" />
          </svg>
        </span>
        <span className="text-[11px] font-mono tracking-tight text-zinc-800">
          ID
        </span>
      </button>

      {/* Center Toggle Switch */}
      <button
        type="button"
        role="switch"
        aria-checked={language === 'en'}
        aria-label="Ganti bahasa / Switch language"
        onClick={toggleLanguage}
        className={`relative inline-flex h-4.5 w-8 sm:h-5 sm:w-9 shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 ${
          language === 'en' ? 'bg-zinc-800' : 'bg-zinc-300 hover:bg-zinc-400/80'
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 transform rounded-full bg-white shadow-xs transition duration-200 ease-in-out ${
            language === 'en' ? 'translate-x-3.5 sm:translate-x-4' : 'translate-x-0'
          }`}
        />
      </button>

      {/* Bendera Inggris */}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        title="English (EN)"
        className={`inline-flex items-center gap-1.5 transition-all cursor-pointer py-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-black/20 rounded ${
          language === 'en'
            ? 'opacity-100 font-semibold scale-[1.02]'
            : 'opacity-40 hover:opacity-75 font-normal'
        }`}
      >
        <span className="inline-flex items-center overflow-hidden rounded-[2px] border border-black/15 shadow-2xs w-4 h-2.5 sm:w-4.5 sm:h-3 shrink-0">
          <svg viewBox="0 0 60 36" className="w-full h-full block">
            <rect width="60" height="36" fill="#012169" />
            <path d="M0 0 L60 36 M60 0 L0 36" stroke="#FFFFFF" strokeWidth="6" />
            <path d="M0 0 L25 15 M35 21 L60 36 M60 0 L35 15 M25 21 L0 36" stroke="#C8102E" strokeWidth="3" />
            <path d="M30 0 v36 M0 18 h60" stroke="#FFFFFF" strokeWidth="10" />
            <path d="M30 0 v36 M0 18 h60" stroke="#C8102E" strokeWidth="6" />
          </svg>
        </span>
        <span className="text-[11px] font-mono tracking-tight text-zinc-800">
          EN
        </span>
      </button>
    </div>
  );
}
