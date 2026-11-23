import { useState } from 'react';
import {
  Check,
  Copy,
  Sparkles,
  Layers,
  Palette,
  Type,
  Code2,
  Sun,
  Moon,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  FolderGit2,
  Mail,
} from 'lucide-react';

export function StyleGuideScreen() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedScheme, setSelectedScheme] = useState<'zinc-50' | 'slate-50' | 'warm-50' | 'ultra-white' | 'custom'>('zinc-50');
  const [customToneHex, setCustomToneHex] = useState('#FAFAFA');

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const ULTRA_LIGHT_SCHEMES = {
    'zinc-50': {
      id: 'zinc-50',
      name: '1. Pure White ↔ Zinc 50 (#FFFFFF ↔ #FAFAFA) — STANDAR MODERN',
      tagline: 'Perbedaan hanya 1.5% kecerahan (#FAFAFA). Sangat bersih, terang, tidak kusam, dan menjadi standar website modern.',
      light: {
        name: 'Tone Terang (Pure White #FFFFFF)',
        bg: '#FFFFFF',
        card: '#FAFAFA',
        border: '#F0F0F0',
        textMain: '#111111',
        textMuted: '#666666',
      },
      dark: {
        name: 'Tone Agak Gelap Sedikit (#FAFAFA)',
        bg: '#FAFAFA',
        card: '#FFFFFF',
        border: '#EAEAEA',
        textMain: '#111111',
        textMuted: '#666666',
      },
      navbar: {
        bg: 'rgba(250, 250, 250, 0.95)',
        text: '#111111',
        border: '#EAEAEA',
        tag: 'Navbar (#FAFAFA)',
      },
      footer: {
        bg: '#F5F5F5',
        text: '#111111',
        textMuted: '#666666',
        border: '#EAEAEA',
      },
    },
    'slate-50': {
      id: 'slate-50',
      name: '2. Pure White ↔ Slate 50 (#FFFFFF ↔ #F8FAFC) — COOL ICE WHITE',
      tagline: 'Perbedaan 1.2% kecerahan dengan sentuhan sejuk (#F8FAFC). Sangat segar, putih bersih, dan matching dengan orbs biru.',
      light: {
        name: 'Tone Terang (Pure White #FFFFFF)',
        bg: '#FFFFFF',
        card: '#F8FAFC',
        border: '#EDF2F7',
        textMain: '#0F172A',
        textMuted: '#64748B',
      },
      dark: {
        name: 'Tone Agak Gelap Sedikit (#F8FAFC)',
        bg: '#F8FAFC',
        card: '#FFFFFF',
        border: '#E2E8F0',
        textMain: '#0F172A',
        textMuted: '#475569',
      },
      navbar: {
        bg: 'rgba(248, 250, 252, 0.95)',
        text: '#0F172A',
        border: '#E2E8F0',
        tag: 'Navbar (#F8FAFC)',
      },
      footer: {
        bg: '#F1F5F9',
        text: '#0F172A',
        textMuted: '#64748B',
        border: '#E2E8F0',
      },
    },
    'warm-50': {
      id: 'warm-50',
      name: '3. Pure White ↔ Soft Pearl (#FFFFFF ↔ #FBFBFA) — LEMBUT & HANGAT',
      tagline: 'Perbedaan hanya 0.8% kecerahan (#FBFBFA). Nyaris putih murni dengan nuansa lembut yang mewah.',
      light: {
        name: 'Tone Terang (Pure White #FFFFFF)',
        bg: '#FFFFFF',
        card: '#FBFBFA',
        border: '#F2F2F0',
        textMain: '#111111',
        textMuted: '#666666',
      },
      dark: {
        name: 'Tone Agak Gelap Sedikit (#FBFBFA)',
        bg: '#FBFBFA',
        card: '#FFFFFF',
        border: '#E8E8E5',
        textMain: '#111111',
        textMuted: '#555555',
      },
      navbar: {
        bg: 'rgba(251, 251, 250, 0.95)',
        text: '#111111',
        border: '#E8E8E5',
        tag: 'Navbar (#FBFBFA)',
      },
      footer: {
        bg: '#F5F5F3',
        text: '#111111',
        textMuted: '#666666',
        border: '#E8E8E5',
      },
    },
    'ultra-white': {
      id: 'ultra-white',
      name: '4. Pure White ↔ Whisper Cloud (#FFFFFF ↔ #FDFDFC) — SUPER TIPIS',
      tagline: 'Beda super tipis (99.2% kecerahan). Mata hanya merasakan pemisah halus tanpa ada warna abu-abu sama sekali.',
      light: {
        name: 'Tone Terang (Pure White #FFFFFF)',
        bg: '#FFFFFF',
        card: '#FDFDFC',
        border: '#F5F5F5',
        textMain: '#111111',
        textMuted: '#666666',
      },
      dark: {
        name: 'Tone Agak Gelap Sedikit (#FDFDFC)',
        bg: '#FDFDFC',
        card: '#FFFFFF',
        border: '#EDEDED',
        textMain: '#111111',
        textMuted: '#666666',
      },
      navbar: {
        bg: 'rgba(253, 253, 252, 0.95)',
        text: '#111111',
        border: '#EDEDED',
        tag: 'Navbar (#FDFDFC)',
      },
      footer: {
        bg: '#FAFAFA',
        text: '#111111',
        textMuted: '#666666',
        border: '#EDEDED',
      },
    },
    'custom': {
      id: 'custom',
      name: `5. Custom Color (${customToneHex})`,
      tagline: 'Warna pilihan Anda sendiri yang diatur melalui color picker atau slider.',
      light: {
        name: 'Tone Terang (Pure White #FFFFFF)',
        bg: '#FFFFFF',
        card: customToneHex,
        border: '#EFEFEF',
        textMain: '#111111',
        textMuted: '#666666',
      },
      dark: {
        name: `Tone Agak Gelap (${customToneHex})`,
        bg: customToneHex,
        card: '#FFFFFF',
        border: '#E2E2E2',
        textMain: '#111111',
        textMuted: '#555555',
      },
      navbar: {
        bg: customToneHex,
        text: '#111111',
        border: '#E2E2E2',
        tag: `Navbar (${customToneHex})`,
      },
      footer: {
        bg: customToneHex,
        text: '#111111',
        textMuted: '#666666',
        border: '#E2E2E2',
      },
    },
  };

  const scheme = ULTRA_LIGHT_SCHEMES[selectedScheme];

  const COLOR_PALETTE = [
    {
      name: 'Canvas / Page Background',
      hex: '#F7F7F5',
      tw: 'bg-[#F7F7F5]',
      border: 'border-[#E7E7E4]',
      desc: 'Warna latar belakang utama seluruh website (warm off-white).',
    },
    {
      name: 'Card Ground',
      hex: '#FCFCFB',
      tw: 'bg-[#FCFCFB]',
      border: 'border-[#E7E7E4]',
      desc: 'Warna dasar untuk kartu, box showcase, dan kontainer utama.',
    },
    {
      name: 'Panel / Secondary Surface',
      hex: '#F3F2EF',
      tw: 'bg-[#F3F2EF]',
      border: 'border-[#E7E7E4]',
      desc: 'Warna panel besar (seperti hero product panel dan section khusus).',
    },
    {
      name: 'Frosted Surface Tint',
      hex: '#FDF8F8',
      tw: 'bg-[#FDF8F8]',
      border: 'border-[#E7E7E4]',
      desc: 'Warna dasar putih susu untuk pill badge dan tombol melayang.',
    },
    {
      name: 'Border Subtle',
      hex: '#E7E7E4',
      tw: 'border-[#E7E7E4]',
      border: 'border-zinc-300',
      desc: 'Warna garis batas (border) halus khas desain Auralis.',
    },
    {
      name: 'Primary Ink (Heading & Text)',
      hex: '#111111',
      tw: 'text-[#111111]',
      border: 'border-black',
      desc: 'Warna teks utama (hampir hitam murni) untuk kontras tinggi.',
    },
    {
      name: 'Secondary Ink (Body & Subtext)',
      hex: '#6B6B6B',
      tw: 'text-[#6B6B6B]',
      border: 'border-zinc-400',
      desc: 'Warna teks sekunder dan deskripsi paragraf.',
    },
    {
      name: 'Outline / Border Accent',
      hex: '#747878',
      tw: 'border-[#747878]',
      border: 'border-zinc-500',
      desc: 'Warna garis tombol sekunder (Contact Sales, dsb).',
    },
  ];

  const GRADIENT_PRESETS = [
    {
      id: 'blue-purple',
      title: 'Pastel Sky & Lavender (Referensi Anda)',
      orb1: 'from-blue-400 to-cyan-300',
      orb2: 'from-purple-400 to-pink-300',
      code: `<div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />\n<div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />`,
    },
    {
      id: 'emerald-teal',
      title: 'Aurora Mint & Sky',
      orb1: 'from-emerald-400 to-teal-300',
      orb2: 'from-sky-400 to-blue-400',
      code: `<div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 blur-2xl absolute -ml-20 -mt-20" />\n<div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-sky-400 to-blue-400 blur-2xl absolute ml-20 mt-20" />`,
    },
    {
      id: 'amber-rose',
      title: 'Sunset Glow & Rose',
      orb1: 'from-amber-400 to-orange-300',
      orb2: 'from-rose-400 to-pink-300',
      code: `<div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-amber-400 to-orange-300 blur-2xl absolute -ml-20 -mt-20" />\n<div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-rose-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />`,
    },
    {
      id: 'indigo-violet',
      title: 'Deep Indigo & Violet',
      orb1: 'from-indigo-500 to-blue-400',
      orb2: 'from-purple-500 to-violet-400',
      code: `<div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 blur-2xl absolute -ml-20 -mt-20" />\n<div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-500 to-violet-400 blur-2xl absolute ml-20 mt-20" />`,
    },
  ];

  return (
    <div className="pt-[120px] md:pt-[130px] pb-24 max-w-[1280px] mx-auto px-6 md:px-8">
      
      {/* HEADER SECTION */}
      <div className="border-b border-[#E7E7E4] pb-10 mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E7E7E4] bg-[#FDF8F8] text-xs font-mono font-medium text-[#111111] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-black" />
          <span>PORTFOLIO DESIGN SYSTEM</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-4">
          Style Guide & Component Tokens
        </h1>
        <p className="text-[18px] leading-[1.6] text-[#6B6B6B] max-w-2xl">
          Pusat acuan gaya visual untuk website ini: aturan perbedaan warna antar seksi (ritme selang-seling gelap-terang), background mesh, palet warna, tipografi, dan komponen siap pakai.
        </p>
      </div>

      {/* 0. SPECIAL: ALTERNATING SECTION COLOR SYSTEM (KONSEP SELANG-SELING 2 WARNA) */}
      <section className="mb-24 p-6 sm:p-10 rounded-3xl border-2 border-black/10 bg-[#FCFCFB] shadow-sm relative overflow-hidden">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E7E7E4] mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-black uppercase mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black" />
              <span>ATURAN UTAMA: RITME 2 WARNA SELANG-SELING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              Alternating Two-Tone Section System
            </h2>
            <p className="text-sm text-[#6B6B6B] mt-1 max-w-xl">
              Setiap seksi bergantian warna antara <strong>Gelap (Dark)</strong> dan <strong>Terang (Light)</strong> untuk memberikan ritme visual yang dinamis saat pengguna menggulir halaman.
            </p>
          </div>

          {/* Theme Scheme Selector */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider font-semibold">
              Pilih Nuansa Terang Ekstra Lembut (Ultra-Light White Tones):
            </span>
            <div className="flex flex-wrap p-1 bg-[#F3F2EF] rounded-xl border border-[#E7E7E4] gap-1">
              {(
                [
                  { id: 'zinc-50', label: '1. Zinc 50 (#FAFAFA) ★' },
                  { id: 'slate-50', label: '2. Slate 50 (#F8FAFC)' },
                  { id: 'warm-50', label: '3. Soft Pearl (#FBFBFA)' },
                  { id: 'ultra-white', label: '4. Whisper Cloud (#FDFDFC)' },
                ] as const
              ).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedScheme(t.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedScheme === t.id
                      ? 'bg-black text-white shadow-sm font-semibold'
                      : 'text-zinc-600 hover:text-black'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Custom Color Input / Color Picker */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs font-mono text-[#6B6B6B]">Atau pilih warna sendiri:</span>
              <div className="flex items-center gap-2 bg-[#F3F2EF] px-2.5 py-1 rounded-lg border border-[#E7E7E4]">
                <input
                  type="color"
                  value={customToneHex}
                  onChange={(e) => {
                    setCustomToneHex(e.target.value);
                    setSelectedScheme('custom');
                  }}
                  className="w-5 h-5 rounded cursor-pointer border-0 bg-transparent p-0"
                  title="Pilih warna dengan Color Picker"
                />
                <input
                  type="text"
                  value={customToneHex}
                  onChange={(e) => {
                    setCustomToneHex(e.target.value);
                    setSelectedScheme('custom');
                  }}
                  placeholder="#FAFAFA"
                  className="w-20 text-xs font-mono bg-white border border-[#E7E7E4] rounded px-1.5 py-0.5 text-zinc-900"
                />
              </div>
            </div>

            <span className="text-[11px] text-[#6B6B6B] font-mono mt-0.5">
              Aktif: <strong>{scheme.name}</strong> — {scheme.tagline}
            </span>
          </div>
        </div>

        {/* LIVE SIMULATOR: Mini Full-Page Flow (Menunjukkan Ritme dari Atas ke Bawah) */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider font-semibold">
              Simulasi Visual Alur Halaman (Live Preview: Terang ↔ Agak Gelap)
            </div>
            <span className="text-xs font-mono text-zinc-500 bg-[#F3F2EF] px-2.5 py-1 rounded-md">
              Scroll ke bawah di dalam kotak untuk melihat ritme
            </span>
          </div>

          {/* Mini Device Window */}
          <div className="rounded-2xl border border-zinc-300 shadow-lg overflow-hidden bg-white max-h-[620px] overflow-y-auto divide-y divide-transparent transition-all">
            
            {/* 1. NAVBAR (AGAK GELAP) */}
            <div
              className="sticky top-0 z-30 px-6 py-4 flex items-center justify-between transition-colors duration-300 backdrop-blur-md border-b"
              style={{
                backgroundColor: scheme.navbar.bg,
                borderColor: scheme.navbar.border,
                color: scheme.navbar.text,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm tracking-tight">Alex Pratama</span>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    borderColor: scheme.navbar.border,
                  }}
                >
                  {scheme.navbar.tag}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-xs font-medium opacity-85">
                <span>About</span>
                <span>Experience</span>
                <span>Projects</span>
                <span>Skills</span>
                <span>Contact</span>
              </div>
              <button
                type="button"
                className="px-3.5 py-1.5 rounded-full text-xs font-medium shadow-xs"
                style={{
                  backgroundColor: scheme.navbar.text === '#FFFFFF' ? '#FFFFFF' : '#111111',
                  color: scheme.navbar.text === '#FFFFFF' ? '#111111' : '#FFFFFF',
                }}
              >
                Hire Me
              </button>
            </div>

            {/* 2. HERO SECTION (TERANG) */}
            <div
              className="p-8 sm:p-10 relative overflow-hidden transition-colors"
              style={{ backgroundColor: scheme.light.bg }}
            >
              {/* Soft mesh background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-65 pointer-events-none">
                <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-16 -mt-10" />
                <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-16 mt-10" />
              </div>

              <div className="relative z-10 max-w-xl">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium mb-3"
                  style={{
                    backgroundColor: scheme.light.card,
                    borderColor: scheme.light.border,
                    color: scheme.light.textMain,
                  }}
                >
                  <Sun className="w-3 h-3 text-amber-500" />
                  <span>SECTION 1: HERO (TERANG)</span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-2"
                  style={{ color: scheme.light.textMain }}
                >
                  Building fast, modern & scalable web products
                </h3>
                <p
                  className="text-xs leading-relaxed mb-4"
                  style={{ color: scheme.light.textMuted }}
                >
                  Full-stack engineer crafting responsive interfaces and resilient backend systems.
                </p>
                <div className="flex gap-2">
                  <span
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: scheme.light.textMain,
                      color: scheme.light.card,
                    }}
                  >
                    View Projects
                  </span>
                  <span
                    className="px-3.5 py-1.5 rounded-full border text-xs font-medium"
                    style={{
                      borderColor: scheme.light.border,
                      color: scheme.light.textMain,
                      backgroundColor: scheme.light.card,
                    }}
                  >
                    Get in Touch
                  </span>
                </div>
              </div>
            </div>

            {/* 3. ABOUT ME (AGAK GELAP) */}
            <div
              className="p-8 sm:p-10 transition-colors duration-300 relative"
              style={{ backgroundColor: scheme.dark.bg }}
            >
              <div className="max-w-xl">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium mb-3 border"
                  style={{
                    backgroundColor: scheme.dark.card,
                    borderColor: scheme.dark.border,
                    color: scheme.dark.textMain,
                  }}
                >
                  <Moon className="w-3 h-3 text-indigo-500" />
                  <span>SECTION 2: ABOUT ME (AGAK GELAP)</span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-2"
                  style={{ color: scheme.dark.textMain }}
                >
                  Engineering precision with design sensitivity
                </h3>
                <p
                  className="text-xs leading-relaxed mb-4"
                  style={{ color: scheme.dark.textMuted }}
                >
                  Over 5 years of experience delivering scalable software across Southeast Asia and global clients.
                </p>

                {/* Mini cards inside agak gelap */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div
                    className="p-3.5 rounded-xl border shadow-xs"
                    style={{
                      backgroundColor: scheme.dark.card,
                      borderColor: scheme.dark.border,
                    }}
                  >
                    <div
                      className="text-lg font-bold font-mono"
                      style={{ color: scheme.dark.textMain }}
                    >
                      5+ Years
                    </div>
                    <div className="text-[10px]" style={{ color: scheme.dark.textMuted }}>
                      Engineering Experience
                    </div>
                  </div>
                  <div
                    className="p-3.5 rounded-xl border shadow-xs"
                    style={{
                      backgroundColor: scheme.dark.card,
                      borderColor: scheme.dark.border,
                    }}
                  >
                    <div
                      className="text-lg font-bold font-mono"
                      style={{ color: scheme.dark.textMain }}
                    >
                      35+ Apps
                    </div>
                    <div className="text-[10px]" style={{ color: scheme.dark.textMuted }}>
                      Production Deployed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. PROFESSIONAL EXPERIENCE (TERANG) */}
            <div
              className="p-8 sm:p-10 transition-colors"
              style={{ backgroundColor: scheme.light.bg }}
            >
              <div className="max-w-xl">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium mb-3"
                  style={{
                    backgroundColor: scheme.light.card,
                    borderColor: scheme.light.border,
                    color: scheme.light.textMain,
                  }}
                >
                  <Sun className="w-3 h-3 text-amber-500" />
                  <span>SECTION 3: PROFESSIONAL EXPERIENCE (TERANG)</span>
                </div>
                <h3
                  className="text-2xl font-bold tracking-tight mb-2"
                  style={{ color: scheme.light.textMain }}
                >
                  Engineering Leadership & History
                </h3>
                <div className="space-y-2 mt-4">
                  <div
                    className="p-3.5 rounded-xl border flex items-center justify-between"
                    style={{
                      backgroundColor: scheme.light.card,
                      borderColor: scheme.light.border,
                    }}
                  >
                    <div>
                      <div
                        className="font-semibold text-xs"
                        style={{ color: scheme.light.textMain }}
                      >
                        Lead Frontend Engineer
                      </div>
                      <div className="text-[10px]" style={{ color: scheme.light.textMuted }}>
                        AuraCloud Technologies · 2023 - Present
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Current
                    </span>
                  </div>
                  <div
                    className="p-3.5 rounded-xl border flex items-center justify-between"
                    style={{
                      backgroundColor: scheme.light.card,
                      borderColor: scheme.light.border,
                    }}
                  >
                    <div>
                      <div
                        className="font-semibold text-xs"
                        style={{ color: scheme.light.textMain }}
                      >
                        Senior Full-Stack Developer
                      </div>
                      <div className="text-[10px]" style={{ color: scheme.light.textMuted }}>
                        NexaFlow Digital · 2021 - 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. PROJECTS & CASE STUDIES (AGAK GELAP) */}
            <div
              className="p-8 sm:p-10 transition-colors duration-300"
              style={{ backgroundColor: scheme.dark.bg }}
            >
              <div className="max-w-xl">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium mb-3 border"
                  style={{
                    backgroundColor: scheme.dark.card,
                    borderColor: scheme.dark.border,
                    color: scheme.dark.textMain,
                  }}
                >
                  <Moon className="w-3 h-3 text-indigo-500" />
                  <span>SECTION 4: PROJECTS & CASE STUDIES (AGAK GELAP)</span>
                </div>
                <h3
                  className="text-2xl font-bold tracking-tight mb-2"
                  style={{ color: scheme.dark.textMain }}
                >
                  Featured Systems & Case Studies
                </h3>
                <div
                  className="mt-4 p-4 rounded-2xl border shadow-xs"
                  style={{
                    backgroundColor: scheme.dark.card,
                    borderColor: scheme.dark.border,
                  }}
                >
                  <div className="text-xs font-mono text-blue-600 mb-1">Full Stack · Cloud Telemetry</div>
                  <div
                    className="font-bold text-sm mb-1"
                    style={{ color: scheme.dark.textMain }}
                  >
                    PulseMetrics Real-Time Dashboard
                  </div>
                  <p
                    className="text-[11px] leading-relaxed"
                    style={{ color: scheme.dark.textMuted }}
                  >
                    Handles 10,000+ WebSocket events per second at 60 FPS without layout shift.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. SKILLS (TERANG) */}
            <div
              className="p-8 sm:p-10 transition-colors"
              style={{ backgroundColor: scheme.light.bg }}
            >
              <div className="max-w-xl">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium mb-3"
                  style={{
                    backgroundColor: scheme.light.card,
                    borderColor: scheme.light.border,
                    color: scheme.light.textMain,
                  }}
                >
                  <Sun className="w-3 h-3 text-amber-500" />
                  <span>SECTION 5: SKILLS & TECH STACK (TERANG)</span>
                </div>
                <h3
                  className="text-2xl font-bold tracking-tight mb-2"
                  style={{ color: scheme.light.textMain }}
                >
                  Technical Architecture Toolchain
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker'].map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md border text-xs font-mono"
                      style={{
                        backgroundColor: scheme.light.card,
                        borderColor: scheme.light.border,
                        color: scheme.light.textMain,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 7. CERTIFICATIONS & CREDENTIALS (AGAK GELAP) */}
            <div
              className="p-8 sm:p-10 transition-colors duration-300"
              style={{ backgroundColor: scheme.dark.bg }}
            >
              <div className="max-w-xl">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium mb-3 border"
                  style={{
                    backgroundColor: scheme.dark.card,
                    borderColor: scheme.dark.border,
                    color: scheme.dark.textMain,
                  }}
                >
                  <Moon className="w-3 h-3 text-indigo-500" />
                  <span>SECTION 6: CERTIFICATION & CREDENTIAL (AGAK GELAP)</span>
                </div>
                <h3
                  className="text-2xl font-bold tracking-tight mb-2"
                  style={{ color: scheme.dark.textMain }}
                >
                  Verified Industry Qualifications
                </h3>
                <div
                  className="mt-3 p-3.5 rounded-xl border flex items-center justify-between shadow-xs"
                  style={{
                    backgroundColor: scheme.dark.card,
                    borderColor: scheme.dark.border,
                  }}
                >
                  <div>
                    <div
                      className="text-[10px] font-mono uppercase"
                      style={{ color: scheme.dark.textMuted }}
                    >
                      AWS Certified
                    </div>
                    <div
                      className="text-xs font-bold"
                      style={{ color: scheme.dark.textMain }}
                    >
                      AWS Cloud Practitioner
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* 8. CONTACT (TERANG) */}
            <div
              className="p-8 sm:p-10 transition-colors"
              style={{ backgroundColor: scheme.light.bg }}
            >
              <div className="max-w-xl">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium mb-3"
                  style={{
                    backgroundColor: scheme.light.card,
                    borderColor: scheme.light.border,
                    color: scheme.light.textMain,
                  }}
                >
                  <Sun className="w-3 h-3 text-amber-500" />
                  <span>SECTION 7: CONTACT (TERANG)</span>
                </div>
                <h3
                  className="text-2xl font-bold tracking-tight mb-2"
                  style={{ color: scheme.light.textMain }}
                >
                  Let's Discuss Your Project
                </h3>
                <div
                  className="p-4 rounded-xl border text-xs"
                  style={{
                    backgroundColor: scheme.light.card,
                    borderColor: scheme.light.border,
                    color: scheme.light.textMuted,
                  }}
                >
                  Formulir pesan interaktif & direct channel (Email, WhatsApp, LinkedIn).
                </div>
              </div>
            </div>

            {/* 9. FOOTER (AGAK GELAP) */}
            <div
              className="px-8 py-6 flex items-center justify-between text-xs border-t"
              style={{
                backgroundColor: scheme.footer.bg,
                borderColor: scheme.footer.border,
                color: scheme.footer.textMuted,
              }}
            >
              <span>© 2026 Alex Pratama. Built with clean architecture.</span>
              <span
                className="font-mono text-[11px] font-semibold"
                style={{ color: scheme.footer.text }}
              >
                Footer (Agak Gelap)
              </span>
            </div>

          </div>
        </div>

        {/* TABEL ATURAN PEMETAAN SEKSI */}
        <div className="mt-8">
          <div className="text-sm font-semibold text-black mb-3">
            Tabel Rencana Penerapan (Mapping Matrix untuk {scheme.name})
          </div>
          <div className="rounded-2xl border border-[#E7E7E4] overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#F7F3F2] border-b border-[#E7E7E4] text-[#111111] uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Urutan</th>
                    <th className="py-3 px-4">Seksi Web</th>
                    <th className="py-3 px-4">Warna Tone</th>
                    <th className="py-3 px-4">Background HEX</th>
                    <th className="py-3 px-4">Teks Judul</th>
                    <th className="py-3 px-4">Card Surface</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E7E4]">
                  <tr className="bg-[#ECEAE3] text-zinc-900 font-medium">
                    <td className="py-2.5 px-4 font-bold">Nav</td>
                    <td className="py-2.5 px-4">Navbar Utama</td>
                    <td className="py-2.5 px-4">AGAK GELAP</td>
                    <td className="py-2.5 px-4">{scheme.navbar.bg}</td>
                    <td className="py-2.5 px-4">{scheme.navbar.text}</td>
                    <td className="py-2.5 px-4">-</td>
                  </tr>
                  <tr className="bg-white text-black">
                    <td className="py-2.5 px-4 font-bold">01</td>
                    <td className="py-2.5 px-4 font-semibold">Hero Section</td>
                    <td className="py-2.5 px-4">TERANG</td>
                    <td className="py-2.5 px-4">{scheme.light.bg} (+ Orbs)</td>
                    <td className="py-2.5 px-4">{scheme.light.textMain}</td>
                    <td className="py-2.5 px-4">{scheme.light.card}</td>
                  </tr>
                  <tr className="bg-[#ECEAE3] text-zinc-900 font-medium">
                    <td className="py-2.5 px-4 font-bold">02</td>
                    <td className="py-2.5 px-4 font-semibold">About Me</td>
                    <td className="py-2.5 px-4">AGAK GELAP</td>
                    <td className="py-2.5 px-4">{scheme.dark.bg}</td>
                    <td className="py-2.5 px-4">{scheme.dark.textMain}</td>
                    <td className="py-2.5 px-4">{scheme.dark.card}</td>
                  </tr>
                  <tr className="bg-white text-black">
                    <td className="py-2.5 px-4 font-bold">03</td>
                    <td className="py-2.5 px-4 font-semibold">Professional Experience</td>
                    <td className="py-2.5 px-4">TERANG</td>
                    <td className="py-2.5 px-4">{scheme.light.bg}</td>
                    <td className="py-2.5 px-4">{scheme.light.textMain}</td>
                    <td className="py-2.5 px-4">{scheme.light.card}</td>
                  </tr>
                  <tr className="bg-[#ECEAE3] text-zinc-900 font-medium">
                    <td className="py-2.5 px-4 font-bold">04</td>
                    <td className="py-2.5 px-4 font-semibold">Project & Case Studies</td>
                    <td className="py-2.5 px-4">AGAK GELAP</td>
                    <td className="py-2.5 px-4">{scheme.dark.bg}</td>
                    <td className="py-2.5 px-4">{scheme.dark.textMain}</td>
                    <td className="py-2.5 px-4">{scheme.dark.card}</td>
                  </tr>
                  <tr className="bg-white text-black">
                    <td className="py-2.5 px-4 font-bold">05</td>
                    <td className="py-2.5 px-4 font-semibold">Skills</td>
                    <td className="py-2.5 px-4">TERANG</td>
                    <td className="py-2.5 px-4">{scheme.light.bg}</td>
                    <td className="py-2.5 px-4">{scheme.light.textMain}</td>
                    <td className="py-2.5 px-4">{scheme.light.card}</td>
                  </tr>
                  <tr className="bg-[#ECEAE3] text-zinc-900 font-medium">
                    <td className="py-2.5 px-4 font-bold">06</td>
                    <td className="py-2.5 px-4 font-semibold">Certification & Credential</td>
                    <td className="py-2.5 px-4">AGAK GELAP</td>
                    <td className="py-2.5 px-4">{scheme.dark.bg}</td>
                    <td className="py-2.5 px-4">{scheme.dark.textMain}</td>
                    <td className="py-2.5 px-4">{scheme.dark.card}</td>
                  </tr>
                  <tr className="bg-white text-black">
                    <td className="py-2.5 px-4 font-bold">07</td>
                    <td className="py-2.5 px-4 font-semibold">Contact</td>
                    <td className="py-2.5 px-4">TERANG</td>
                    <td className="py-2.5 px-4">{scheme.light.bg}</td>
                    <td className="py-2.5 px-4">{scheme.light.textMain}</td>
                    <td className="py-2.5 px-4">{scheme.light.card}</td>
                  </tr>
                  <tr className="bg-[#ECEAE3] text-zinc-900 font-medium">
                    <td className="py-2.5 px-4 font-bold">End</td>
                    <td className="py-2.5 px-4 font-semibold">Footer</td>
                    <td className="py-2.5 px-4">AGAK GELAP</td>
                    <td className="py-2.5 px-4">{scheme.footer.bg}</td>
                    <td className="py-2.5 px-4">{scheme.footer.text}</td>
                    <td className="py-2.5 px-4">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </section>

      {/* 1. BACKGROUND & GRADIENT MESH SHOWCASE */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
              1. Backgrounds & Gradient Mesh Glow
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Efek latar belakang gradasi lembut yang digunakan pada card dan hero section.
            </p>
          </div>
        </div>

        {/* Live Card Preview (The Exact Component from User Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Card Preview Column */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider font-semibold">
              Live Preview: Card dengan Background Mesh
            </div>
            
            {/* The Actual Card Component */}
            <div className="text-left bg-[#FCFCFB] rounded-3xl p-6 sm:p-8 border border-[#E7E7E4] h-[440px] sm:h-[450px] flex flex-col relative overflow-hidden group hover:border-zinc-300 transition-all shadow-sm">
              {/* Gradient Orbs Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none">
                <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />
                <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
              </div>

              {/* Pill badge on top */}
              <div className="z-10 bg-[#FDF8F8]/85 backdrop-blur-sm self-start px-4 py-2 rounded-full border border-[#E7E7E4] text-sm font-medium text-[#111111] mb-auto">
                Omnichannel agents
              </div>

              {/* Frosted glass container on bottom */}
              <div className="z-10 mt-auto w-full bg-white/35 backdrop-blur-2xl p-5 sm:p-6 rounded-[2rem] border border-white/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
                <div className="flex gap-3 sm:gap-4 items-center mb-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
                  </div>
                  <div className="bg-white/65 backdrop-blur-md border border-white/70 px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm text-[#111111] shadow-sm">
                    Hello! How can I assist you today?
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 items-center flex-row-reverse">
                  <div className="w-10 h-10 bg-white/65 backdrop-blur-md border border-white/70 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-black text-sm">person</span>
                  </div>
                  <div className="bg-black/95 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm shadow-lg">
                    I need help checking my deployment status.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Breakdown & Copy Column */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider font-semibold">
                Kode Tailwind yang Digunakan
              </div>
              <button
                type="button"
                onClick={() =>
                  handleCopy(
                    'card-code',
                    `<div className="relative bg-[#FCFCFB] rounded-3xl p-8 border border-[#E7E7E4] overflow-hidden">\n  {/* Background Gradient Orbs */}\n  <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">\n    <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />\n    <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />\n  </div>\n\n  {/* Content */}\n  <div className="relative z-10">\n    ...\n  </div>\n</div>`
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E7E7E4] bg-white text-xs font-mono text-zinc-700 hover:text-black hover:border-black transition-colors"
              >
                {copiedKey === 'card-code' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Kode Card</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-[#111111] text-zinc-200 rounded-2xl p-5 font-mono text-xs overflow-x-auto leading-relaxed border border-zinc-800">
              <pre className="whitespace-pre-wrap">{`/* Struktur Background Orbs */
<div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
  {/* Orb 1: Biru ke Cyan */}
  <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20" />

  {/* Orb 2: Ungu ke Pink */}
  <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20" />
</div>

/* Kunci Kelas CSS:
 - bg-gradient-to-r from-blue-400 to-cyan-300 (Warna biru)
 - bg-gradient-to-r from-purple-400 to-pink-300 (Warna ungu/pink)
 - blur-2xl (Menghasilkan efek kabut lembut)
 - opacity-60 (Agar warnanya soft dan tidak menutupi teks)
 - -ml-20 -mt-20 / ml-20 mt-20 (Memosisikan orb di diagonal)
*/`}</pre>
            </div>

            {/* Quick Tips */}
            <div className="p-4 rounded-xl border border-[#E7E7E4] bg-[#FCFCFB] text-xs text-[#6B6B6B] space-y-1">
              <span className="font-semibold text-black">💡 Tips Penggunaan di Seksi Lain:</span>
              <p>
                Untuk membuat seksi besar (seperti Hero atau About), cukup perbesar ukuran orb menjadi{' '}
                <code className="text-black bg-[#F3F2EF] px-1 py-0.5 rounded font-mono">w-[400px] h-[400px] blur-3xl</code>.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Pilihan Kombinasi Warna Gradasi */}
        <div className="mt-8">
          <div className="text-sm font-semibold text-black mb-4">
            Koleksi Variasi Warna Gradient Orbs
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GRADIENT_PRESETS.map((preset) => (
              <div
                key={preset.id}
                className="p-5 rounded-2xl border border-[#E7E7E4] bg-[#FCFCFB] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Mini Orbs inside Card */}
                <div className="h-28 w-full rounded-xl bg-[#F7F7F5] relative overflow-hidden flex items-center justify-center border border-[#E7E7E4] mb-3">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${preset.orb1} blur-xl absolute -ml-10 -mt-6 opacity-75`}
                  />
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${preset.orb2} blur-xl absolute ml-10 mt-6 opacity-75`}
                  />
                  <span className="z-10 text-[11px] font-mono font-medium bg-white/70 backdrop-blur-sm px-2.5 py-1 rounded-full text-black border border-white/80">
                    Preview
                  </span>
                </div>

                <div>
                  <div className="font-semibold text-sm text-black mb-1">{preset.title}</div>
                  <div className="text-[11px] font-mono text-[#6B6B6B] mb-3 truncate">
                    {preset.orb1} · {preset.orb2}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(preset.id, preset.code)}
                  className="w-full py-1.5 rounded-lg border border-[#E7E7E4] text-xs font-mono text-zinc-700 hover:text-black hover:border-black transition-colors flex items-center justify-center gap-1.5"
                >
                  {copiedKey === preset.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Orbs</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 2. COLOR PALETTE */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
              2. Palet Warna (Color Palette)
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Warna-warna dasar netral yang membentuk tampilan bersih dan mewah pada template.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COLOR_PALETTE.map((color) => (
            <div
              key={color.hex}
              onClick={() => handleCopy(color.hex, color.hex)}
              className="p-4 rounded-2xl border border-[#E7E7E4] bg-[#FCFCFB] hover:border-black transition-all cursor-pointer group"
              title="Klik untuk menyalin kode HEX"
            >
              <div
                className={`h-20 w-full rounded-xl border ${color.border} mb-3 flex items-center justify-center transition-transform group-hover:scale-[1.02]`}
                style={{ backgroundColor: color.hex }}
              >
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-md backdrop-blur-md"
                  style={{
                    backgroundColor: color.hex === '#111111' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.06)',
                    color: color.hex === '#111111' ? '#FFFFFF' : '#111111',
                  }}
                >
                  {copiedKey === color.hex ? 'Copied!' : color.hex}
                </span>
              </div>
              <div className="font-semibold text-sm text-black mb-0.5">{color.name}</div>
              <div className="text-xs font-mono text-[#6B6B6B] mb-2">{color.tw}</div>
              <p className="text-[11px] text-[#6B6B6B] leading-normal">{color.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TYPOGRAPHY */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center">
            <Type className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
              3. Tipografi (Typography Hierarchy)
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Skala tipografi, bobot font, dan kerning (letter-spacing) yang dipakai.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-[#E7E7E4] bg-[#FCFCFB] divide-y divide-[#E7E7E4] overflow-hidden">
          
          {/* Display H1 */}
          <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider block mb-2">
                Display Headline 1 (Hero Title)
              </span>
              <h1 className="text-[44px] sm:text-[56px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-0.04em] text-black">
                Building fast, modern & scalable web products
              </h1>
            </div>
            <div className="text-xs font-mono text-[#6B6B6B] bg-[#F7F3F2] p-3 rounded-xl border border-[#E7E7E4] shrink-0 lg:w-64">
              text-[52px] sm:text-[68px] lg:text-[84px] font-semibold leading-[1.05] tracking-[-0.04em]
            </div>
          </div>

          {/* Heading H2 */}
          <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider block mb-2">
                Section Heading 2
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-semibold leading-[1.15] tracking-[-0.03em] text-black">
                Engineered for lifelike clarity across every surface
              </h2>
            </div>
            <div className="text-xs font-mono text-[#6B6B6B] bg-[#F7F3F2] p-3 rounded-xl border border-[#E7E7E4] shrink-0 lg:w-64">
              text-[36px] sm:text-[44px] font-semibold tracking-[-0.03em]
            </div>
          </div>

          {/* Subheading H3 */}
          <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider block mb-2">
                Card / Feature Title 3
              </span>
              <h3 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-black">
                Autonomous voice & omnichannel execution
              </h3>
            </div>
            <div className="text-xs font-mono text-[#6B6B6B] bg-[#F7F3F2] p-3 rounded-xl border border-[#E7E7E4] shrink-0 lg:w-64">
              text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em]
            </div>
          </div>

          {/* Eyebrow Label */}
          <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider block mb-2">
                Eyebrow / Section Label
              </span>
              <div className="text-[12px] font-semibold text-[#6B6B6B] uppercase tracking-[0.12em]">
                01 / CORE ARCHITECTURE & SYSTEM DESIGN
              </div>
            </div>
            <div className="text-xs font-mono text-[#6B6B6B] bg-[#F7F3F2] p-3 rounded-xl border border-[#E7E7E4] shrink-0 lg:w-64">
              text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6B6B6B]
            </div>
          </div>

          {/* Body Text */}
          <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider block mb-2">
                Body / Paragraph Text
              </span>
              <p className="text-[18px] leading-[1.6] tracking-[-0.01em] text-[#6B6B6B]">
                Studio-grade speech synthesis, real-time conversational agents, and low-latency audio APIs engineered for lifelike clarity across every digital surface.
              </p>
            </div>
            <div className="text-xs font-mono text-[#6B6B6B] bg-[#F7F3F2] p-3 rounded-xl border border-[#E7E7E4] shrink-0 lg:w-64">
              text-[18px] leading-[1.6] tracking-[-0.01em] text-[#6B6B6B]
            </div>
          </div>

        </div>
      </section>

      {/* 4. UI COMPONENTS */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
              4. Komponen Antarmuka (UI Elements)
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Kumpulan tombol, pill, badge status, dan elemen interaktif siap pakai.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Buttons showcase */}
          <div className="p-6 rounded-2xl border border-[#E7E7E4] bg-[#FCFCFB] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider mb-4 font-semibold">
                Tombol (Buttons)
              </div>
              <div className="space-y-3">
                <div>
                  <button
                    type="button"
                    className="w-full bg-black text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-zinc-800 active:scale-[0.98] text-sm"
                  >
                    Primary Button (Hitam)
                  </button>
                  <span className="text-[10px] font-mono text-[#6B6B6B] block mt-1">
                    bg-black text-white rounded-full
                  </span>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full bg-transparent border border-[#747878] text-black px-6 py-3 rounded-full font-medium transition-all hover:bg-[#E5E2E1]/60 active:scale-[0.98] text-sm"
                  >
                    Secondary Button (Outline)
                  </button>
                  <span className="text-[10px] font-mono text-[#6B6B6B] block mt-1">
                    border border-[#747878] rounded-full
                  </span>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full bg-[#F7F3F2] px-4 py-2 rounded-full border border-[#E7E7E4] text-sm font-medium text-[#111111] hover:bg-[#FDF8F8] transition-colors"
                  >
                    Pill Button (Subtle Surface)
                  </button>
                  <span className="text-[10px] font-mono text-[#6B6B6B] block mt-1">
                    bg-[#F7F3F2] border-[#E7E7E4]
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pills & Badges */}
          <div className="p-6 rounded-2xl border border-[#E7E7E4] bg-[#FCFCFB] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider mb-4 font-semibold">
                Status Pills & Badges
              </div>
              <div className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E7E7E4] bg-[#FDF8F8]/85 backdrop-blur-sm text-sm font-medium text-[#111111]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available for projects</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6B6B6B] block mt-1">
                    Status Pill dengan Green Pulse
                  </span>
                </div>

                <div>
                  <div className="inline-block bg-[#FDF8F8]/85 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E7E7E4] text-sm font-medium text-[#111111]">
                    Omnichannel agents
                  </div>
                  <span className="text-[10px] font-mono text-[#6B6B6B] block mt-1">
                    Category Tag Badge
                  </span>
                </div>

                <div>
                  <div className="inline-flex bg-[#F7F3F2] p-1 rounded-full border border-[#E7E7E4]">
                    <span className="bg-[#FDF8F8] text-black px-3.5 py-1.5 rounded-full text-xs font-medium shadow-sm">
                      Active Tab
                    </span>
                    <span className="text-[#6B6B6B] px-3.5 py-1.5 rounded-full text-xs font-medium">
                      Inactive Tab
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6B6B6B] block mt-1">
                    Segmented Tab Pill Container
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Frosted Glass & Chat Bubbles */}
          <div className="p-6 rounded-2xl border border-[#E7E7E4] bg-[#FCFCFB] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#6B6B6B] uppercase tracking-wider mb-4 font-semibold">
                Frosted Glass & Chat Bubbles
              </div>
              <div className="space-y-3">
                <div className="bg-white/35 backdrop-blur-2xl p-4 rounded-2xl border border-white/60 shadow-sm space-y-2">
                  <div className="flex gap-2 items-center">
                    <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white text-xs">
                      🤖
                    </div>
                    <div className="bg-white/65 backdrop-blur-md border border-white/70 px-3 py-1.5 rounded-xl text-xs text-[#111111]">
                      Hello! How can I assist you?
                    </div>
                  </div>
                  <div className="flex gap-2 items-center flex-row-reverse">
                    <div className="w-7 h-7 bg-white/70 rounded-full flex items-center justify-center text-xs">
                      👤
                    </div>
                    <div className="bg-black/95 text-white px-3 py-1.5 rounded-xl text-xs">
                      Check my deployment status.
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#6B6B6B] block">
                  backdrop-blur-2xl + border-white/60
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
