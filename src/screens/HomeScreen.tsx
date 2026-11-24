import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  Download,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Compass,
  Zap,
  BookOpen,
  ArrowRight,
  FolderGit2,
  ExternalLink,
  Layers,
  FileText,
  Terminal,
  Palette,
  Award,
  X,
  ShieldCheck,
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Copy,
  Check,
  MessageSquare,
  ArrowUp,
  MapPin,
  TrendingUp,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Lock,
} from 'lucide-react';
import { ScreenId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../content/translations';
import { getProjects, getExperiences, getCredentials } from '../content/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const tHero = translations.hero;
  const tAbout = translations.about;
  const tExp = translations.experience;
  const tProj = translations.projects;
  const tSkills = translations.skillsSection;
  const tCreds = translations.credentialsSection;
  const tContact = translations.contactSection;
  const tGallery = translations.galleryModal;

  const projectsList = getProjects(language);
  const experiencesList = getExperiences(language);
  const credsData = getCredentials(language);

  // Experience category filter state
  const [experienceFilter, setExperienceFilter] = useState<'all' | 'corporate' | 'tech'>('all');

  // Project category filter state
  const [projectCategory, setProjectCategory] = useState<'all' | 'ai' | 'payment'>('all');

  // Initialize viewport scroll reveal animations
  useScrollReveal([language, projectCategory, experienceFilter]);

  // Project detail modal state & screenshots gallery
  const [selectedProject, setSelectedProject] = useState<{
    id?: string;
    title: string;
    category: string;
    period: string;
    summary: string;
    keyOutcome: string;
    tools: string[];
    deliverables: string[];
    thumbnailImage?: string;
    screenshots?: { url: string; caption: string }[];
    githubUrl?: string;
    isPrivate?: boolean;
  } | null>(null);

  const screenshotsScrollRef = useRef<HTMLDivElement>(null);

  const scrollScreenshots = (direction: 'left' | 'right') => {
    if (screenshotsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      screenshotsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Certificate gallery modal state
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedCredential, setSelectedCredential] = useState<{
    id: string;
    title: string;
    issuer: string;
    validity: string;
    regNumber: string;
    badge: string;
    status: string;
    competencies: string[];
    description: string;
    hasVerifyLink: boolean;
    verifyUrl?: string;
    imageUrl?: string;
  } | null>(null);

  // Contact section state
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [contactTopic, setContactTopic] = useState('Applied AI & IoT');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopy = (field: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    const subjek = encodeURIComponent(
      isEn
        ? `Internship Inquiry: [${contactTopic}] Message from ${formData.name}`
        : `Magang: [${contactTopic}] Pesan dari ${formData.name}`
    );
    const isi = encodeURIComponent(
      isEn
        ? `${formData.message}\n\nTopic: ${contactTopic}\nSender Email: ${formData.email}\nRegards,\n${formData.name}`
        : `${formData.message}\n\nTopik: ${contactTopic}\nEmail Pengirim: ${formData.email}\nSalam,\n${formData.name}`
    );
    window.location.href = `mailto:arbynassandro25@gmail.com?subject=${subjek}&body=${isi}`;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="pt-[72px] relative overflow-hidden bg-white">
      {/* SECTION 1: HERO SECTION — TONE TERANG (PURE WHITE #FFFFFF) */}
      <section id="hero" className="relative isolate border-b border-[#E7E7E4] bg-white min-h-[calc(100vh-72px)] flex flex-col justify-between pt-8 md:pt-12">

        {/* Background Gradient Mesh Orbs (Persis Sesuai Permintaan User: Terletak di Hero Section) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden">
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-8 w-full my-auto py-6 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* SEBELAH KIRI: 3 LAPISAN TIPOGRAFI & TOMBOL */}
            <div className="lg:col-span-7 flex flex-col items-start relative isolate">

              {/* Background Orbs Glow di Belakang Tipografi Kiri */}
              <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none -z-10 opacity-75">
                <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />
                <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
              </div>

              {/* Lapisan 1: Greeting Script / Cursive */}
              <div className="flex items-center gap-2 mb-3 reveal-init stagger-1">
                <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#111111] tracking-wide font-semibold">
                  {tHero.greeting[language]}
                </span>
                <span className="text-2xl sm:text-3xl animate-bounce"></span>
              </div>

              {/* Lapisan 2: Teks yang Sedikit Besar (Display Headline - 100% Mengikuti Style Guide: Geist / font-sans, font-semibold, tracking-[-0.04em], leading-[1.05]) */}
              <h1 className="text-4xl sm:text-5xl md:text-[54px] lg:text-[66px] font-semibold tracking-[-0.04em] text-[#111111] leading-[1.05] mb-6 reveal-init stagger-2">
                {tHero.headlinePart1[language]}<span className="text-[#6B6B6B]">{tHero.headlineAccent1[language]}</span>
                {tHero.headlinePart2[language]}<span className="text-[#6B6B6B]">{tHero.headlineAccent2[language]}</span>
                {tHero.headlinePart3[language]}
              </h1>

              {/* Sub-Badges / Pills Row (Style Guide Tokens: #FDF8F8 / #E7E7E4) */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6 reveal-init stagger-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E7E7E4] bg-[#FDF8F8]/85 backdrop-blur-sm text-xs font-medium text-[#111111] shadow-2xs hover-lift transition-transform">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{tHero.badgeRole[language]}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E7E7E4] bg-[#FDF8F8]/85 backdrop-blur-sm text-xs font-medium text-[#6B6B6B] hover-lift transition-transform">
                  <span>{tHero.badgeEdu[language]}</span>
                </div>
              </div>

              {/* Lapisan 3: Teks Isi (Paragraf Deskripsi) */}
              <p className="text-base sm:text-[18px] text-[#6B6B6B] leading-[1.6] tracking-[-0.01em] max-w-xl mb-8 reveal-init stagger-4">
                {tHero.summary[language]}
              </p>
              {/* Tombol Aksi: View My Work, Download CV, dan A Little About Me */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto reveal-init stagger-5">
                {/* Button View My Work (Solid Dark Button) */}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('projects') || document.querySelector('section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black text-white px-7 py-3.5 rounded-full font-medium text-xs sm:text-sm transition-all hover:bg-zinc-800 hover-lift btn-press shadow-sm uppercase tracking-wider cursor-pointer"
                >
                  <span>{tHero.btnProjects[language]}</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                {/* Button Download CV (Outline Button Style Guide - Dynamic ID / EN) */}
                <a
                  href={language === 'en' ? '/CV_Arby_Nassandro_AI_Engineer_EN.pdf' : '/CV_Arby_Nassandro_AI_Engineer_ID.pdf'}
                  download={language === 'en' ? 'CV_Arby_Nassandro_AI_Engineer_EN.pdf' : 'CV_Arby_Nassandro_AI_Engineer_ID.pdf'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent border border-[#747878] text-[#111111] px-6 py-3.5 rounded-full font-medium text-xs sm:text-sm transition-all hover:bg-black/5 hover-lift btn-press uppercase tracking-wider cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{tHero.btnCv[language]}</span>
                </a>

                {/* Teks yang diarahkan ke About */}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('experience');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#111111] hover:text-[#6B6B6B] underline underline-offset-4 transition-colors py-2 cursor-pointer hover-lift btn-press"
                >
                  <span>{tHero.btnExp[language]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* SEBELAH KANAN: Frame Foto Arby Nassandro & Floating Badges */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full relative">

              {/* Background Orbs Glow tepat di Belakang Kartu Foto Arby */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />
                <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
              </div>

              <div className="relative z-10 w-full max-w-[420px] aspect-[4/5] rounded-3xl p-3 sm:p-4 bg-[#FCFCFB]/90 backdrop-blur-sm border border-[#E7E7E4] shadow-[0_20px_50px_-16px_rgba(0,0,0,0.06)] overflow-hidden group hover:border-zinc-300 transition-all reveal-scale stagger-2 hover-lift">

                {/* Background Gradient Mesh Orbs inside Card (Sesuai Style Guide) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none">
                  <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />
                  <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
                </div>

                {/* Inner Photo Frame */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#F3F2EF] border border-[#E7E7E4] z-10">
                  <img
                    src="/profile/foto-1.png"
                    alt="Arby Nassandro"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Floating Badge 1: Top Right */}
                <div className="z-20 absolute top-5 right-5 sm:top-6 sm:right-6 bg-[#FDF8F8]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E7E7E4] text-xs font-medium text-[#111111] shadow-xs flex items-center gap-1.5 animate-float-1 hover-lift">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{isEn ? 'Open for internship' : 'Terbuka untuk magang'}</span>
                </div>

                {/* Floating Badge 2: Bottom Left Academic/Tech Excellence Card */}
                <div className="z-20 absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E7E7E4] shadow-md max-w-[210px] animate-float-2 hover-lift">
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#6B6B6B]">
                    {isEn ? 'Education' : 'Pendidikan'}
                  </div>
                  <div className="text-xs font-bold text-[#111111] mt-0.5">
                    {tAbout.edu1Title[language]}
                  </div>
                </div>

                {/* Floating Badge 3: Bottom Right Sticker (Rotated) */}
                <div className="z-20 absolute -bottom-3 -right-2 sm:-right-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#E7E7E4] shadow-lg flex items-center gap-1.5 rotate-[3deg] transition-transform hover:rotate-0 animate-float-3 hover-lift">
                  <span className="font-script text-sm sm:text-base text-[#111111] font-semibold">
                    {isEn ? 'Ready for internship!' : 'Siap untuk peluang magang!'}
                  </span>
                  <span className="text-xs">✨</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* HERO BOTTOM STATUS STRIP (Sesuai Referensi Gambar User) */}
        <div className="w-full border-t border-[#E7E7E4] py-4 sm:py-5 reveal-init stagger-5">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between text-xs sm:text-sm font-mono text-[#6B6B6B]">
            {/* Left: Location indicator */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-700/80 shrink-0" />
              <span className="inline-flex items-center gap-2">
                <span>{tHero.location[language]}</span>
                <span className="inline-flex items-center overflow-hidden rounded-[2px] border border-black/15 shadow-xs w-4 h-2.5" title="Indonesia">
                  <svg viewBox="0 0 3 2" className="w-full h-full">
                    <rect width="3" height="1" fill="#E70011" />
                    <rect y="1" width="3" height="1" fill="#FFFFFF" />
                  </svg>
                </span>
              </span>
            </div>

            {/* Right: Scroll to Discover */}
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#111111] transition-colors group cursor-pointer"
            >
              <span>{tHero.scrollDown[language]}</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT ME — TONE AGAK GELAP (ZINC-50 #FAFAFA SESUAI RITME DUA WARNA & STYLE GUIDE) */}
      <section id="about" className="w-full bg-[#FAFAFA] border-b border-[#E7E7E4] py-20 md:py-28 relative isolate">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 reveal-init stagger-1">
            <div>
              <span className="text-[12px] font-mono font-semibold text-[#6B6B6B] uppercase tracking-[0.12em] block mb-2">
                {tAbout.tag[language]}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#111111] leading-tight">
                {tAbout.title[language]}
                <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#6B6B6B] font-normal tracking-normal">
                  {tAbout.titleScript[language]}
                </span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-md md:text-right">
              {tAbout.subtitle[language]}
            </p>
          </div>

          {/* Grid Layout: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* SEBELAH KIRI: Foto & Riwayat Pendidikan (5 Kolom) */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Card 1: Graduation/Professional Photo */}
              <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E7E7E4] shadow-xs group hover:border-zinc-300 transition-all reveal-init stagger-2 hover-lift">
                <div className="relative w-full aspect-[4/3.8] rounded-2xl overflow-hidden bg-[#F3F2EF] border border-[#E7E7E4] mb-4">
                  <img
                    src="/profile/foto-2.png"
                    alt="Arby Nassandro Academic Journey"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F7F5] border border-[#E7E7E4] text-xs font-mono">
                  <span className="text-[#6B6B6B]">{tAbout.gpaLabel[language]}</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E7E7E4] font-semibold text-[#111111]">
                    3,68 / 4.00
                  </span>
                </div>
              </div>

              {/* Card 2: Formal Education Timeline */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7E4] shadow-xs hover:border-zinc-300 transition-all reveal-init stagger-3 hover-lift">
                <div className="flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-[#6B6B6B] mb-6">
                  <BookOpen className="w-4 h-4 text-[#111111]" />
                  <span>{tAbout.formalEdu[language]}</span>
                </div>

                <div className="space-y-6 relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#E7E7E4]">
                  {/* Entry 1 */}
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-black bg-white" />
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm sm:text-[15px] font-semibold text-[#111111]">
                        {tAbout.edu1Title[language]}
                      </h4>
                      <span className="text-[11px] font-mono text-[#6B6B6B] shrink-0">
                        {tAbout.edu1Period[language]}
                      </span>
                    </div>
                    <div className="text-xs text-[#6B6B6B] font-medium mb-1.5">
                      {tAbout.edu1School[language]}
                    </div>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">
                      {tAbout.edu1Desc[language]}
                    </p>
                  </div>

                  {/* Entry 2 */}
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-zinc-400 bg-white" />
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm sm:text-[15px] font-semibold text-[#111111]">
                        {tAbout.edu2Title[language]}
                      </h4>
                      <span className="text-[11px] font-mono text-[#6B6B6B] shrink-0">
                        {tAbout.edu2Period[language]}
                      </span>
                    </div>
                    <div className="text-xs text-[#6B6B6B] font-medium mb-1.5">
                      {tAbout.edu2School[language]}
                    </div>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">
                      {tAbout.edu2Desc[language]}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* SEBELAH KANAN: Big Bio & Core Capabilities (7 Kolom) */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E7E7E4] shadow-xs hover:border-zinc-300 transition-all reveal-init stagger-2 hover-lift">

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#111111] leading-tight mb-5">
                  {tAbout.rightHeadline[language]}
                </h3>

                {/* Paragraphs */}
                <div className="text-[15px] sm:text-[16px] text-[#6B6B6B] leading-[1.7] space-y-4 mb-8">
                  <p>
                    {tAbout.p1[language]}
                  </p>
                  <p>
                    {tAbout.p2[language]}
                  </p>
                </div>

                <div className="w-full h-px bg-[#E7E7E4] my-7" />

                {/* Sub-Section 1: Key Areas of Professional Interest */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#111111] uppercase tracking-wider mb-4">
                    <Compass className="w-4 h-4 text-black" />
                    <span>{tAbout.focusLabel[language]}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'AI Automation Engineer',
                      'Implementation / Integration Engineer',
                      'Solutions Engineer',
                      'Forward-Deployed Engineer',
                      'Applied AI & System Integration',
                      'Edge AI & IoT Engineering',
                    ].map((area) => (
                      <div
                        key={area}
                        className="p-3.5 rounded-xl border border-[#E7E7E4] bg-[#FCFCFB] flex items-center gap-3 text-xs sm:text-[13px] font-medium text-[#111111] hover:border-black/30 transition-all hover-lift"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-Section 2: Core Professional Strengths */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#111111] uppercase tracking-wider mb-3">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>{tAbout.skillsLabel[language]}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      'Midtrans Snap & Webhook Idempotency',
                      'YOLOv8 & OpenCV Computer Vision',
                      'ESP32 Firmware & Telemetri Sensor',
                      'Laravel 10 & 12 (PHP)',
                      'Spring Boot 3 (Java 21)',
                      'Flask (Python) & SQLite / MySQL',
                      'Escrow Settlement & Multi-Role RBAC',
                      'FMCG Distribution & Sales Operations',
                      'WebSocket (Pusher, STOMP)',
                    ].map((strength) => (
                      <span
                        key={strength}
                        className="px-3.5 py-1.5 rounded-full border border-[#E7E7E4] bg-[#F7F7F5] text-xs font-medium text-[#111111] hover:bg-[#FDF8F8] hover:border-black/30 transition-all hover-lift"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2.5: PROFESSIONAL EXPERIENCE (TWO-TONE RHYTHM: BG-WHITE) */}
      <section id="experience" className="w-full bg-white border-b border-[#E7E7E4] py-20 md:py-28 relative isolate overflow-hidden">
        {/* Background Gradient Mesh Orbs (Left Side Accent in Experience Section) */}
        <div className="absolute top-1/3 left-4 md:left-14 flex items-center justify-center pointer-events-none -z-10 opacity-75">
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
        </div>
        <div className="absolute bottom-1/4 left-8 md:left-24 flex items-center justify-center pointer-events-none -z-10 opacity-55">
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-8">

          {/* SECTION HEADER (SESUAI REFERENSI GAMBAR USER) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20 reveal-init stagger-1">
            <div>
              <span className="text-[11px] font-mono font-semibold text-[#6B6B6B] uppercase tracking-wider block mb-2">
                {tExp.tag[language]}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111111] tracking-[-0.04em] leading-[1.1]">
                {tExp.title[language]}
                <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#6B6B6B] font-normal tracking-normal">
                  {tExp.titleScript[language]}
                </span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed max-w-md md:text-right font-sans">
              {tExp.subtitle[language]}
            </p>
          </div>

          {/* TIMELINE POINT-TO-POINT CONTAINER */}
          <div className="relative">
            {/* The continuous vertical timeline line */}
            <div className="hidden md:block absolute left-[180px] lg:left-[210px] top-6 bottom-6 w-px bg-gradient-to-b from-[#E7E7E4] via-[#111111]/30 to-[#E7E7E4] animate-timeline-pulse" />

            <div className="space-y-12 md:space-y-16">
              {experiencesList.map((exp) => (
                <div
                  key={exp.id}
                  className="relative flex flex-col md:flex-row items-start gap-4 md:gap-10 group reveal-slide-left stagger-2"
                >
                  {/* Left Column: Date Range and Organization (Desktop) */}
                  <div className="md:w-[180px] lg:w-[210px] shrink-0 md:text-right md:pr-8 relative">
                    <div className="font-mono text-xs sm:text-[13px] font-bold text-[#111111] leading-tight uppercase tracking-tight">
                      <div>{exp.startDate}</div>
                      <div>{exp.endDate}</div>
                    </div>
                    <p className="font-mono text-[10px] text-[#8A8179] mt-1.5 leading-snug">
                      {exp.subOrg}
                    </p>

                    {/* Timeline Point-to-Point Node on the Line (Desktop) */}
                    <div className="hidden md:flex absolute -right-[8px] top-1.5 w-4 h-4 rounded-full border-2 border-[#111111] bg-white items-center justify-center z-10 shadow-xs group-hover:scale-125 transition-transform duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    </div>
                  </div>

                  {/* Mobile Date Header */}
                  <div className="flex md:hidden items-center gap-2.5 w-full pb-2 border-b border-[#E7E7E4]">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#111111] bg-white flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#111111]">
                      {exp.startDate} – {exp.endDate}
                    </span>
                    <span className="text-[11px] font-mono text-[#8A8179] truncate">
                      · {exp.subOrg}
                    </span>
                  </div>

                  {/* Right Column: Detailed Experience Card */}
                  <div className="flex-1 w-full bg-[#FCFCFB] rounded-3xl border border-[#E7E7E4] p-6 sm:p-8 hover-lift hover:border-black/30 transition-all">

                    {/* Card Top: Division & Location */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#6B6B6B] pb-1">
                      <span className="uppercase tracking-wider font-semibold text-[11px] text-[#444444]">
                        {exp.division}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-[#8A8179]">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mt-2 mb-3">
                      {exp.role}
                    </h3>

                    {/* Summary Description */}
                    <p className="text-sm text-[#555555] leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Key Responsibilities & Deliverables Sub-Box */}
                    <div className="p-5 rounded-2xl bg-[#F8F7F3] border border-[#EBE8DF] my-5 space-y-3">
                      <div className="flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6B6B6B] mb-2.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#111111]" />
                        <span>{tExp.responsibilitiesLabel[language]}</span>
                      </div>

                      <ul className="space-y-2.5 text-xs sm:text-sm text-[#444444]">
                        {exp.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#8A8179] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer: Focus Tools & Standards */}
                    <div className="pt-4 border-t border-[#E7E7E4] flex flex-wrap items-center gap-3 text-xs font-mono text-[#6B6B6B]">
                      <span className="font-semibold text-[#111111]">{tExp.focusToolsLabel[language]}</span>
                      <span className="tracking-wide text-[#333333]">{exp.tools}</span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: PROJECTS & CASE STUDIES — TONE AGAK GELAP (#FAFAFA SESUAI RITME DUA WARNA) */}
      <section id="projects" className="w-full bg-[#FAFAFA] border-b border-[#E7E7E4] py-20 md:py-28 relative isolate overflow-hidden">
        {/* Background Gradient Mesh Orbs (Accent in Projects Section) */}
        <div className="absolute top-1/4 left-10 md:left-24 flex items-center justify-center pointer-events-none -z-10 opacity-70">
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
        </div>
        <div className="absolute bottom-24 right-10 md:right-28 flex items-center justify-center pointer-events-none -z-10 opacity-55">
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-8">

          {/* Section Header with Category Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 reveal-init stagger-1">
            <div>
              <span className="text-[12px] font-mono font-semibold text-[#6B6B6B] uppercase tracking-[0.12em] block mb-2">
                {tProj.tag[language]}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#111111] leading-tight">
                {tProj.title[language]}
                <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#6B6B6B] font-normal tracking-normal">
                  {tProj.titleScript[language]}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-2xl mt-3">
                {tProj.subtitle[language]}
              </p>
            </div>

            {/* Segmented Filter Control (Style Guide Tokens) */}
            <div className="inline-flex items-center bg-[#F3F2EF] p-1 rounded-full border border-[#E7E7E4] shrink-0 self-start md:self-end">
              <button
                type="button"
                onClick={() => setProjectCategory('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer btn-press ${projectCategory === 'all'
                  ? 'bg-white text-black shadow-xs font-semibold'
                  : 'text-[#6B6B6B] hover:text-black'
                  }`}
              >
                {tProj.filterAll[language]}
              </button>
              <button
                type="button"
                onClick={() => setProjectCategory('ai')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer btn-press ${projectCategory === 'ai'
                  ? 'bg-white text-black shadow-xs font-semibold'
                  : 'text-[#6B6B6B] hover:text-black'
                  }`}
              >
                {tProj.filterAi[language]}
              </button>
              <button
                type="button"
                onClick={() => setProjectCategory('payment')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer btn-press ${projectCategory === 'payment'
                  ? 'bg-white text-black shadow-xs font-semibold'
                  : 'text-[#6B6B6B] hover:text-black'
                  }`}
              >
                {tProj.filterPayment[language]}
              </button>
            </div>
          </div>

          {/* Projects 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsList
              .filter((p) => projectCategory === 'all' || p.categoryType === projectCategory)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl border border-[#E7E7E4] overflow-hidden hover:border-zinc-400 transition-all shadow-xs flex flex-col group reveal-init stagger-2 hover-lift"
                >
                  {/* Banner / Visual Frame with Thumbnail Image Support */}
                  <div
                    onClick={() =>
                      setSelectedProject({
                        ...project.modalDetails,
                        id: project.id,
                        thumbnailImage: project.thumbnailImage,
                        screenshots: project.screenshots,
                        githubUrl: project.githubUrl,
                        isPrivate: project.isPrivate,
                      })
                    }
                    className="relative w-full h-[220px] sm:h-[250px] bg-[#F7F7F5] border-b border-[#E7E7E4] flex items-center justify-center overflow-hidden cursor-pointer group/thumb select-none"
                  >
                    {/* Branded fallback banner underneath (visible while loading or if image error) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#FAF8F5] to-[#F2EFE9] z-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-[#E7E7E4] shadow-xs flex items-center justify-center p-3 transition-transform duration-500 group-hover/thumb:scale-105">
                        <div className="text-center font-bold text-base sm:text-lg tracking-tight text-[#111111] leading-tight">
                          <span>{project.bannerBrand}</span>
                        </div>
                      </div>
                      <span className="mt-2.5 text-[11px] font-mono text-[#6B6B6B] tracking-wider uppercase text-center px-4">
                        {project.bannerSub}
                      </span>
                    </div>

                    {/* Actual Thumbnail Image rendered on top */}
                    <img
                      src={project.thumbnailImage}
                      alt={project.title}
                      className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />

                    {/* Status Badge */}
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm border border-[#E7E7E4] text-[11px] font-mono font-medium text-[#111111] shadow-2xs z-20">
                      {project.statusTag}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6B6B6B]">
                          {project.categoryLabel}
                        </span>
                        {project.badge && (
                          <span className={`px-2 py-0.5 rounded-full border text-[10px] font-mono font-semibold ${project.badgeColor}`}>
                            {project.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-[#6B6B6B]">
                        {project.period}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-[#6B6B6B] mb-2">
                      {project.role}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-[#111111] leading-snug mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">
                      {project.problem}
                    </p>

                    {/* Key Outcome Box */}
                    <div className="p-3.5 rounded-2xl bg-[#F7F7F5] border border-[#E7E7E4] mb-6">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#6B6B6B] mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{tProj.keyOutcomeLabel[language]}</span>
                      </div>
                      <div className="text-xs sm:text-[13px] font-semibold text-[#111111]">
                        {project.keyOutcome}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-[#E7E7E4] flex items-center justify-between gap-4 mt-auto">
                      <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-[#6B6B6B]">
                        {project.toolsSummary.map((tool, tIdx) => (
                          <span key={tIdx} className="flex items-center gap-1">
                            <span>{tool}</span>
                            {tIdx < project.toolsSummary.length - 1 && <span>·</span>}
                          </span>
                        ))}
                        {project.toolsSummaryExtra && (
                          <span className="text-[10px] text-zinc-400">{project.toolsSummaryExtra}</span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-full border border-[#E7E7E4] hover:border-black text-[#111111] hover:bg-[#F7F7F5] transition-all"
                            title={tProj.openRepoTitle[language]}
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span
                            className="p-2 rounded-full border border-dashed border-[#E7E7E4] text-[#8A8179]"
                            title={tProj.privateRepo[language]}
                          >
                            <Lock className="w-3.5 h-3.5" />
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            setSelectedProject({
                              ...project.modalDetails,
                              id: project.id,
                              thumbnailImage: project.thumbnailImage,
                              screenshots: project.screenshots,
                              githubUrl: project.githubUrl,
                              isPrivate: project.isPrivate,
                            })
                          }
                          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-black transition-colors shrink-0 group-hover:translate-x-0.5 cursor-pointer"
                        >
                          <span>{tProj.exploreCaseStudy[language]}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: SKILLS & CERTIFICATIONS — TONE AGAK GELAP (ZINC-50 #FAFAFA SESUAI RITME 2 WARNA & STYLE GUIDE) */}
      <section id="skills" className="w-full bg-white border-b border-[#E7E7E4] py-20 md:py-28 relative isolate">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 reveal-init stagger-1">
            <div>
              <span className="text-[12px] font-mono font-semibold text-[#6B6B6B] uppercase tracking-[0.12em] block mb-2">
                {tSkills.tag[language]}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#111111] leading-tight">
                {tSkills.title[language]}
                <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#6B6B6B] font-normal tracking-normal">
                  {tSkills.titleScript[language]}
                </span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-md md:text-right">
              {tSkills.subtitle[language]}
            </p>
          </div>

          {/* Top 3 Skill Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

            {/* CARD 1: Integrasi dan Pembayaran */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7E4] shadow-xs hover:border-zinc-300 transition-all flex flex-col reveal-init stagger-2 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#111111]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#111111]">
                    {tSkills.card1Title[language]}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6B6B] block">
                    {tSkills.card1Badge[language]}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-[#E7E7E4] mb-5" />

              <div className="space-y-3.5">
                {[
                  'Midtrans Snap & Webhook Idempotency',
                  'Verifikasi Signature SHA-512',
                  'Escrow Settlement (Split 90/10)',
                  'REST API & WebSocket (STOMP / Pusher)',
                  'Role-Based Access Control (RBAC)',
                  'Spring Security & Hexagonal Architecture',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2E2825]">
                    <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 2: AI dan IoT */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7E4] shadow-xs hover:border-zinc-300 transition-all flex flex-col reveal-init stagger-3 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center shrink-0 font-mono font-bold text-sm text-[#111111]">
                  &gt;_
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#111111]">
                    {tSkills.card2Title[language]}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6B6B] block">
                    {tSkills.card2Badge[language]}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-[#E7E7E4] mb-5" />

              <div className="space-y-3.5">
                {[
                  'YOLOv8 & OpenCV Computer Vision',
                  'MediaPipe & DeepSORT Object Tracking',
                  'ESP32 (C++) Microcontroller Firmware',
                  'Sensor Telemetri (DHT22, MQ Gas, Debu)',
                  'Watchdog Timer & Failover Offline 65s',
                  'Dual-Model Chained Disease Detection',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2E2825]">
                    <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 3: Backend & Basis Data */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7E4] shadow-xs hover:border-zinc-300 transition-all flex flex-col reveal-init stagger-4 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center shrink-0">
                  <Palette className="w-5 h-5 text-[#111111]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#111111]">
                    {tSkills.card3Title[language]}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6B6B] block">
                    {tSkills.card3Badge[language]}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-[#E7E7E4] mb-5" />

              <div className="space-y-3.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2E2825]">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>Laravel 10 & 12 (PHP)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2E2825]">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>Spring Boot 3 (Java 21)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2E2825]">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>Flask (Python Microservices)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2E2825]">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>MySQL Database Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2E2825]">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>SQLite & Auto-Archive CSV</span>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2: Field Experience Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7E4] shadow-xs hover:border-zinc-300 transition-all flex flex-col reveal-init stagger-3 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#111111]">
                    {tSkills.card4Title[language]}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6B6B] block">
                    {tSkills.card4Badge[language]}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-[#E7E7E4] mb-5" />

              <div className="space-y-3.5">
                {tSkills.card4Items.map((item) => (
                  <div key={item.id} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2E2825]">
                    <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                    <span>{item[language]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Bottom Banner - Accredited Professional Certifications */}
          <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7E4] shadow-xs hover:border-zinc-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 reveal-scale stagger-2 hover-lift relative overflow-hidden group">
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-black/[0.03] to-transparent pointer-events-none" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#111111]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#111111] mb-1">
                  {tSkills.bannerTitle[language]}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] max-w-2xl leading-relaxed">
                  {tSkills.bannerDesc[language]}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('credentials');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setCertModalOpen(true);
                }
              }}
              className="bg-black text-white px-6 py-3.5 rounded-full font-medium text-xs sm:text-sm transition-all hover:bg-zinc-800 active:scale-[0.98] hover-lift btn-press shadow-xs uppercase tracking-wider shrink-0 flex items-center gap-2 cursor-pointer relative z-10"
            >
              <span>{tSkills.bannerBtn[language]}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* CERTIFICATE GALLERY MODAL */}
      {certModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300">
          <div className="bg-white rounded-3xl border border-[#E7E7E4] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-modal-pop">
            <div className="flex items-center justify-between pb-4 border-b border-[#E7E7E4] mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#111111]">
                    {tGallery.title[language]}
                  </h4>
                  <span className="text-xs font-mono text-[#6B6B6B]">
                    {tGallery.sub[language]}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCertModalOpen(false)}
                className="w-9 h-9 rounded-full border border-[#E7E7E4] hover:bg-[#F7F7F5] flex items-center justify-center text-zinc-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {tGallery.items.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl border border-[#E7E7E4] bg-[#FCFCFB] hover:border-black/30 transition-all flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-semibold uppercase text-[#6B6B6B]">
                      {cert.issuer[language]}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-semibold">
                      {cert.badge[language]}
                    </span>
                  </div>
                  <h5 className="text-base font-semibold text-[#111111]">
                    {cert.title[language]}
                  </h5>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    {cert.desc[language]}
                  </p>
                  <div className="text-[11px] font-mono text-[#8A8179] pt-2 border-t border-[#E7E7E4]">
                    {cert.date[language]}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E7E7E4] flex justify-end">
              <button
                type="button"
                onClick={() => setCertModalOpen(false)}
                className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                {tGallery.close[language]}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: CERTIFICATIONS & CREDENTIALS (TWO-TONE RHYTHM: BG-WHITE) */}
      <section id="credentials" className="w-full bg-[#FAFAFA] border-b border-[#E7E7E4] py-20 md:py-28 relative isolate">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">

          {/* SECTION HEADER */}
          <div className="mb-12 md:mb-16 reveal-init stagger-1">
            <p className="text-[11px] font-mono tracking-wider text-[#6B6B6B] uppercase font-semibold mb-3">
              {tCreds.tag[language]}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111111] tracking-[-0.04em] leading-[1.1] mb-4">
              {tCreds.title[language]}{' '}
              <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#6B6B6B] font-normal tracking-normal">
                {tCreds.titleScript[language]}
              </span>
            </h2>
            <p className="text-sm md:text-base text-[#6B6B6B] max-w-3xl leading-relaxed">
              {tCreds.subtitle[language]}
            </p>
          </div>

          {/* 3-CARD CREDENTIALS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CARD 1: GDGoC Championship */}
            <div className="bg-white rounded-3xl border border-[#E7E7E4] p-5 sm:p-6 flex flex-col justify-between hover:border-black/30 hover:shadow-lg hover:shadow-black/[0.04] transition-all group reveal-init stagger-2 hover-lift">
              <div>
                {/* Visual Certificate Image */}
                <div
                  onClick={() => setSelectedCredential(credsData.gdgoc)}
                  className="w-full h-56 sm:h-60 rounded-2xl border border-[#E7E7E4] overflow-hidden relative mb-6 cursor-pointer group-hover:border-black/30 transition-all select-none shadow-xs bg-[#F7F7F5] flex items-center justify-center p-2 group/thumb"
                >
                  <img
                    src={credsData.gdgoc.imageUrl}
                    alt={credsData.gdgoc.title}
                    className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover/thumb:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/thumb:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-black/80 text-white text-[11px] font-mono tracking-wider uppercase font-semibold backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                      <span>{tCreds.seeCert[language]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-[#6B6B6B] leading-snug">
                    {credsData.gdgoc.issuer}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EFEFEA] text-[11px] font-mono font-medium text-[#6B6B6B] shrink-0">
                    {credsData.gdgoc.validity}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] tracking-[-0.03em] leading-snug mb-3">
                  {credsData.gdgoc.title}
                </h3>

                <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">
                  {credsData.gdgoc.cardDescription}
                </p>

                {/* Verified Competencies */}
                <div>
                  <h4 className="text-[10px] font-mono font-semibold tracking-wider text-[#8A8179] uppercase mb-2.5">
                    {tCreds.verifiedComp[language]}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {credsData.gdgoc.competencies.map((comp) => (
                      <span
                        key={comp}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-xs font-mono text-[#111111] hover:border-black/30 transition-colors shadow-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#111111]" />
                        <span>{comp}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 mt-6 border-t border-[#E7E7E4] flex items-center justify-between text-xs font-mono font-semibold text-[#111111]">
                <button
                  type="button"
                  onClick={() => setSelectedCredential(credsData.gdgoc)}
                  className="inline-flex items-center gap-1 hover:text-black uppercase tracking-wider transition-colors group/btn cursor-pointer btn-press"
                >
                  <span>{tCreds.previewImage[language]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCredential(credsData.gdgoc)}
                  className="inline-flex items-center gap-1 hover:text-black uppercase tracking-wider transition-colors group/btn cursor-pointer btn-press"
                >
                  <span>{tCreds.viewDetails[language]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* CARD 2: Huawei HCIA-AI V4.0 */}
            <div className="bg-white rounded-3xl border border-[#E7E7E4] p-5 sm:p-6 flex flex-col justify-between hover:border-black/30 hover:shadow-lg hover:shadow-black/[0.04] transition-all group reveal-init stagger-3 hover-lift">
              <div>
                {/* Visual Certificate Image */}
                <div
                  onClick={() => setSelectedCredential(credsData.hcia)}
                  className="w-full h-56 sm:h-60 rounded-2xl border border-[#E7E7E4] overflow-hidden relative mb-6 cursor-pointer group-hover:border-black/30 transition-all select-none shadow-xs bg-[#F7F7F5] flex items-center justify-center p-2 group/thumb"
                >
                  <img
                    src={credsData.hcia.imageUrl}
                    alt={credsData.hcia.title}
                    className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover/thumb:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/thumb:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-black/80 text-white text-[11px] font-mono tracking-wider uppercase font-semibold backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                      <span>{tCreds.seeCert[language]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-[#6B6B6B] leading-snug">
                    {credsData.hcia.issuer}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EFEFEA] text-[11px] font-mono font-medium text-[#6B6B6B] shrink-0">
                    2026
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] tracking-[-0.03em] leading-snug mb-3">
                  {credsData.hcia.cardTitle}
                </h3>

                <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">
                  {credsData.hcia.description}
                </p>

                {/* Verified Competencies */}
                <div>
                  <h4 className="text-[10px] font-mono font-semibold tracking-wider text-[#8A8179] uppercase mb-2.5">
                    {tCreds.verifiedComp[language]}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {credsData.hcia.competencies.map((comp) => (
                      <span
                        key={comp}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-xs font-mono text-[#111111] hover:border-black/30 transition-colors shadow-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#111111]" />
                        <span>{comp}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 mt-6 border-t border-[#E7E7E4] flex items-center justify-between text-xs font-mono font-semibold text-[#111111]">
                <button
                  type="button"
                  onClick={() => setSelectedCredential(credsData.hcia)}
                  className="inline-flex items-center gap-1 hover:text-black uppercase tracking-wider transition-colors group/btn cursor-pointer"
                >
                  <span>{tCreds.previewImage[language]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCredential(credsData.hcia)}
                  className="inline-flex items-center gap-1 hover:text-black uppercase tracking-wider transition-colors group/btn cursor-pointer"
                >
                  <span>{tCreds.verifyCredential[language]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* CARD 3: Huawei HCIP-Big Data Developer V2.0 */}
            <div className="bg-white rounded-3xl border border-[#E7E7E4] p-5 sm:p-6 flex flex-col justify-between hover:border-black/30 hover:shadow-lg hover:shadow-black/[0.04] transition-all group reveal-init stagger-4 hover-lift">
              <div>
                {/* Visual Certificate Image */}
                <div
                  onClick={() => setSelectedCredential(credsData.hcip)}
                  className="w-full h-56 sm:h-60 rounded-2xl border border-[#E7E7E4] overflow-hidden relative mb-6 cursor-pointer group-hover:border-black/30 transition-all select-none shadow-xs bg-[#F7F7F5] flex items-center justify-center p-2 group/thumb"
                >
                  <img
                    src={credsData.hcip.imageUrl}
                    alt={credsData.hcip.title}
                    className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover/thumb:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/thumb:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-black/80 text-white text-[11px] font-mono tracking-wider uppercase font-semibold backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                      <span>{tCreds.seeCert[language]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-[#6B6B6B] leading-snug">
                    {credsData.hcip.issuer}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EFEFEA] text-[11px] font-mono font-medium text-[#6B6B6B] shrink-0">
                    2026
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] tracking-[-0.03em] leading-snug mb-3">
                  {credsData.hcip.cardTitle}
                </h3>

                <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">
                  {credsData.hcip.description}
                </p>

                {/* Verified Competencies */}
                <div>
                  <h4 className="text-[10px] font-mono font-semibold tracking-wider text-[#8A8179] uppercase mb-2.5">
                    {tCreds.verifiedComp[language]}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {credsData.hcip.competencies.map((comp) => (
                      <span
                        key={comp}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-xs font-mono text-[#111111] hover:border-black/30 transition-colors shadow-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#111111]" />
                        <span>{comp}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 mt-6 border-t border-[#E7E7E4] flex items-center justify-between text-xs font-mono font-semibold text-[#111111]">
                <button
                  type="button"
                  onClick={() => setSelectedCredential(credsData.hcip)}
                  className="inline-flex items-center gap-1 hover:text-black uppercase tracking-wider transition-colors group/btn cursor-pointer btn-press"
                >
                  <span>{tCreds.previewImage[language]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCredential(credsData.hcip)}
                  className="inline-flex items-center gap-1 hover:text-black uppercase tracking-wider transition-colors group/btn cursor-pointer btn-press"
                >
                  <span>{tCreds.verifyCredential[language]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CREDENTIAL INSPECTION MODAL */}
      {selectedCredential && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300">
          <div className="bg-white rounded-3xl border border-[#E7E7E4] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-modal-pop">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E7E7E4] mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#111111] leading-tight">
                    {selectedCredential.title}
                  </h4>
                  <span className="text-xs font-mono text-[#6B6B6B]">
                    {selectedCredential.issuer} · {selectedCredential.validity}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCredential(null)}
                className="w-8 h-8 rounded-full border border-[#E7E7E4] flex items-center justify-center text-[#6B6B6B] hover:text-black hover:border-black transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Certificate Document Visual Preview */}
            {selectedCredential.imageUrl && (
              <div className="mb-6 rounded-2xl border border-[#E7E7E4] overflow-hidden bg-[#FAF7EE]/60 flex items-center justify-center p-2 sm:p-4">
                <img
                  src={selectedCredential.imageUrl}
                  alt={selectedCredential.title}
                  className="max-h-[420px] w-auto max-w-full object-contain rounded-xl shadow-xs border border-[#E7E7E4]/80"
                />
              </div>
            )}

            {/* Modal Certificate Badge Info */}
            <div className="p-5 rounded-2xl border border-[#E7E7E4] bg-[#FCFCFB] mb-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-semibold">
                  {selectedCredential.status}
                </span>
                <span className="text-xs font-mono text-[#8A8179]">
                  {isEn ? 'Registration / ID:' : 'Nomor Registrasi / ID:'} <strong className="text-[#111111]">{selectedCredential.regNumber}</strong>
                </span>
              </div>
              <p className="text-sm text-[#444444] leading-relaxed">
                {selectedCredential.description}
              </p>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#8A8179] mb-2 font-semibold">
                  {tCreds.verifiedComp[language]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCredential.competencies.map((comp: string) => (
                    <span
                      key={comp}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-xs font-mono text-[#111111]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{comp}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E7E7E4]">
              {selectedCredential.hasVerifyLink && (
                <a
                  href={selectedCredential.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-[#E7E7E4] text-xs font-mono font-semibold uppercase tracking-wider hover:border-black text-[#111111] transition-colors flex items-center gap-1.5"
                >
                  <span>{isEn ? 'Verify with Authority' : 'Verifikasi ke Penerbit'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                type="button"
                onClick={() => setSelectedCredential(null)}
                className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                {isEn ? 'Close Preview' : 'Tutup Pratinjau'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROJECT CASE STUDY MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl border border-[#E7E7E4] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-modal-pop"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#E7E7E4] mb-6 gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B6B6B] block mb-1">
                  {selectedProject.category} · {selectedProject.period}
                </span>
                <h4 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111111] leading-snug">
                  {selectedProject.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full border border-[#E7E7E4] flex items-center justify-center text-[#6B6B6B] hover:text-black hover:border-black transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Screenshots Horizontal Scroll Gallery */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <div className="mb-6 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8A8179] font-semibold flex items-center gap-1.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-[#111111]" />
                    <span>{tProj.screenshotsTitle[language]} ({selectedProject.screenshots.length})</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => scrollScreenshots('left')}
                      className="w-7 h-7 rounded-full border border-[#E7E7E4] bg-white hover:bg-[#F7F7F5] flex items-center justify-center text-zinc-700 transition-colors shadow-2xs cursor-pointer"
                      title={isEn ? 'Scroll Left' : 'Geser Kiri'}
                      aria-label={isEn ? 'Scroll Left' : 'Geser Kiri'}
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollScreenshots('right')}
                      className="w-7 h-7 rounded-full border border-[#E7E7E4] bg-white hover:bg-[#F7F7F5] flex items-center justify-center text-zinc-700 transition-colors shadow-2xs cursor-pointer"
                      title={isEn ? 'Scroll Right' : 'Geser Kanan'}
                      aria-label={isEn ? 'Scroll Right' : 'Geser Kanan'}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Horizontal Scroll Track */}
                <div
                  ref={screenshotsScrollRef}
                  className="flex gap-4 overflow-x-auto pb-3 pt-1 snap-x scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent select-none"
                >
                  {selectedProject.screenshots.map((shot, sIdx) => (
                    <div
                      key={sIdx}
                      className="snap-start shrink-0 w-[290px] sm:w-[380px] rounded-2xl border border-[#E7E7E4] overflow-hidden bg-[#F7F7F5] shadow-xs group/shot flex flex-col"
                    >
                      <div className="h-[180px] sm:h-[220px] w-full overflow-hidden flex items-center justify-center bg-[#EFEFEA]/60 relative">
                        {/* Fallback placeholder card underneath */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#FAF8F5] z-0">
                          <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E7E4] flex items-center justify-center text-zinc-400 mb-2 shadow-2xs">
                            <FolderGit2 className="w-5 h-5 text-zinc-400" />
                          </div>
                          <span className="text-[11px] font-mono text-[#6B6B6B] font-semibold">
                            Screenshot {sIdx + 1}
                          </span>
                          <span className="text-[10px] font-mono text-[#8A8179] mt-0.5">
                            {shot.url.replace('/projects/', '')}
                          </span>
                        </div>

                        {/* Actual Screenshot Image rendered on top */}
                        <img
                          src={shot.url}
                          alt={shot.caption}
                          className="relative z-10 w-full h-full object-cover group-hover/shot:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                      {shot.caption && (
                        <div className="p-3 border-t border-[#E7E7E4] bg-white text-xs font-mono text-[#555555] leading-snug">
                          {shot.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            <div className="space-y-5">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#8A8179] mb-1.5 font-semibold">
                  {tProj.overviewLabel[language]}
                </p>
                <p className="text-sm text-[#444444] leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-[#E7E7E4] bg-[#FCFCFB]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8179] block mb-1 font-semibold">
                  {tProj.keyOutcomeLabel[language]}
                </span>
                <p className="text-sm font-semibold text-[#111111]">
                  {selectedProject.keyOutcome}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#8A8179] mb-2 font-semibold">
                  {tProj.deliverablesLabel[language]}
                </p>
                <div className="space-y-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#444444]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#8A8179] mb-2 font-semibold">
                  {tProj.toolsLabel[language]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#E7E7E4] text-xs font-mono text-[#111111]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-[#E7E7E4]">
              {/* GitHub Link or Private Repo Indicator */}
              <div>
                {selectedProject.githubUrl ? (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#E7E7E4] hover:border-black text-xs font-mono font-semibold text-[#111111] hover:bg-[#F7F7F5] transition-all group/gh shadow-2xs"
                  >
                    <Github className="w-4 h-4 text-[#111111]" />
                    <span>{tProj.viewRepo[language]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6B6B] group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#F7F7F5] border border-[#E7E7E4] text-xs font-mono text-[#6B6B6B]">
                    <Lock className="w-3.5 h-3.5 text-[#8A8179]" />
                    <span>{tProj.privateRepo[language]}</span>
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                {tProj.closeCaseStudy[language]}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 7: CONNECT ME / CONTACT (TWO-TONE RHYTHM: BG-WHITE) */}
      <section id="contact" className="w-full bg-white border-b border-[#E7E7E4] py-20 md:py-28 relative isolate overflow-hidden">
        {/* Background Gradient Mesh Orbs (Accent in Contact Section) */}
        <div className="absolute top-1/3 right-10 md:right-28 flex items-center justify-center pointer-events-none -z-10 opacity-75">
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
        </div>
        <div className="absolute bottom-16 left-8 md:left-24 flex items-center justify-center pointer-events-none -z-10 opacity-55">
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-8">

          {/* SECTION HEADER */}
          <div className="mb-12 md:mb-16 reveal-init stagger-1">
            <p className="text-[11px] font-mono tracking-wider text-[#6B6B6B] uppercase font-semibold mb-3">
              {tContact.tag[language]}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111111] tracking-[-0.04em] leading-[1.1] mb-4">
              {tContact.title[language]}{' '}
              <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#6B6B6B] font-normal tracking-normal">
                {tContact.titleScript[language]}
              </span>
            </h2>
            <p className="text-sm md:text-base text-[#6B6B6B] max-w-2xl leading-relaxed">
              {tContact.subtitle[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* LEFT COLUMN: CONTACT CHANNELS & SOCIALS (7 COLS) */}
            <div className="lg:col-span-7 space-y-4 reveal-slide-left stagger-2">

              {/* LIVE AVAILABILITY BANNER */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E7E4] flex items-center justify-between shadow-xs hover-lift transition-all">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-[#111111]">
                      {tContact.liveStatus[language]}
                    </p>
                    <p className="text-[11px] font-mono text-[#6B6B6B]">
                      {tContact.liveRoles[language]}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#FAFAFA] border border-[#E7E7E4] text-[10px] font-mono text-[#6B6B6B]">
                  {tContact.locationTag[language]}
                </span>
              </div>

              {/* 4 CONTACT CHANNELS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* 1. EMAIL */}
                <div className="p-5 rounded-2xl bg-white border border-[#E7E7E4] flex flex-col justify-between hover:border-black/30 hover:shadow-sm transition-all group hover-lift">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#E7E7E4] flex items-center justify-center text-[#111111] group-hover:scale-105 transition-transform">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-[#8A8179] uppercase">
                        PRIMARY
                      </span>
                    </div>
                    <span className="text-[11px] font-mono uppercase text-[#8A8179] font-medium">
                      Direct Email
                    </span>
                    <h4 className="text-sm font-semibold text-[#111111] mt-0.5 mb-1 truncate" title="arbynassandro25@gmail.com">
                      arbynassandro25@gmail.com
                    </h4>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">
                      {tContact.emailDesc[language]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E7E7E4] flex items-center justify-between">
                    <a
                      href="mailto:arbynassandro25@gmail.com"
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#111111] hover:text-black uppercase tracking-wider transition-colors btn-press"
                    >
                      <span>{tContact.sendEmailBtn[language]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy('email', 'arbynassandro25@gmail.com')}
                      className="text-[11px] font-mono text-[#6B6B6B] hover:text-[#111111] flex items-center gap-1 transition-colors cursor-pointer btn-press"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">{tContact.copied[language]}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{tContact.copy[language]}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* 2. PHONE / WHATSAPP */}
                <div className="p-5 rounded-2xl bg-white border border-[#E7E7E4] flex flex-col justify-between hover:border-black/30 hover:shadow-sm transition-all group hover-lift">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#E7E7E4] flex items-center justify-center text-[#111111] group-hover:scale-105 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-semibold">
                        FASTEST
                      </span>
                    </div>
                    <span className="text-[11px] font-mono uppercase text-[#8A8179] font-medium">
                      WhatsApp & Phone
                    </span>
                    <h4 className="text-sm font-semibold text-[#111111] mt-0.5 mb-1">
                      +62 889-8839-6127
                    </h4>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">
                      {tContact.waDesc[language]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E7E7E4] flex items-center justify-between">
                    <a
                      href={isEn
                        ? "https://wa.me/6288988396127?text=Hello%20Arby%2C%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect..."
                        : "https://wa.me/6288988396127?text=Halo%20Arby%2C%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi..."
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#111111] hover:text-black uppercase tracking-wider transition-colors btn-press"
                    >
                      <span>{tContact.chatWaBtn[language]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy('phone', '+6288988396127')}
                      className="text-[11px] font-mono text-[#6B6B6B] hover:text-[#111111] flex items-center gap-1 transition-colors cursor-pointer btn-press"
                    >
                      {copiedField === 'phone' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">{tContact.copied[language]}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{tContact.copy[language]}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* 3. LINKEDIN */}
                <div className="p-5 rounded-2xl bg-white border border-[#E7E7E4] flex flex-col justify-between hover:border-black/30 hover:shadow-sm transition-all group hover-lift">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#E7E7E4] flex items-center justify-center text-[#111111] group-hover:scale-105 transition-transform">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-[#8A8179] uppercase">
                        NETWORK
                      </span>
                    </div>
                    <span className="text-[11px] font-mono uppercase text-[#8A8179] font-medium">
                      LinkedIn
                    </span>
                    <h4 className="text-sm font-semibold text-[#111111] mt-0.5 mb-1">
                      arby-nassandro
                    </h4>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">
                      {tContact.linkedinDesc[language]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E7E7E4] flex items-center justify-between">
                    <a
                      href="https://www.linkedin.com/in/arby-nassandro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#111111] hover:text-black uppercase tracking-wider transition-colors btn-press"
                    >
                      <span>{tContact.viewProfileBtn[language]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[11px] font-mono text-[#8A8179]">{tContact.linkedinTag[language]}</span>
                  </div>
                </div>

                {/* 4. GITHUB */}
                <div className="p-5 rounded-2xl bg-white border border-[#E7E7E4] flex flex-col justify-between hover:border-black/30 hover:shadow-sm transition-all group hover-lift">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#E7E7E4] flex items-center justify-center text-[#111111] group-hover:scale-105 transition-transform">
                        <Github className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-[#8A8179] uppercase">
                        CODEBASE
                      </span>
                    </div>
                    <span className="text-[11px] font-mono uppercase text-[#8A8179] font-medium">
                      GitHub
                    </span>
                    <h4 className="text-sm font-semibold text-[#111111] mt-0.5 mb-1">
                      Extluke
                    </h4>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">
                      {tContact.githubDesc[language]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E7E7E4] flex items-center justify-between">
                    <a
                      href="https://github.com/Extluke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#111111] hover:text-black uppercase tracking-wider transition-colors btn-press"
                    >
                      <span>{tContact.viewCodebaseBtn[language]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[11px] font-mono text-[#8A8179]">Open Source</span>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN: INTERACTIVE INQUIRY FORM (5 COLS) */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E7E7E4] p-6 sm:p-8 shadow-sm flex flex-col justify-between reveal-init stagger-3 hover-lift">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E7E7E4] mb-6">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#8A8179] font-semibold">
                      {tContact.inquiryTag[language]}
                    </p>
                    <h3 className="text-xl font-semibold text-[#111111] tracking-tight">
                      {tContact.inquiryTitle[language]}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAFAFA] border border-[#E7E7E4] text-[10px] font-mono text-[#6B6B6B]">
                    {tContact.inquiryBadge[language]}
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-emerald-900">{tContact.successTitle[language]}</h4>
                    <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                      {isEn ? (
                        <>Thank you, <strong>{formData.name || 'Partner'}</strong>! Your email client has opened with a drafted message. If it didn't open automatically, you can also email directly to <strong>arbynassandro25@gmail.com</strong>.</>
                      ) : (
                        <>Terima kasih, <strong>{formData.name || 'Rekan'}</strong>! Aplikasi email Anda telah dibuka dengan draf pesan. Jika belum terbuka otomatis, Anda juga dapat mengirim email langsung ke <strong>arbynassandro25@gmail.com</strong>.</>
                      )}
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-3 px-4 py-2 rounded-full bg-emerald-700 text-white text-xs font-mono font-medium hover:bg-emerald-800 transition-colors cursor-pointer btn-press"
                    >
                      {tContact.sendAnother[language]}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    {/* TOPIC SELECTION */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#8A8179] font-semibold mb-2">
                        {tContact.interestLabel[language]}
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {tContact.topics.map((tObj) => {
                          const topicLabel = tObj[language];
                          const isSelected = contactTopic === tObj.id || contactTopic === tObj.en;
                          return (
                            <button
                              key={tObj.id}
                              type="button"
                              onClick={() => setContactTopic(tObj[language])}
                              className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer btn-press ${isSelected
                                ? 'bg-[#111111] text-white border border-[#111111]'
                                : 'bg-[#FCFCFB] text-[#6B6B6B] border border-[#E7E7E4] hover:border-black/30 hover:text-[#111111]'
                                }`}
                            >
                              {topicLabel}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* NAME & EMAIL */}
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-[#8A8179] font-semibold mb-1">
                          {tContact.nameLabel[language]}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={tContact.namePlaceholder[language]}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E7E4] bg-[#FCFCFB] text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 focus:shadow-xs focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-[#8A8179] font-semibold mb-1">
                          {tContact.emailLabel[language]}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={tContact.emailPlaceholder[language]}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E7E4] bg-[#FCFCFB] text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 focus:shadow-xs focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#8A8179] font-semibold mb-1">
                        {tContact.msgLabel[language]}
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={tContact.msgPlaceholder[language]}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E7E4] bg-[#FCFCFB] text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 focus:shadow-xs focus:bg-white transition-all resize-none"
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="w-full bg-[#111111] hover:bg-black text-white py-3.5 px-6 rounded-full font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 group transition-all shadow-sm active:scale-[0.99] cursor-pointer mt-2 hover-lift btn-press"
                    >
                      <span>{tContact.btnSubmit[language]}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>

              {/* FOOTER NOTE IN CARD */}
              <div className="pt-4 mt-6 border-t border-[#E7E7E4] flex items-center justify-between text-[11px] font-mono text-[#6B6B6B]">
                <span>{tContact.directChatNote[language]}</span>
                <a
                  href="https://wa.me/6288988396127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
